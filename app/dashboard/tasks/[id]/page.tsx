import Breadcrumbs from "@/app/components/Breadcrumbs";
import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import Title from "@/app/components/Title";
import prisma from "@/prisma/client";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import DeleteTaskButton from "./DeleteTaskButton";

interface Props {
  params: { id: string };
}

const TaskDetailsPage = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound();

  return (
    <div>
      <Box>
        <Breadcrumbs />
        <Title title={task.title} />
      </Box>

      <Flex gap="2" justify="between">
        <Flex className="flex-col lg:flex-row" gap="1">
          <Flex align={"center"} gap="1">
            <Text className="text-sm font-semibold">Status: </Text>
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
          className="py-1 px-3 bg-[#145959] rounded-custom text-white self-end"
        >
          <FiEdit />
          <Link href={`/dashboard/tasks/${task.id}/edit`}>Edit Task</Link>
        </Flex>
      </Flex>
      <Text className="text-sm font-semibold py-2">Description: </Text>
      <Box className="prose py-2">
        <ReactMarkdown>{task.description}</ReactMarkdown>
      </Box>
      <DeleteTaskButton taskId={task.id} />
    </div>
  );
};

export default TaskDetailsPage;
