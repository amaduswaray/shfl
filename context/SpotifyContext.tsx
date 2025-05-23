"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Track } from "@/interfaces/spotify";

type Term = "short_term" | "medium_term" | "long_term" | null;

type SpotifyContextData = {
  name: string;
  spotifyId: string;
  spotifyAccessToken: string;
  term: Term;
  setTerm: (param: Term) => void;
  image: string;
  topTracks: Track[];
};

type AuthProviderProps = {
  children: ReactNode;
};

export const SpotifyContext = createContext({} as SpotifyContextData);

export function SpotifyProvider({ children }: AuthProviderProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const [term, setTerm] = useState<Term>("short_term");
  const [qualityImage, setQualityImage] = useState<string>();
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [accessToken, setAccessToken] = useState<string>(
    session?.token.access_token!,
  );
  const [refreshToken, setRefreshToken] = useState<string>(
    session?.token.refreshToken!,
  );
  const [expiresIn, setExpiresIn] = useState<number>(
    session?.token.accessTokenExpires!,
  );

  useEffect(() => {
    if (!session) return;
    setAccessToken(session.token.access_token);
    setRefreshToken(session.token.refreshToken);
    setExpiresIn(session.token.accessTokenExpires);
  }, [session]);

  useEffect(() => {
    if (!accessToken || !session) return;
    axios
      .get("/api/spotify/topTracks", {
        params: { term: term },
        headers: { Authorization: accessToken },
      })
      .then((res) => {
        if (res.data.success) setTopTracks(res.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [term, accessToken, session]);

  useEffect(() => {
    if (!accessToken || !session) return;

    axios
      .get("/api/spotify/topTracks", {
        params: { term: term },
        headers: { Authorization: accessToken },
      })
      .then((res) => {
        if (res.data.success) setTopTracks(res.data.items);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("/api/spotify/profile", {
        headers: { Authorization: accessToken },
      })
      .then((res) => {
        setQualityImage(res.data.image);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [accessToken, session]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(
      () => {
        axios
          .get("/api/spotify/refresh", {
            headers: { Authorization: refreshToken },
          })
          .then((res) => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
          })
          .catch((error) => {
            console.error(error);
            router.push("/");
          });
      },
      (expiresIn - 60) * 1000,
    );

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return (
    <SpotifyContext.Provider
      value={{
        name: "test",
        spotifyId: session?.token.sub!,
        spotifyAccessToken: accessToken,
        term: term,
        setTerm: setTerm,
        image: qualityImage ? qualityImage : session?.user?.image!,
        topTracks: topTracks,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
}
