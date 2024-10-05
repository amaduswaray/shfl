"use client";
import { AuthContext } from "@/context/AuthContext";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginModal from "@/components/LoginModal";
import { useContext } from "react";
import Navbar from "@/components/Navbar";

// Change to use context, and not the session from next auth
export default function Home() {
  const { data: session } = useSession();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-6">
        <p className="text-shfl-white font-bold text-3xl mt-5 mb-2">SHFL</p>
        <span className="bold-txt">{session?.user?.name}</span>
      </div>

      <LoginModal show={isAuthenticated} />
    </div>
  );
}
