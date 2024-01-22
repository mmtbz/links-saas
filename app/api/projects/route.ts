import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

/***
 * Return all projects
 * todo: should check the request for the current user
 */
export async function GET(request: NextRequest) {
  const projects = await prisma.project.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
}
