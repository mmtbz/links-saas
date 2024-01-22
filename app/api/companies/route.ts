import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


/**
 * Return all companies
 */
export async function GET(request: NextRequest) {
  const companies = await prisma.company.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(companies);
}


export async function POST(request: NextRequest) {
    const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json(users);
  }