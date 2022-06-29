import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectMongo from "@/utils/connectMongo";
import { verifyPassword } from "@/utils/auth";
// import user.model in typescript
import  User  from "@/models/user.model";

export default NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  providers: [
    
    CredentialsProvider({
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongo();

        const user = await User.findOne({
          email: credentials?.email
        });
        if (!user) {
          throw new Error("No user found!");
        }
        const isValid = await verifyPassword(
          credentials?.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        return { email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
