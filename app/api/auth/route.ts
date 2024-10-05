export async function GET(req: Request) {
  console.log("This is the auth endpoint");
  return Response.json({ sucess: true });
}

export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({ mesage: "ok", status: 200 });
}
