"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { SpotifyContext } from "@/context/SpotifyContext";
import Image from "next/image";
import Cross from "@icons/cross.svg";

const Profile = () => {
  const spotifyData = useContext(SpotifyContext);
  const profileData = useContext(AuthContext);

  const handleTerm = () => {
    spotifyData.setTerm("long_term");
  };
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 fixed nav px-10">
        <div className="spacer"></div>
        <Cross />
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

        <div className="flex flex-row justify-center items-center gap-5 h-4/6 w-full p-10">
          <div className="w-1/2 h-full flex flex-col justify-start items-center gap-3">
            <h2 className="text-shfl-white font-medium text-md">Top Songs</h2>
            <div className="bg-shfl-gray h-5/6 w-full p-3 rounded-sm flex flex-col gap-3">
              <div className="w-full flex flex-row gap-3 justify-between">
                <h2 className="text-shfl-pink font-medium text-md">1</h2>
                <div className="flex flex-col overflow-hidden">
                  <p className="text-shfl-white text-xs font-base truncate hover:text-clip">
                    Title That is very long
                  </p>
                  <p className="text-shfl-pink text-xs font-extralight">
                    Artist
                  </p>
                </div>
              </div>
              {/*<div className="w-full flex flex-row gap-3 justify-between">
                <h2 className="text-shfl-white font-medium text-md">1</h2>
                <div className="flex flex-col overflow-hidden">
                  <p className="text-shfl-white text-xs font-base truncate hover:text-clip">
                    Title That is very long
                  </p>
                  <p className="text-shfl-pink text-xs font-extralight">
                    Artist
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-10 items-center w-1/2 h-full">
            <div className="flex flex-col justify-start items-center gap-3 w-full px-2">
              <h2 className="text-shfl-white font-medium text-md">
                Times Played
              </h2>
              <div className="bg-shfl-gray w-full p-3 rounded-sm flex justify-center items-center">
                <p className="text-shfl-pink font-medium text-lg">
                  {profileData.gamesPlayed}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-3 w-full px-2">
              <h2 className="text-shfl-white font-medium text-md">
                Shots Given
              </h2>
              <div className="bg-shfl-gray w-full p-3 rounded-sm flex justify-center items-center">
                <p className="text-shfl-pink font-medium text-lg">
                  {profileData.shotsGiven}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-3 w-full px-2">
              <h2 className="text-shfl-white font-medium text-md">
                Shots Taken
              </h2>
              <div className="bg-shfl-gray w-full p-3 rounded-sm flex justify-center items-center">
                <p className="text-shfl-pink font-medium text-lg">
                  {profileData.shotsTaken}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
