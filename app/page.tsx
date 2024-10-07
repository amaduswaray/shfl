"use client";
import { AuthContext } from "@/context/AuthContext";
// import LoginModal from "@/components/LoginModal";
import { useContext } from "react";
import Logo from "@images/dashboard_logo.svg";
import Seperation from "@icons/seperation.svg";
import dynamic from "next/dynamic";
import Rules from "@/components/Rules";
const LoginModal = dynamic(() => import("@components/LoginModal"), {
  ssr: false,
});

// Change to use context, and not the session from next auth
export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="w-full">
      <div className="w-full p-4 flex flex-col justify-between items-center gap-20 max-h-svh">
        <Logo />
        <div className="w-full p-4 flex flex-col justify-between items-center">
          <div className="px-6 py-2 my-2 bg-shfl-red text-shfl-white text-lg font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
            {" "}
            Join Game
          </div>
          <div className="px-6 py-2 my-2 bg-shfl-gray text-shfl-white text-sm font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
            {" "}
            New Game
          </div>
        </div>
        <div className="w-full p-4 flex flex-row gap-5 justify-between items-center">
          <p className="my-2 text-shfl-white text-sm font-bold shadow-sm hover:text-shfl-red">
            How to play
          </p>
          <Seperation />
          <p className="my-2 text-shfl-white text-sm font-bold shadow-sm hover:text-shfl-red">
            Download
          </p>
        </div>
      </div>

      <LoginModal show={!isAuthenticated} />
    </div>
  );
}
