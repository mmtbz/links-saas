import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: { skills: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return NextResponse.json(user.skills);
  } catch (error) {
    console.error("Error finding user skills:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
