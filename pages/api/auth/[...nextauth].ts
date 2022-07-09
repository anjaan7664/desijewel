import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectMongo from "@/utils/connectMongo";
import { verifyPassword } from "@/utils/auth";
import User from "@/models/user.model";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        await connectMongo();

        const { email, password } = credentials;
        const user = await User.findOne({
          email: email,
        });
        if (!user) {
          throw new Error("No user found!");
        }
        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        await connectMongo();
        console.log(profile);
        const user = await User.findOne({ email: profile.email });
        if (user) {
          return user;
        } else {
          const newUser = await User.create({
            name: profile.name,
            email: profile.email,
            picture: profile.picture,
            email_verified: true,
          });
          return newUser;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
