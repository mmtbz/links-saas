import React from "react";
import Title from "@/app/components/Title";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { GoPlus } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

const OldTasksPage = () => {
  return (
    <Box>
      <Title title="Your Tasks" />
      <Flex align="center" justify="between" className="mb-1">
        <Text className="font-semibold text-lg">Board</Text>
        <select className="text-sm py-1 px-2 outline-none border border-solid rounded-[5px]">
          <option>This week</option>
          <option>This month</option>
        </select>
      </Flex>
      <Flex gap="2" className="flex-col lg:flex-row">
        <Box className="flex-1 p-2 bg-[#EEF2F5] rounded-[10px]">
          <Flex justify="between" align="center">
            <Text className="text-sm">To do</Text>
            <Flex gap="2">
              <GoPlus />
              <IoIosMore />
            </Flex>
          </Flex>
          <Flex
            className="bg-white rounded-[10px] p-2 my-2"
            direction="column"
            gap="2"
          >
            <Flex justify="between" align="center">
              <Flex align="center" gap="2">
                <Box className="bg-red-500 h-2 w-2 rounded-full"></Box>
                <Text className="text-xs uppercase">Mobile Dev</Text>
              </Flex>
              <IoIosMore />
            </Flex>
            <Text className="font-semibold block">Figma Design - V1</Text>
            <Text className="text-sm leading-[1rem]">
              Create a design system for a hero section in 2 different variants.
              Create a simple presentation with these components.
            </Text>
            <Box>
              <Avatar fallback="DM" size="2" radius="full" color="green" />
            </Box>
          </Flex>
        </Box>
        <Box className="flex-1 p-2 bg-[#EEF2F5] rounded-[10px]">
          <Flex justify="between" align="center">
            <Text className="text-sm">In Progress</Text>
            <Flex gap="2">
              <GoPlus />
              <IoIosMore />
            </Flex>
          </Flex>
          <Flex
            className="bg-white rounded-[10px] p-2 my-2"
            direction="column"
            gap="2"
          >
            <Flex justify="between" align="center">
              <Flex align="center" gap="2">
                <Box className="bg-green-500 h-2 w-2 rounded-full"></Box>
                <Text className="text-xs uppercase">Mobile Dev</Text>
              </Flex>
              <IoIosMore />
            </Flex>
            <Text className="font-semibold block">Figma Design - V1</Text>
            <Text className="text-sm leading-[1rem]">
              Create a design system for a hero section in 2 different variants.
              Create a simple presentation with these components.
            </Text>
            <Box>
              <Avatar fallback="DM" size="2" radius="full" color="blue" />
            </Box>
          </Flex>
          <Flex
            className="bg-white rounded-[10px] p-2 my-2"
            direction="column"
            gap="2"
          >
            <Flex justify="between" align="center">
              <Flex align="center" gap="2">
                <Box className="bg-green-500 h-2 w-2 rounded-full"></Box>
                <Text className="text-xs uppercase">Mobile Dev</Text>
              </Flex>
              <IoIosMore />
            </Flex>
            <Text className="font-semibold block">Figma Design - V1</Text>
            <Text className="text-sm leading-[1rem]">
              Create a design system for a hero section in 2 different variants.
              Create a simple presentation with these components.
            </Text>
            <Box>
              <Avatar fallback="DM" size="2" radius="full" color="blue" />
            </Box>
          </Flex>
        </Box>
        <Box className="flex-1 p-2 bg-[#EEF2F5] rounded-[10px]">
          <Flex justify="between" align="center">
            <Text className="text-sm">Done</Text>
            <Flex gap="2">
              <GoPlus />
              <IoIosMore />
            </Flex>
          </Flex>
          <Flex
            className="bg-white rounded-[10px] p-2 my-2"
            direction="column"
            gap="2"
          >
            <Flex justify="between" align="center">
              <Flex align="center" gap="2">
                <Box className="bg-yellow-500 h-2 w-2 rounded-full"></Box>
                <Text className="text-xs uppercase">Backend | Sporty APP</Text>
              </Flex>
              <IoIosMore />
            </Flex>
            <Text className="font-semibold block">Database design - MySQL</Text>
            <Text className="text-sm leading-[1rem]">
              Create a design system for a hero section in 2 different variants.
              Create a simple presentation with these components.
            </Text>
            <Box>
              <Avatar fallback="DM" size="2" radius="full" color="red" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default OldTasksPage;
