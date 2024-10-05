import { prisma } from "@/lib/prisma";
import { DefaultUser } from "next-auth";

export async function GET(req: Request) {
  console.log("This is the auth endpoint");
  return Response.json({ sucess: true });
}

export async function POST(req: Request) {
  const body: DefaultUser = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      name: body.name,
      email: body.email!,
    },
  });

  // User does not exist
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        name: body.name!,
        email: body.email!,
      },
    });
  }

  console.log(user);

  return Response.json({ mesage: "ok", status: 200 });
}
