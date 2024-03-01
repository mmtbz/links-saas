import {
  Flex,
  Avatar,
  Separator,
  Button,
  Container,
  Box,
  Text,
  Grid,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaBook, FaTasks, FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardLoading = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Container>
        <Box className="px-3 lg:px-0">
          <Grid
            columns={{ sm: "1", lg: "4" }}
            className=" grid-cols-1 lg:grid-cols-4 py-4"
            gap="4"
          >
            <Box className=" col-span-1 shadow-lg border border-solid border-[#E4E5E7] rounded-[5px] hidden lg:block">
              <Box className=" bg-white">
                <text className="opacity-0">a</text>
              </Box>
              <Box className="rounded-t-[5px] p-3 mx-1 bg-gray-100">
                <Flex justify="between" align="center">
                  <Flex align="center" gap="3">
                    <Skeleton className="rounded-full bg-gray-500" />
                    <Box>
                      <Skeleton />
                      <Skeleton />
                    </Box>
                  </Flex>
                  <Flex
                    gap="1"
                    align="center"
                    justify="center"
                    className="bg-[#2E90EB] px-[0.4rem] py-[0.2rem] rounded-[5px]"
                  >
                    <Skeleton />
                    <IoStar color="white" size="14" />
                  </Flex>
                </Flex>
                <Box className="my-4 mx-3">
                  <Separator size="4" />
                </Box>
                <Flex gap="3" direction="column">
                  <Flex align="center" gap="2" justify="between">
                    <Skeleton />
                    <Skeleton />
                  </Flex>
                  <Flex align="center" gap="2" justify="between">
                    <Skeleton />
                    <Skeleton />
                  </Flex>
                  <Flex align="center" gap="2" justify="between">
                    <Skeleton />
                    <Skeleton />
                  </Flex>
                  <Flex align="center" gap="2" justify="between">
                    <Skeleton />
                    <Skeleton />
                  </Flex>
                  <Flex align="center" gap="2" justify="between">
                    <Skeleton />
                    <Skeleton />
                  </Flex>
                </Flex>
                <Box className="my-4 mx-3">
                  <Separator size="4" />
                </Box>
                <Box className="bg-[#19948c30] px-3 py-2 rounded-[5px] text-center">
                  <Skeleton />
                </Box>
              </Box>
              <Box className="bg-gray-100">
                <Flex
                  className=" bg-white p-4 border-y border-solid border-[#E4E5E7]"
                  align="center"
                  justify="between"
                >
                  <Text>Inbox</Text>
                  <Button variant="ghost" className=" hover:bg-inherit">
                    View All
                  </Button>
                </Flex>

                <Box className="mt-4 bg-white p-4 border-y border-solid border-[#E4E5E7]">
                  <Text>Menu</Text>
                </Box>
                <Box className=" bg-white">
                  <Link href="/dashboard">
                    <Flex
                      gap="2"
                      align="center"
                      justify="start"
                      className="py-2 px-4 text-[#145959] hover:bg-[#19948c30]"
                    >
                      <MdDashboard />
                      <Text>Dashboard</Text>
                    </Flex>
                  </Link>
                  <Link href={"/dashboard/quiz"}>
                    <Flex
                      gap="2"
                      align="center"
                      justify="start"
                      className="py-2 px-4 text-[#145959] hover:bg-[#19948c30]"
                    >
                      <FaBook />
                      <Text>Learn</Text>
                    </Flex>
                  </Link>
                  <Link href={"/dashboard/tasks"}>
                    <Flex
                      gap="2"
                      align="center"
                      justify="start"
                      className="py-2 px-4 text-[#145959] hover:bg-[#19948c30]"
                    >
                      <FaTasks />
                      <Text>Tasks</Text>
                    </Flex>
                  </Link>
                  <Separator size="4" />
                  <Link href="/profile">
                    <Flex
                      gap="2"
                      align="center"
                      justify="start"
                      className="py-2 px-4 text-[#145959] hover:bg-[#19948c30]"
                    >
                      <FaUserAlt />
                      <Text>Profile</Text>
                    </Flex>
                  </Link>
                  <Link href={"/settings"}>
                    <Flex
                      gap="2"
                      align="center"
                      justify="start"
                      className="py-2 px-4 text-[#145959] hover:bg-[#19948c30]"
                    >
                      <IoMdSettings />
                      <Text>Settings</Text>
                    </Flex>
                  </Link>
                  <Separator size="4" />
                  <Flex
                    gap="2"
                    align="center"
                    justify="start"
                    className="py-2 px-4 text-[#145959] hover:bg-[#19948c30] hover:cursor-pointer"
                  >
                    <CiLogout />
                    <Text>Sign Out</Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </SkeletonTheme>
  );
};

export default DashboardLoading;
