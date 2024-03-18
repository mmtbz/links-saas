import { profileSchema } from "@/app/SchemaValidation";
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
  const validation = profileSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: params.id } });

  if (!user) return NextResponse.json("User not found", { status: 404 });

  const { country, professionalTitle, timezone, about, displayName, city } =
    body;

  const updatedProfile = await prisma.userProfile.update({
    where: { userId: user.id },
    data: {
      displayName,
      professionalTitle,
      about,
      country,
      timezone,
      city,
    },
  });

  return NextResponse.json(updatedProfile, { status: 200 });
}
