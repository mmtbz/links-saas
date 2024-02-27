import Title from "@/app/components/Title";
import { Flex, TextArea, Text } from "@radix-ui/themes";
import React from "react";

const CreateTaskPage = () => {
  return (
    <Flex direction="column" gap="4" >
      <Title title="Create a new task" />
      <Flex direction="column" gap="2">
        <Text>Title</Text>
        <input
          className="border border-solid py-2 px-4 rounded-[10px]"
          placeholder="Title"
        />
      </Flex>
      <Flex direction="column" gap="2">
        <Text>Desctiption</Text>
        <textarea
          className="border border-solid py-2 px-4 rounded-[10px]"
          placeholder="description"
        />
      </Flex>
      <Flex direction="column" gap="2" align="start">
        <button className="py-2 px-6 bg-[#19948c30] rounded-[5px]">
          Submit new Task
        </button>
      </Flex>
    </Flex>
  );
};

export default CreateTaskPage;
