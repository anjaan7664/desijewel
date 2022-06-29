import NextAuth , { DefaultSession }from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        name: String,
        email: String,
        password: String,
        createdAt: Date,
        updatedAt: Date,
        role: String,
    } & DefaultSession["user"]
  }
}