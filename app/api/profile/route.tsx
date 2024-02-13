import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createProdileSchema = z.object({
  userId: z.string().min(1).max(255),
  professionalTitle: z.string().min(1).max(255),
  about: z.string().min(1).max(255),
  displayName: z.string().min(1).max(255),
  country: z.string().min(1).max(255),
  timezone: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createProdileSchema.safeParse(body);

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
