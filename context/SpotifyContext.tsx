"use client";

import { DefaultSession } from "next-auth";
import { createContext, ReactNode } from "react";

type SpotifyContextData = {
  name: string;
  // image: string;
  // shotsGiven: number;
  // gamesPlayed: number;
  // shotsTaken: number;
  // isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
  session: DefaultSession | null;
};

export const SpotifyContext = createContext({} as SpotifyContextData);

export function SpotifyProvider({ children, session }: AuthProviderProps) {
  return (
    <SpotifyContext.Provider
      value={{
        name: "test",
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
}
