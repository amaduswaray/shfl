"use client";
import { AuthContext } from "@/context/AuthContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext } from "react";

// Change to use context, and not the session from next auth
export default function Home() {
  const { data: session } = useSession();
  const { placeholder } = useContext(AuthContext);
  console.log(placeholder);
  return (
    <div>
      {session ? (
        <div className="p-6">
          <p className="text-black font-normal text-xl mt-5 mb-2">
            Signed In as
          </p>
          <span className="bold-txt">{session?.user?.name}</span>
          <p
            className="opacity-70 mt-8 mb-5 underline cursor-pointer"
            onClick={() => signOut()}
          >
            Sign Out
          </p>
        </div>
      ) : (
        <button
          onClick={() => signIn("spotify")}
          className="shadow-primary w-56 h-16 rounded-xl bg-black border-0 text-white text-3xl active:scale-[0.99] m-6"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
