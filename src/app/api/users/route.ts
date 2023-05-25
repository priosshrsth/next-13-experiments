import prismaClient from "prisma/client";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const users = await prismaClient.user.findMany({
    take: 20,
  });

  return NextResponse.json({ data: users });
}
