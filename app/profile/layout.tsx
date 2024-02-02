"use client";
import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text
          size="6"
          className="font-semibold bg-gradient-to-r from-teal-500 to-green-700 text-transparent bg-clip-text"
        >
          Profile & Resume
        </Text>
      </Box>
      <Grid
        columns={{ sm: "1", lg: "4" }}
        className="grid-cols-1 lg:grid-cols-4 py-4 px-3 lg:px-0"
        gap="4"
      >
        <Flex
          className="col-span-1 hidden lg:block font-semibold"
          direction="column"
        >
          <Link href="/profile">
            <Box className="text-[#145959] hover:bg-[#19948c30] p-2 rounded-[5px]">
              <Text>Profile</Text>
            </Box>
          </Link>
          <Link href="/profile/workHistory">
            <Box className="text-[#145959] hover:bg-[#19948c30] p-2 rounded-[5px]">
              <Text>Work History</Text>
            </Box>
          </Link>
          <Link href="/profile/educationHistory">
            <Box className="text-[#145959] hover:bg-[#19948c30] p-2 rounded-[5px]">
              <Text>Education History</Text>
            </Box>
          </Link>
          <Link href="/profile/templates">
            <Box className="text-[#145959] hover:bg-[#19948c30] p-2 rounded-[5px]">
              <Text>Resume Template</Text>
            </Box>
          </Link>

          <Flex
            align="center"
            gap="1"
            justify="center"
            className="text-[#145959] hover:cursor-pointer py-2 rounded-[5px] border-2 border-solid border-[#145959] my-4"
          >
            <FaRegEye />

            <Text>Preview</Text>
          </Flex>

          <Box className="mt-5 p-2 border-b border-solid border-[#E4E5E7]">
            <Text>Other</Text>
          </Box>
          <Box className=" bg-white ">
            <Link href="/dashboard">
              <Flex
                gap="2"
                align="center"
                justify="start"
                className="p-2 text-[#145959] hover:bg-[#19948c30] rounded-[5px]"
              >
                <MdDashboard />
                <Text>Dashboard</Text>
              </Flex>
            </Link>
            <Link href={"/profile/settings"}>
              <Flex
                gap="2"
                align="center"
                justify="start"
                className="p-2 text-[#145959] hover:bg-[#19948c30] rounded-[5px]"
              >
                <IoMdSettings />
                <Text>Settings</Text>
              </Flex>
            </Link>
            <Flex
              gap="2"
              align="center"
              justify="start"
              className="p-2 text-[#145959] hover:bg-[#19948c30] hover:cursor-pointer rounded-[5px]"
              onClick={() => console.log("sign out")}
            >
              <CiLogout />
              <Text>Sign Out</Text>
            </Flex>
          </Box>
        </Flex>
        <Box className="col-span-1 lg:col-span-3">
          <Grid
            columns={{ sm: "1", lg: "3" }}
            className="grid-cols-1 lg:grid-cols-3"
            gap="4"
          >
            {children}
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default layout;
