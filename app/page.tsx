"use client";
import { SpotifyUser } from "@/interfaces/user";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  // const user: SpotifyUser | null = session?.user;
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
          onClick={() => signIn()}
          className="shadow-primary w-56 h-16 rounded-xl bg-black border-0 text-white text-3xl active:scale-[0.99] m-6"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
