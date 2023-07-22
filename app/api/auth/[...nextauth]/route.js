import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { connectToDb } from "@/utils/database";
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
      authorize(credentials, req) {
        // query if the user exists
        console.log(credentials);
        const user = {
          id: "1",
          name: "Furkan Cengiz",
          email: "muhammedcengiz1@gmail.com",
        };
        if (user.email === credentials.email) return true;
        else return null;
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
