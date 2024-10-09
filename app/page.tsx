"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import Logo from "@images/dashboard_logo.svg";
import Seperation from "@icons/seperation.svg";
import dynamic from "next/dynamic";
const LoginModal = dynamic(() => import("@components/LoginModal"), {
  ssr: false,
});
const Download = dynamic(() => import("@components/Download"), {
  ssr: false,
});

const Rules = dynamic(() => import("@components/Rules"), {
  ssr: false,
});

const Profile = dynamic(() => import("@components/Profile"), {
  ssr: false,
});

const HostGame = dynamic(() => import("@components/HostGame"), {
  ssr: false,
});

const JoinGame = dynamic(() => import("@components/JoinGame"), {
  ssr: false,
});

export default function Home() {
  const [showRules, setShowRules] = useState<boolean>(false);
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [showHost, setShowHost] = useState<boolean>(false);
  const [showJoin, setShowJoin] = useState<boolean>(false);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="w-full">
      <div className="w-full p-4 flex flex-col justify-between items-center gap-20 max-h-svh">
        <Logo />
        <div className="w-full p-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setShowJoin(true)}
            className="px-6 py-2 my-2 bg-shfl-red text-shfl-white text-lg font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {" "}
            Join Game
          </div>
          <div
            onClick={() => setShowHost(true)}
            className="px-6 py-2 my-2 bg-shfl-gray text-shfl-white text-sm font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {" "}
            New Game
          </div>
        </div>
        <div className="w-full p-4 flex flex-row gap-5 justify-between items-center">
          <a
            onClick={() => setShowRules(!showRules)}
            className="my-2 text-shfl-white text-sm font-bold shadow-sm hover:text-shfl-red cursor-pointer"
          >
            How to play
          </a>
          <Seperation />
          <a
            onClick={() => setShowDownload(!showDownload)}
            className="my-2 text-shfl-white text-sm font-bold shadow-sm hover:text-shfl-red cursor-pointer"
          >
            Download
          </a>
        </div>
      </div>
      <Rules show={showRules} setShow={setShowRules} />
      <Download show={showDownload} setShow={setShowDownload} />
      <HostGame show={showHost} setShow={setShowHost} />
      <JoinGame show={showJoin} setShow={setShowJoin} />
      <Profile />

      <LoginModal show={!isAuthenticated} />
    </div>
  );
}
