import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Logo from "@/public/logo-green.png";
import Image from "next/image";
import {
  MdDashboard,
  MdOutlineWork,
  MdPeopleAlt,
  MdQuiz,
} from "react-icons/md";

const NewDashBoardPage = () => {
  return (
    <Flex className="h-screen">
      <Flex className="w-1/5 border-r" direction="column">
        <Box className="border-b py-2 px-10">
          <Image src={Logo} alt="logo" height={30} />
        </Box>
        <Box className="px-4">
          <Flex
            align="center"
            gap="2"
            className="px-6 py-2 hover:bg-gray-100 hover:rounded-[5px]"
          >
            <MdDashboard />
            <Text>Dashboard</Text>
          </Flex>
          <Flex
            align="center"
            gap="2"
            className="px-6 py-2 hover:bg-gray-100 hover:rounded-[5px]"
          >
            <MdOutlineWork />
            <Text>Projects</Text>
          </Flex>
          <Flex
            align="center"
            gap="2"
            className="pl-12 py-2 hover:bg-gray-100 hover:rounded-[5px]"
          >
            <Box className="p-2 rounded-full bg-pink-500"></Box>
            <Text>Wakak Mobile</Text>
          </Flex>
          <Flex
            align="center"
            gap="2"
            className="px-6 py-2 hover:bg-gray-100 hover:rounded-[5px]"
          >
            <MdPeopleAlt />
            <Text>People</Text>
          </Flex>
          <Flex
            align="center"
            gap="2"
            className="px-6 py-2 hover:bg-gray-100 hover:rounded-[5px]"
          >
            <MdQuiz />
            <Text>Learn</Text>
          </Flex>
        </Box>
      </Flex>
      <Box className="flex-1 w-4/5 overflow-y-auto px-6"> right</Box>
    </Flex>
  );
};

export default NewDashBoardPage;
