import { patchUserSchema } from "@/app/SchemaValidation";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.userProfile.findUnique({
    where: { userId: params.id },
  });

  if (!user) return NextResponse.json("No Profile found", { status: 404 });

  return NextResponse.json(user);
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
