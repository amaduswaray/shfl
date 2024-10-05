export async function GET(req: Request) {
  console.log("This is the auth endpoint");
  return Response.json({ sucess: true });
}
