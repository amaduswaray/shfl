import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    token: {
      name: string;
      email: string;
      picture: string;
      sub: string;
      access_token: string;
      refreshToken: string;
      accessTokenExpires: number;
      iat: number;
      exp: number;
      jti: string;
    };
  }
}
