"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

type Term = "short_term" | "medium_term" | "long_term" | null;

type SpotifyContextData = {
  name: string;
  spotifyId: string;
  spotifyAccessToken: string;
  term: Term;
  setTerm: (param: Term) => void;
  image: string;
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
  const [term, setTerm] = useState<Term>("short_term");
  const [qualityImage, setQualityImage] = useState<string>();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    axios
      .get("/api/spotify/topTracks", {
        params: { term: term },
        headers: { Authorization: session.token.access_token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("/api/spotify/profile", {
        headers: { Authorization: session.token.access_token },
      })
      .then((res) => {
        console.log(res.data);
        setQualityImage(res.data.image);
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
        term: term,
        setTerm: setTerm,
        image: qualityImage ? qualityImage : session?.user?.image!,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
}
