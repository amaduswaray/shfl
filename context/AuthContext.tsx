"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

// TODO: Add all other auth variables needed for the context
function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
