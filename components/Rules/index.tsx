"use client";

import { useRouter } from "next/navigation";
import Cross from "@icons/cross.svg";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const Rules = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
      <div className="p-8 w-full max-w-lg h-full bg-inherit">
        <div className="flex flex-row justify-between items-center px-10 top-0 sticky">
          <div className="w-5"></div>
          <h3 className="text-3xl font-bold text-shfl-red">SHFL.</h3>
          <a onClick={() => console.log("hello")}>
            <Cross />
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center p-5 h-5/6 overflow-y-scroll mt-5">
          <p className="text-shfl-white font-semibold text-lg">
            Welcome to <span className="text-shfl-red">SHFL</span>, the ultimate
            music-themed party game that combines music, guessing, and loads of
            fun! With your Spotify account at the ready, gather your friends,
            grab your drinks, and let's get the party started!
          </p>

          <h1 className="text-center font-bold text-shfl-red text-3xl my-5">
            How to play
          </h1>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 1: Set the stage
            </h2>
            <p className="text-shfl-white font-semibold text-lg">
              The host selects the rules for the game:
            </p>
            <ul className="list-disc ml-6">
              <li className="text-shfl-white font-semibold text-lg">
                Decide whether the playlist will consist of each player's top
                songs from the last four weeks, the last year, or all-time.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                Determine how many songs each player will contribute to the
                playlist.
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 2: Rally the troops
            </h2>
            <ul className="list-disc ml-6">
              <li className="text-shfl-white font-semibold text-lg">
                The host shares a unique game code with all the players.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                Players use the code to join the game and connect their Spotify
                accounts.
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 3: Crank up the Volume
            </h2>
            <p className="text-shfl-white font-semibold text-lg">
              Now, it's time to let the music take center stage. Hit that play
              button, and the <span className="text-shfl-red">SHFL</span>{" "}
              playlist bursts into action. Feel the rhythm, nod your head, and
              let the songs weave their magic. Get ready to showcase your
              musical prowess!
            </p>
          </div>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 4: Unleash Your Inner Detective
            </h2>
            <p className="text-shfl-white font-semibold text-lg">
              The guessing fun begins! Your screen reveals the names of all the
              players (excluding yourself). Put on your detective hat and take
              an educated guess.
            </p>
          </div>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 5: Unveil the Melodic Revelations
            </h2>
            <ul className="list-disc ml-6">
              <li className="text-shfl-white font-semibold text-lg">
                Vote for the person who had the song, even while the song is
                still playing.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                Guess correctly to assign three sips to other players.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                The person who had the song drinks as a penalty.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                If no one guesses correctly, the song owner serves five sips.
              </li>
              <li className="text-shfl-white font-semibold text-lg">
                If everyone guesses correctly, the song owner chugs their drink.
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col my-5">
            <h2 className="text-shfl-pink text-xl font-bold my-2">
              Step 6: Keep the Party Rolling
            </h2>
            <p className="text-shfl-white font-semibold text-lg">
              Keep voting, sipping, and guessing with each new song. Let the
              music and fun continue!
            </p>
          </div>

          <p className="text-shfl-white font-extrabold text-lg mt-5">
            Remember to drink responsibly, enjoy the beats, and make
            unforgettable memories. SHFL is the game that brings friends
            together, music to life, and non-stop entertainment to any party.
            Get ready to dance, guess, and sip in style!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
