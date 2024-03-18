"use client";
import { AlertDialog, Box, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import Title from "../components/Title";

const CreateProfileModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Content style={{ maxWidth: 840 }}>
        <AlertDialog.Title>
          <Title title="We need few information before you start." />
        </AlertDialog.Title>
        <AlertDialog.Description size="5" className=" space-y-3">
          <Text className="solid">How do you plan to use Worklane?</Text>
          <Flex className="gap-3">
            <Box className="p-2 border-2 border-solid hover:cursor-pointer rounded-custom border-green-500">
              <Text>Looking for a job</Text>
            </Box>
            <Box className="p-2 border-2 border-solid hover:cursor-pointer rounded-custom border-yellow-500">
              <Text>Hiring talents</Text>
            </Box>
          </Flex>
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <button
              className="bg-[#145959] px-6 py-2 rounded-[5px] text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Next
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default CreateProfileModal;
