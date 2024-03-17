import { userSchema } from "@/app/SchemaValidation";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: params.id } });

  if (!user) return NextResponse.json("user not founc", { status: 404 });

  await prisma.user.update({
    where: { id: user.id },
    data: { role: body.role, userProfileId: body.userProfileId },
  });

  return NextResponse.json("User data updated", { status: 200 });
}
