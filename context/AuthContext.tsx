"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { DefaultSession } from "next-auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

type Role = "player" | "host";

type AuthContextData = {
  name: string;
  email: string;
  image: string;
  shotsGiven: number;
  gamesPlayed: number;
  shotsTaken: number;
  isAuthenticated: boolean;
  showProfile: boolean;
  setShowProfile: (param: boolean) => void;
  role: Role;
  setRole: (role: Role) => void;
};

type AuthProviderProps = {
  children: ReactNode;
  session: DefaultSession | null;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children, session }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [role, setRole] = useState<Role>("player");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!session) return;

    axios
      .post("/api/auth", session.user)
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error(error);
        signOutLocal();
      });
  }, []);

  const signOutLocal = () => {
    signOut();
    window.localStorage.clear();
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        name: session?.user?.name!,
        email: session?.user?.email!,
        image: session?.user?.image!,
        shotsGiven: user?.shotsGiven || 0,
        gamesPlayed: user?.gamesPlayed || 0,
        shotsTaken: user?.shotsTaken || 0,
        isAuthenticated: isAuthenticated,
        role: role,
        setRole: setRole,
        showProfile: showProfile,
        setShowProfile: setShowProfile,
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
}
