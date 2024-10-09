import { GameSettings } from "@/interfaces/game";

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
  console.log(settings);
  return Response.json({ sucess: true });
}
