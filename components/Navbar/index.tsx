import { signOut } from "next-auth/react";
import Logout from "@icons/logout.svg";
import Avatar from "@icons/avatar.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 fixed nav px-5">
      <Logout onClick={() => signOut()} />
      <Avatar />
    </div>
  );
};

export default Navbar;
