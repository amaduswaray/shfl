"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { DefaultSession } from "next-auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

type AuthContextData = {
  name: string;
  image: string;
  shotsGiven: number;
  gamesPlayed: number;
  shotsTaken: number;
};

type AuthProviderProps = {
  children: ReactNode;
  session: DefaultSession | null;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children, session }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (!session) return;

    axios
      .post("/api/auth", session.user)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        name: session?.user?.name!,
        image: session?.user?.image!,
        shotsGiven: user?.shotsGiven || 0,
        gamesPlayed: user?.gamesPlayed || 0,
        shotsTaken: user?.shotsTaken || 0,
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
}
