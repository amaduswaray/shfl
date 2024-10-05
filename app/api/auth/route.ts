import { prisma } from "@/lib/prisma";
import { DefaultUser } from "next-auth";
import { NextResponse } from "next/server";

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

    return NextResponse.json({
      status: 200,
      message: "ok",
      data: { register: true, user: newUser },
    });
  }

  return NextResponse.json({
    mesage: "ok",
    status: 200,
    data: { register: false, user: user },
  });
}
