import { GameSettings } from "@/interfaces/game";
import { prisma } from "@/lib/prisma";

const GenerateCode = () => {
  const elements = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const code = Array.from({ length: 6 }, () =>
    elements.charAt(Math.floor(Math.random() * elements.length)),
  ).join("");
  return code;
};
export async function POST(req: Request) {
  const body: GameSettings = await req.json();
  const code = GenerateCode();
  const settings: GameSettings = { ...body, sessionId: code };
  const newGame = await prisma.game.create({
    data: {
      sessionId: settings.sessionId,
      title: settings.title,
      status: "LOBBY",
      songCount: settings.songCount,
      songPeriod: settings.songPeriod,
    },
  });
  console.log(settings);
  return Response.json({ sucess: true });
}
