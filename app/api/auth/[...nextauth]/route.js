import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { connectToDb } from "@/utils/database";
import { AES, enc } from "crypto-js";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Please enter your email",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Please enter your password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // query if the user exists
        const hasUser = await User.findOne({ email: credentials.email }).exec();
        if (!hasUser || hasUser.password === null) return null;
        const decryptedBytes = AES.decrypt(
          credentials.password,
          process.env.NEXT_PUBLIC_ENCRYPTION_KEY
        );
        const decrypedPassword = decryptedBytes.toString(enc.Utf8);
        const decryptedBytesCredentials = AES.decrypt(
          hasUser.password,
          process.env.NEXT_PUBLIC_ENCRYPTION_KEY
        );
        const decrypedPasswordCredentials = decryptedBytesCredentials.toString(
          enc.Utf8
        );
        const isPasswordCorrect =
          decrypedPasswordCredentials === decrypedPassword;
        if (!isPasswordCorrect) return null;
        return true;
      },
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });
    session.user.sessionId = sessionUser?._id.toString();
    return session;
  },
  callbacks: {
    async signIn({ user, profile }) {
      try {
        await connectToDb();
        const existingUser = User.findOne({ email: user.email });
        // check if user is allowed to sign in and save their data to db
        if (existingUser) return true;
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          username: user.name,
          email: user.email,
          location: profile.locale,
          profilePicture: user.image,
          courses: [],
          achievements: [],
          followers: [],
          following: [],
          finishedCourses: [],
          loginState: true,
          streak: 0,
          hoursSpent: 0,
        });
        await newUser.save();
        return true;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});

export { handler as GET, handler as POST };
