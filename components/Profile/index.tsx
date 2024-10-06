"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { SpotifyContext } from "@/context/SpotifyContext";
import Image from "next/image";

const Profile = () => {
  const spotifyData = useContext(SpotifyContext);
  const profileData = useContext(AuthContext);

  const handleTerm = () => {
    spotifyData.setTerm("long_term");
  };
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 fixed nav px-5">
        <div></div>
        <p>x</p>
      </div>
      <div className="w-full h-5/6 flex flex-col justify-center items-center gap-2 mt-20">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Image
            src={spotifyData.image}
            height={130}
            width={130}
            alt="Profile picture"
            className="rounded-full aspect-square object-cover"
          />
          <p className="text-shfl-white font-semibold text-lg">
            {profileData.name}
          </p>
        </div>
        <div className="stats container flex flex-row justify-between items-center gap-5">
          <div className="top songs"></div>
          <div className="game stats flex flex-col justify-start gap-5 items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
