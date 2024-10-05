import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization: process.env.SPOTIFY_LOGIN_URL!,
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.access_token = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      };
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
