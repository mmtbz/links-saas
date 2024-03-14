import { Flex, Text } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <select
      id="status"
      className="border border-solid p-1 rounded-custom inline-flex outline-none"
      defaultValue={"OPEN"}
    >
      <option value="OPEN">Open</option>
      <option value="IN_PROGRESS">In Progress</option>
      <option value="CLOSED">Closed</option>
    </select>
  );
};

export default AssigneeSelect;
