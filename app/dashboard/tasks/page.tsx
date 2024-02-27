"use client";

import Title from "@/app/components/Title";
import { Box } from "@radix-ui/themes";
import Link from "next/link";

const TasksPage = () => {
  return (
    <Box>
      <Title title="Your Tasks" />
      <Link href="/dashboard/tasks/new" className="p-2 bg-[#19948c30] rounded-[5px]">Create new Task</Link>
      all tasks
    </Box>
  );
};

export default TasksPage;
