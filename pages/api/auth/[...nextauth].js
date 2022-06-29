import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axiosClient from "@/services/axios";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await axiosClient.get("/sanctum/csrf-cookie");

        const res = await axiosClient.post("/login", credentials);


       const user = res.data.user;
       console.log(user);
        if ( user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
});
