export async function POST(req: Request) {
  console.log("This is the auth endpoint");
  return Response.json({ sucess: true });
}
