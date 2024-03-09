"use client";
import ButtonSpinner from "@/app/components/ButtonSpinner";
import { AlertDialog, Box, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const DeleteTaskButton = ({ taskId }: { taskId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const deleteTask = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/task/" + taskId);
      router.push("/dashboard/tasks");
      router.refresh();
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <button
            className="py-1 px-3 bg-red-700 rounded-custom text-white inline-flex items-center gap-1
             disabled:bg-gray-500"
            disabled={isDeleting}
          >
            {!isDeleting && <MdDelete />}
            {isDeleting && <ButtonSpinner />}
            <Text>Delete Task</Text>
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content
          style={{ maxWidth: 450 }}
          className="rounded-custom"
        >
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
              <Box className="py-1 px-3 bg-red-700 rounded-custom text-white inline-flex items-center gap-1">
                <MdDelete />
                <button onClick={deleteTask}>Delete Task</button>
              </Box>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This task could not be deleted. Try again later.
          </AlertDialog.Description>
          <button
            className="py-1 px-3 bg-gray-200 rounded-custom mt-2"
            onClick={() => setError(false)}
          >
            Ok
          </button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteTaskButton;
