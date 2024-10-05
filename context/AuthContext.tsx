"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

// TODO: Add all other auth variables needed for the context
// useEffect for fetching data, as well as in game stats
// Spotify is most played songs
// In games stats are from the
function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
