import { taskSchema } from "@/app/SchemaValidation";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = taskSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { assignedToUserId, title, description, status } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid User." }, { status: 400 });
  }

  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) return NextResponse.json("Invalid Task", { status: 404 });

  const updatedTask = await prisma.task.update({
    where: { id: task.id },
    data: {
      title,
      description,
      status,
      assignedToUserId,
    },
  });
  return NextResponse.json(updatedTask);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) return NextResponse.json("Invalid Task", { status: 404 });

  await prisma.task.delete({ where: { id: task.id } });

  return NextResponse.json({});
}
