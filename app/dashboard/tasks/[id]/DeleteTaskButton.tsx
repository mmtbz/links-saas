"use client";
import { AlertDialog, Box, Button, Flex, Text } from "@radix-ui/themes";
import { MdDelete } from "react-icons/md";

const DeleteTaskButton = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Box className="py-1 px-3 bg-red-700 rounded-custom text-white inline-flex items-center gap-1">
          <MdDelete />
          <Text>Delete Task</Text>
        </Box>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }} className="rounded-custom">
        <AlertDialog.Title>Delete Task</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete this task? This action can not be
          undone.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="between">
          <AlertDialog.Cancel>
            <button className="py-1 px-3 bg-gray-200 rounded-custom">
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <button className="py-1 px-3 bg-red-700 rounded-custom text-white">
              Delete
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteTaskButton;
