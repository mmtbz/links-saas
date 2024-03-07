import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" | "gray" | "blue" }
> = {
  OPEN: { label: "open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const TaskStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color} className="p-1 capitalize">{statusMap[status].label}</Badge>
  );
};

export default TaskStatusBadge;
