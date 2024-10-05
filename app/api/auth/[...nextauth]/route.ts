import NextAuth from "next-auth/next";
import axios from "axios";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";
const LOGIN_URL =
  "https://accounts.spotify.com/authorize?client_id=4e1814917bcd4433976396284bcd5df4&response_type=code&redirect_uri=http://localhost:3000/api/auth/callback/spotify&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read%20playlist-modify-public%20playlist-modify-private";

/* const refreshAccessToken = async (token: JWT) {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken);
  
  const response = axios.post(LOGIN_URL, null, {headers})

} */

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization: LOGIN_URL,
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      // Access token has not expired
      // if (Date.now() < token.accessTokenExpires * 1000) return token;

      // Access token has expired
      // return refreshAccessToken(token);
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
