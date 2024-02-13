import { patchUserSchema } from "@/app/SchemaValidation";
import { authOptions } from "@/app/auth/options";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const users = await prisma.userProfile.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(users);
}

//Update User information
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const body = await request.json();
  const validation = patchUserSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { country, title, timezone, about, displayName } = body;

  return NextResponse.json("", { status: 200 });
}
