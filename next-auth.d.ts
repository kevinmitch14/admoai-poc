import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      role: "ADMIN" | "REGULAR";
      tenant: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: "ADMIN" | "REGULAR";
    tenant: string & DefaultUser;
  }
}
