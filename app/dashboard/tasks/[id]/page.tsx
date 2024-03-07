import Breadcrumbs from "@/app/components/Breadcrumbs";
import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      <Breadcrumbs />
      <Heading>{task.title}</Heading>
      <Flex gap="2">
        <Text className=" text-sm font-semibold">Status: </Text>
        <TaskStatusBadge status={task.status} />
        <Text className=" text-sm font-semibold">CreatedAt: </Text>
        <Text className=" text-sm opacity-60">
          {task.createdAt.toDateString()}
        </Text>
      </Flex>

      <Card className="prose">
        <ReactMarkdown>{task.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default TaskDetailsPage;
