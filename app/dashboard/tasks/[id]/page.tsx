import Breadcrumbs from "@/app/components/Breadcrumbs";
import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text, Box } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiEdit } from "react-icons/fi";
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
      <Flex gap="2" justify="between">
        <Flex className="space-x-3">
          <Flex align={"center"} gap="1">
            <Text className=" text-sm font-semibold">Status: </Text>
            <TaskStatusBadge status={task.status} />
          </Flex>
          <Flex align={"center"} gap="1">
            <Text className=" text-sm font-semibold">CreatedAt: </Text>
            <Text className=" text-sm opacity-60">
              {task.createdAt.toDateString()}
            </Text>
          </Flex>
        </Flex>

        <Flex
          align="center"
          gap="2"
          className="py-1 px-3 bg-[#145959] rounded-[5px] text-white"
        >
          <FiEdit />
          <Link href={`/dashboard/tasks/${task.id}/edit`}>Edit Task</Link>
        </Flex>
      </Flex>

      <Card className="prose">
        <ReactMarkdown>{task.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default TaskDetailsPage;
