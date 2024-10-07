"use client";

import { signOut } from "next-auth/react";
import Logout from "@icons/logout.svg";
import Avatar from "@icons/avatar.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    pathname === "/" && (
      <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 nav px-6">
        <Logout onClick={() => signOut()} />
        <Avatar />
      </div>
    )
  );
};

export default Navbar;
