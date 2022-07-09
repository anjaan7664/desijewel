import NextAuth, { DefaultSession } from "next-auth";

import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: String;
      email: String;
      picture: String;
      email_verified: Boolean;
      password: String;
      createdAt: Date;
      updatedAt: Date;
      role: String;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
