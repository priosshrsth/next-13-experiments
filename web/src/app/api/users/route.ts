import prismaClient from "prisma/client";
import { NextResponse } from "next/server";

export async function GET(_request: Request, res: NextResponse) {
  const users = await prismaClient.user.findMany({
    take: 5,
  });

  return NextResponse.json({ data: users });
}
