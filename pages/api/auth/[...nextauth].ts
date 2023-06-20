import { authOptions } from "@/lib/auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    // session: {
    //   strategy: "jwt",
    // },
    callbacks: {
      async session({ session, user }) {
        session.user.role = user.role;
        session.user.tenant = user.tenant;
        return session;
      },
      async signIn({ user, account, profile, email, credentials }) {
        // console.log({ user, account, profile, email, credentials });
        console.log(user.tenant, req.headers.host);
        // check if hostname = users tenant in DB
        if (user.tenant !== "cabify") {
          return false;
        }
        return true;
      },
    },
  });
}
