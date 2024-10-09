import { NextApiRequest } from "next";

// Only accessabe to host
export async function GET(req: NextApiRequest) {
  const id = req.query;
  console.log("This is the id: ", id);
  return Response.json({ sucess: true, sessionId: id });
}
