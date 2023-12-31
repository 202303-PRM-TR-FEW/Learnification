import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { connectToDb } from "@/utils/database";
import { AES, enc } from "crypto-js";
import { generateFreeCourseIds } from "@/utils/freeCourses";
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
        await connectToDb();
        const user = await User.findOne({ email: credentials.email }).exec();
        if (!user || user.password === null) return null;
        const decryptedBytes = AES.decrypt(
          credentials.password,
          process.env.NEXT_PUBLIC_ENCRYPTION_KEY
        );
        const decrypedPassword = decryptedBytes.toString(enc.Utf8);
        const decryptedBytesCredentials = AES.decrypt(
          user.password,
          process.env.NEXT_PUBLIC_ENCRYPTION_KEY
        );
        const decrypedPasswordCredentials = decryptedBytesCredentials.toString(
          enc.Utf8
        );
        const isPasswordCorrect = decrypedPasswordCredentials === decrypedPassword;
        if (!isPasswordCorrect) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        await connectToDb();
        const existingUser = await User.findOne({ email: user.email }).exec();
        // check if user is allowed to sign in and save their data to db
        if (existingUser) return existingUser;
        const { courseIds, status } = await generateFreeCourseIds();
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
        if (status === "success") newUser.courses.push(...courseIds);
        await newUser.save();
        return newUser;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    session: async (session) => {
      await connectToDb();
      const userFromDB = await User.findOne({
        email: session.session.user.email
      }).exec();
      const hasPictureInDB = userFromDB.profilePicture !== null;
      session.session.user.name = userFromDB.username;
      session.session.user.email = userFromDB.email;
      session.session.user.image = hasPictureInDB ? userFromDB.profilePicture : session.session.user.image;
      session.session.user.location = userFromDB.location
      return session
    }
  },
  pages: {
    signIn: "/sign-in",
  },
});

export { handler as GET, handler as POST };
