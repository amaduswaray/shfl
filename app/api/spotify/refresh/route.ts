import { headers } from "next/headers";

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const headerList = headers();
    const refreshToken = headerList.get("Authorization");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      `grant_type=refresh_token&refresh_token=${refreshToken}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
          ).toString("base64")}`,
        },
        timeout: 5000, // Optional: Set a timeout for the request to prevent caching
      },
    );

    const { access_token, expires_in } = response.data;
    return NextResponse.json({
      success: true,
      status: 200,
      accessToken: access_token,
      expiresIn: expires_in,
    });
  } catch (error: any) {
    console.error("Error during Spotify token request:", error);
    const statusCode = error.response?.status || 500; // Get status code from response or default to 500
    return NextResponse.json({
      success: false,
      message: "Failed to refresh token",
      error: error.message,
      status: statusCode,
    });
  }
}
