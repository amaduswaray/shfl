import { prisma } from "@/lib/prisma";
import { DefaultUser } from "next-auth";
import Error from "next/error";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: DefaultUser = await req.json();

  try {
    // Check if the user already exists by email
    const user = await prisma.user.findUnique({
      where: {
        email: body.email!,
      },
    });

    // If the user exists, return the existing user data
    if (user) {
      return NextResponse.json({
        message: "ok",
        status: 200,
        data: { register: false, user: user },
      });
    }

    // User does not exist, so create a new user
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
  } catch (error: any) {
    // Handle any Prisma client known errors
    if (error.code === "P2002") {
      // This catches unique constraint errors, e.g., if two requests try to create the same user simultaneously
      return NextResponse.json({
        message: "User with this email already exists",
        status: 409, // Conflict
      });
    }

    // Generic error handling
    return NextResponse.json({
      message: "An error occurred",
      status: 500, // Internal server error
    });
  }
}
