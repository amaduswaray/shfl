"use client";
import { ReactNode, createContext } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

type AuthContextData = {
  placeholder: string;
  spotifyId?: string;
};

type AuthProviderProps = {
  children: ReactNode;
  session: Session | null;
};

export const AuthContext = createContext({} as AuthContextData);

// TODO: Add all other auth variables needed for the context
// useEffect for fetching data, as well as in game stats
// Spotify is most played songs
// In games stats are from the

// If session, register user
//    Register api checks if user exists, if not we create. if we do, we just return
export function AuthProvider({ children, session }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ placeholder: "hello" }}>
      <SessionProvider>{children}</SessionProvider>
    </AuthContext.Provider>
  );
}
