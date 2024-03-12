"use client";
import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";

const UpdateRoleModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Content style={{ maxWidth: 1240 }}>
        <AlertDialog.Title>
          We need few information before you start.
        </AlertDialog.Title>
        <AlertDialog.Description size="5">
          <Text className="solid">How do you plan to use Worklane</Text> <br />
          <Text>Please choose a role: </Text>
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <button className="bg-[#145959] px-6 py-2 rounded-[5px] text-white" onClick={() => setIsOpen(!isOpen)}>
              Next
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default UpdateRoleModal;
