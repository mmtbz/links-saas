import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createProfileSchema } from "../../SchemaValidation";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createProfileSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // todo add check to verify if the userId exist before creating a profile

  const newProfile = await prisma.userProfile.create({
    data: {
      userId: body.userId,
      professionalTitle: body.professionalTitle,
      about: body.about,
      displayName: body.displayName,
      country: body.country,
      timezone: body.timezone,
      city: body.city,
    },
  });

  return NextResponse.json(newProfile, { status: 201 });
}
