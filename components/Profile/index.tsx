"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { SpotifyContext } from "@/context/SpotifyContext";
import { Term } from "@/interfaces/spotify";
import Image from "next/image";
import Cross from "@icons/cross.svg";
import Dropdown from "@icons/dropdown.svg";
import Dropup from "@icons/dropup.svg";

interface Option {
  value: Term;
  label: string;
}

const options: Option[] = [
  { value: "short_term", label: "4 Weeks" },
  { value: "medium_term", label: "1 Year" },
  { value: "long_term", label: "10 Years" },
];

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option>(options[0]);
  const spotifyData = useContext(SpotifyContext);
  const profileData = useContext(AuthContext);

  const handleTerm = (option: Option) => {
    setSelected(option);
    spotifyData.setTerm(option.value);
    setOpen(false);
  };
  return (
    profileData.showProfile && (
      <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
        <div className="h-full w-full flex flex-col max-w-lg">
          <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 fixed nav px-10">
            <div className="spacer"></div>

            <a
              onClick={() => profileData.setShowProfile(false)}
              className="hover:bg-shfl-gray cursor-pointer p-1 rounded-md"
            >
              <Cross />
            </a>
          </div>
          <div className="w-full h-5/6 flex flex-col justify-center items-center gap-2 mt-16">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <Image
                src={spotifyData.image}
                height={130}
                width={130}
                alt="Profile-picture"
                className="rounded-full aspect-square object-cover"
              />
              <p className="text-shfl-white font-semibold text-lg">
                {profileData.name}
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-5 h-4/6 w-full p-10">
              <div className="w-1/2 h-full flex flex-col justify-start items-center gap-3">
                <h2 className="text-shfl-white font-medium text-md">
                  Top Songs
                </h2>
                <div className="bg-shfl-gray h-full w-full p-3 rounded-sm flex flex-col gap-3">
                  <div className="sticky border-shfl-white border-b-[0.5px] border-opacity-50">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="relative w-full cursor-pointer rounded-sm py-1.5 text-shfl-white font-medium text-left text-md hover:bg-shfl-bg"
                        aria-haspopup="listbox"
                        aria-expanded={open}
                        aria-labelledby="listbox-label"
                      >
                        <span className="flex items-center">
                          <span className=" block truncate">
                            {selected.label}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          {open ? <Dropup /> : <Dropdown />}
                        </span>
                      </button>

                      {open && (
                        <ul
                          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-shfl-bg py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          tabIndex={-1}
                          role="listbox"
                          aria-labelledby="listbox-label"
                        >
                          {options.map((option) => (
                            <li
                              key={option.value}
                              className={`relative cursor-pointer select-none py-2 pl-3 pr-9 text-shfl-white 
                ${selected.value === option.value ? "bg-shfl-red text-shfl-pink" : ""}
              `}
                              id={`listbox-option-${option.value}`}
                              role="option"
                              onClick={() => handleTerm(option)}
                            >
                              <div className="flex items-center">
                                <span
                                  className={`ml-3 block truncate ${selected.value === option.value ? "font-medium" : "font-normal"}`}
                                >
                                  {option.label}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll">
                    {spotifyData.topTracks.map((track, index) => (
                      <div className="w-full flex flex-row gap-3" key={index}>
                        <h2 className="text-shfl-pink font-medium text-md">
                          {index + 1}
                        </h2>
                        <div className="flex flex-col overflow-hidden">
                          <p className="text-shfl-white text-xs font-base truncate hover:text-clip">
                            {track.name}
                          </p>
                          <p className="text-shfl-pink text-xs font-extralight truncate hover:text-clip">
                            {track.artists[0].name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col justify-start items-center gap-10">
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
      </div>
    )
  );
};

export default Profile;
