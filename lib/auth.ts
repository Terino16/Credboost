import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password as string, user.password as string);
        if (!isValid) return null;

        const accountExists = await prisma.account.findFirst({
          where: { userId: user.id, provider: "credentials" },
        });

        if (!accountExists) {
          await prisma.account.create({
            data: {
              userId: user.id,
              type: "credentials",
              provider: "credentials",
              providerAccountId: user.id,
            },
          });
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;  // Store subscription in token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string; 
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
