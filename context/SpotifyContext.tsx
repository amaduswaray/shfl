"use client";

import { createContext, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

type SpotifyContextData = {
  name: string;
  spotifyId: string;
  spotifyAccessToken: string;
  // image: string;
  // shotsGiven: number;
  // gamesPlayed: number;
  // shotsTaken: number;
  // isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const SpotifyContext = createContext({} as SpotifyContextData);

export function SpotifyProvider({ children }: AuthProviderProps) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    axios
      .get("/api/topTracks", {
        params: { term: "short_term" },
        headers: { Authorization: session.token.access_token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [session]);
  // useEffect to spotify endpoint - create a local spotify endpoint that returns all needed daat
  return (
    <SpotifyContext.Provider
      value={{
        name: "test",
        spotifyId: session?.token.sub!,
        spotifyAccessToken: session?.token.access_token!,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
}
