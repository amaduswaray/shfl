"use client";

import { signOut } from "next-auth/react";
import Logout from "@icons/logout.svg";
import Avatar from "@icons/avatar.svg";
import { AuthContext } from "@/context/AuthContext";
import { SpotifyContext } from "@/context/SpotifyContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const spotifyData = useContext(SpotifyContext);
  const profileData = useContext(AuthContext);
  //TODO: Add on click for image

  return (
    pathname === "/" && (
      <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 nav px-6">
        <Logout onClick={() => signOut()} />
        {profileData.isAuthenticated ? (
          <Image
            src={spotifyData.image}
            height={60}
            width={60}
            alt="Profile-picture"
            className="rounded-full aspect-square object-cover border-shfl-red border-[2px]"
          />
        ) : (
          <Avatar />
        )}
      </div>
    )
  );
};

export default Navbar;
