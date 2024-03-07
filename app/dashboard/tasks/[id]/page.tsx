import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const TaskDetailsPage = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound();

  return (
    <div className="space-y-3">
      <Heading>{task.title}</Heading>
      <Flex gap="2">
      <Text className=" text-sm font-semibold">Status: </Text>
        <TaskStatusBadge status={task.status} />
        <Text className=" text-sm font-semibold">CreatedAt: </Text>
        <Text className=" text-sm opacity-60"> {task.createdAt.toDateString()}</Text>
      </Flex>

      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetailsPage;
