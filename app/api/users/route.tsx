import { patchUserSchema } from "@/app/SchemaValidation";
import { authOptions } from "@/app/auth/options";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
}

//Update User information
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  /**
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json("Not Authenticated", { status: 401 });
   */

  const body = await request.json();
  const validation = patchUserSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

    const { country, title, timezone, about, displayName,  } = body;

    // const issue = await prisma.userProfile.findUnique({
    //   where: { id: parseInt(params.id) },
    // });
  
    // if (!issue) return NextResponse.json("Invalid Issue", { status: 404 });
  
    // if (assignedToUserId) {
    //   const user = await prisma.user.findUnique({
    //     where: { id: assignedToUserId },
    //   });
    //   if (!user) return NextResponse.json("Invalid User Id", { status: 404 });
    // }
  
    // const updatedIssue = await prisma.issue.update({
    //   where: { id: issue.id },
    //   data: {
    //     title,
    //     description,
    //     status,
    //     assignedToUserId,
    //   },
    // });
  
    return NextResponse.json("", { status: 200 });
}
