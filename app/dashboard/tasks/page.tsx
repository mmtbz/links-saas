import Breadcrumbs from "@/app/components/Breadcrumbs";
import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import Title from "@/app/components/Title";
import prisma from "@/prisma/client";
import { Box, Table } from "@radix-ui/themes";
import Link from "next/link";
import { MdAdd } from "react-icons/md";

const TasksPage = async () => {
  const tasks = await prisma.task.findMany();

  return (
    <Box className="space-y-3">
      <Box>
        <Breadcrumbs />
        <Title title="Your Tasks" />
      </Box>

      <Box className="p-2 bg-[#145959] rounded-custom text-white inline-flex items-center gap-1">
      <MdAdd />


        <Link href="/dashboard/tasks/new">Create a Task</Link>
      </Box>

      <Table.Root className="border rounded-[5px]">
        <Table.Header className="bg-[#19948c30] ">
          <Table.Row>
            <Table.ColumnHeaderCell>Tasks</Table.ColumnHeaderCell>
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
            <Table.Row
              key={task.id}
              className="even:bg-gray-100 bg-opacity-50"
            >
              <Table.Cell>
                <Link href={`/dashboard/tasks/${task.id}`}>{task.title}</Link>
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
