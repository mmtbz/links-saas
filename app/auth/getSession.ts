import { getServerSession } from "next-auth";
import { authOptions } from "./options";
import { NextResponse } from "next/server";

export const getServerSessions = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
