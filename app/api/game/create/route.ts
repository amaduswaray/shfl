import { GameSettings } from "@/interfaces/game";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const GenerateCode = () => {
  const elements = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const code = Array.from({ length: 6 }, () =>
    elements.charAt(Math.floor(Math.random() * elements.length)),
  ).join("");
  return code;
};

// Another method, fetch all game sessionIds create Ids until there is new one. Then create the game
export async function POST(req: Request) {
  const MAX_RETRIES = 5;
  let retries = 0;
  const headerList = headers();
  const email = headerList.get("Authorization");

  if (!email) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const hostUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!hostUser) {
    return NextResponse.json({
      status: 404,
      message: "User not found in our database",
    });
  }

  if (!hostUser.playlistId) {
    console.log("No playlist");
    // Create a playlist for the user
    // Add spotify access token to the headers
  }

  try {
    const body: GameSettings = await req.json();

    while (retries < MAX_RETRIES) {
      try {
        const code = GenerateCode();
        const settings: GameSettings = { ...body, sessionId: code };
        const songIndexes = settings.songIndexes.join(";");

        const newGame = await prisma.game.create({
          data: {
            sessionId: settings.sessionId,
            title: settings.title,
            status: "LOBBY",
            songCount: settings.songCount,
            songPeriod: settings.songPeriod,
            hostId: hostUser.id,
            songIndexes: songIndexes,
          },
        });

        console.log(newGame);
        return NextResponse.json({ success: true, status: 200, game: newGame });
      } catch (error: any) {
        if (error.code === "P2002") {
          // Unique constraint error, retry with a new code
          retries++;
          console.log(`Session ID already exists. Retrying... (${retries})`);
        } else {
          // Handle other errors
          return NextResponse.json({
            message: "An error occurred",
            status: 500, // Internal server error
          });
        }
      }
    }

    return NextResponse.json({
      message: "Failed to create a unique session ID after multiple attempts",
      status: 409,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "An error occurred while processing the request",
      status: 500,
    });
  }
}
