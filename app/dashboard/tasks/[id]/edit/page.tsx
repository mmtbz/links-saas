import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import TaskForm from "../../_components/TaskForm";
import Breadcrumbs from "@/app/components/Breadcrumbs";

interface Props {
  params: { id: string };
}

const EditTaskPage = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!task) notFound();

  return (
    <>
      <Breadcrumbs />
      <TaskForm task={task} title={`Edit Task ${task.id}`} />
    </>
  );
};

export default EditTaskPage;
