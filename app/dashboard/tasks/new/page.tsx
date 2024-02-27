"use client";
import Title from "@/app/components/Title";
import { Flex, Text, Box, Callout } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "@/app/SchemaValidation";
import { z } from "zod";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

type NewTaskForm = z.infer<typeof createTaskSchema>;

const CreateTaskPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTaskForm>({
    resolver: zodResolver(createTaskSchema),
  });

  const [error, setError] = useState("");
  return (
    <Box>
      <Title title="Create a new task" />
      {error && (
        <Callout.Root color="red" className="mb-3">
          <Callout.Icon>
            <IoMdInformationCircleOutline />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/task", data);
            router.push("/dashboard/tasks");
          } catch (error) {
            setError("Something happened, please try again later");
          }
        })}
      >
        <Flex direction="column" gap="2">
          <Text>Title</Text>
          <input
            className="border border-solid py-2 px-4 rounded-[10px]"
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && <Text color="red"> {errors.title.message}</Text>}
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
          {errors.description && (
            <Text color="red"> {errors.description.message}</Text>
          )}
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
