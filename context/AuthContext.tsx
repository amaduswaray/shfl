"use client";
import { ReactNode, createContext, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { DefaultSession } from "next-auth";
import axios from "axios";
import { useRouter } from "next/navigation";

type AuthContextData = {
  placeholder: string;
  spotifyId?: string; // add a setSpotifyID
};

type AuthProviderProps = {
  children: ReactNode;
  session: DefaultSession | null;
};

export const AuthContext = createContext({} as AuthContextData);

// TODO: Add all other auth variables needed for the context
// useEffect for fetching data, as well as in game stats
// Spotify is most played songs
// In games stats are from the

// If session, register user
//    Register api checks if user exists, if not we create. if we do, we just return
export function AuthProvider({ children, session }: AuthProviderProps) {
  useEffect(() => {
    if (!session) return;

    axios
      .post("/api/auth", session.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <AuthContext.Provider value={{ placeholder: "hello" }}>
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
}
