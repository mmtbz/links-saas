import Title from "@/app/components/Title";
import { Box, Table, Text } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import { ArrowUpIcon } from "lucide-react";
import TaskStatusBadge from "@/app/components/TaskStatusBadge";

const TasksPage = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <Box className="space-y-4">
      <Title title="Your Tasks" />
      <Box>
        <Link
          href="/dashboard/tasks/new"
          className="p-2 bg-[#19948c30] rounded-[5px]"
        >
          Create new Task
        </Link>
      </Box>

      <Table.Root className="border rounded-[5px]">
        <Table.Header className="bg-gray-200">
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task) => (
            <Table.Row key={task.id}>
              <Table.Cell>
                {task.title}
                <div className="block md:hidden">
                  <TaskStatusBadge status={task.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <TaskStatusBadge status={task.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {task.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export const revalidate = 0;

export default TasksPage;
