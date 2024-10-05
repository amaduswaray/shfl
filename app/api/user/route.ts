import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const user = await prisma.user.findMany();
  return Response.json(user);
}
