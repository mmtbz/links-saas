"use client";
import Title from "@/app/components/Title";
import { Flex, Text, Box } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewTaskForm {
  title: string;
  description: string;
}

const CreateTaskPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<NewTaskForm>();
  return (
    <Box>
      <Title title="Create a new task" />
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(
          async (data) => {await axios.post("/api/task", data)
        router.push("/dashboard/tasks")}
        )}
      >
        <Flex direction="column" gap="2">
          <Text>Title</Text>
          <input
            className="border border-solid py-2 px-4 rounded-[10px]"
            placeholder="Title"
            {...register("title")}
          />
        </Flex>
        <Flex direction="column" gap="2">
          <Text>Desctiption</Text>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE {...field} placeholder="Description" />
            )}
          />
        </Flex>
        <Flex direction="column" gap="2" align="start">
          <button
            className="py-2 px-6 bg-[#19948c30] rounded-[5px]"
            type="submit"
          >
            Submit new Task
          </button>
        </Flex>
      </form>
    </Box>
  );
};

export default CreateTaskPage;
