import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full max-w-lg h-20 top-0 fixed nav px-4">
      <p className="cursor-pointer text-shfl-pink" onClick={() => signOut()}>
        Sign Out
      </p>
      <p className="cursor-pointer text-shfl-pink" onClick={() => signOut()}>
        profile
      </p>
    </div>
  );
};

export default Navbar;
