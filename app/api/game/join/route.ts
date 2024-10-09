import { NextApiRequest } from "next";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  return Response.json({ sucess: true });
}
