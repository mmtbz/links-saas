"use client";
import {
  Box,
  Container,
  Text,
  Flex,
  Grid,
  Avatar,
  Separator,
  Button,
} from "@radix-ui/themes";
import { FaAngleRight, FaSortDown } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { IoStar } from "react-icons/io5";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <Box className="mt-4">
        <Text size="6" className="font-semibold">
          Morning David,
        </Text>
        <Flex gap="4" className="mt-4">
          <Flex
            align="center"
            gap="3"
            justify="between"
            className="flex-1 bg-gradient-to-br from-teal-500 to-green-700 p-6 text-white rounded-[0.5rem]"
          >
            <Box>
              <Text className="block" size="4">
                Get a perfect Candidate for your Project
              </Text>
              <Text size="2">Tell us what service you need</Text>
            </Box>
            <FaAngleRight size={24} />
          </Flex>
          <Flex
            align="center"
            gap="3"
            justify="between"
            className="flex-1 bg-gradient-to-br from-green-700 to-teal-500 p-6 text-white rounded-[0.5rem]"
          >
            <Box>
              <Text className="block" size="4">
                Get a perfect Candidate for your Project
              </Text>
              <Text size="2">Tell us what service you need</Text>
            </Box>
            <FaAngleRight size={24} />
          </Flex>
        </Flex>

        <Grid
          columns={{ sm: "1", lg: "4" }}
          className="grid-cols-3 py-4"
          gap="4"
        >
          <Box className=" col-span-1 shadow-lg  border border-solid border-[#E4E5E7] rounded-[5px] hidden lg:block">
            <Box className=" bg-white">
              <text className="opacity-0">a</text>
            </Box>
            <Box className="rounded-t-[5px] p-3 bg-gray-100 mx-1">
              <Flex justify="between" align="center">
                <Flex align="center" gap="3">
                  <Avatar
                    src=""
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                  <Box>
                    <Text className="block">David Mutabazi</Text>
                    <Text className=" text-gray-500" size="1">
                      mmdavid0@gmail.com
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  gap="1"
                  align="center"
                  justify="center"
                  className="bg-[#2E90EB] px-[0.4rem] py-[0.2rem] rounded-[5px]"
                >
                  <Text className="text-white text-sm">5</Text>
                  <IoStar color="white" size="14" />
                </Flex>
              </Flex>
              <Box className="my-4 mx-3">
                <Separator size="4" />
              </Box>
              <Flex gap="3" direction="column">
                <Flex align="center" gap="2">
                  <Text size="1">Inbox response rate</Text>
                  <Progress value={100} className="max-w-[4rem] h-2" />
                  <Text size="1">100%</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="1">Inbox response time</Text>
                  <Text size="1">5hrs</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="1">Order response rate</Text>
                  <Progress value={45} className="max-w-[4rem] h-2" />
                  <Text size="1">45%</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="1">Delivered on time</Text>
                  <Progress value={90} className="max-w-[4rem] h-2" />
                  <Text size="1">90%</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Text size="1">Delivery rate</Text>
                  <Progress value={100} className="max-w-[4rem] h-2" />
                  <Text size="1">100%</Text>
                </Flex>
              </Flex>
              <Box className="my-4 mx-3">
                <Separator size="4" />
              </Box>
              <Box className="bg-[#19948c30] px-3 py-2 rounded-[5px] text-center">
                <Text>Total Earnings ( Aug ) $450</Text>
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
                <Text>Link your social networks</Text>
              </Box>
            </Box>
          </Box>
          <Box className=" col-span-3">
            <Flex gap="4">
              <Flex
                direction="column"
                className="flex-1 p-4 bg-gradient-to-br from-teal-500 to-green-700 text-white rounded-[15px]"
                gap="4"
                align="baseline"
              >
                <Text size="1" className=" font-semibold text-[#ffffff80]">
                  Unseen Tasks
                </Text>
                <Box>
                  <Text size="5" className=" font-semibold">
                    Unseen Tasks - 5
                  </Text>
                </Box>

                <Flex gap="1" className="p-2 border border-solid rounded-[5px]">
                  <Link href="/">Unseen Tasks</Link>
                  <FaSortDown />
                </Flex>
              </Flex>
              <Flex
                direction="column"
                className="flex-1 p-4 bg-gradient-to-br from-teal-500 to-green-700 text-white rounded-[15px]"
                gap="4"
                align="baseline"
              >
                <Text size="1" className=" font-semibold text-[#ffffff80]">
                  Pending Tasks
                </Text>
                <Box>
                  <Text size="5" className=" font-semibold">
                    Active Tasks - 10
                  </Text>
                </Box>

                <Flex gap="1" className="p-2 border border-solid rounded-[5px]">
                  <Link href="/">Active Tasks</Link>
                  <FaSortDown />
                </Flex>
              </Flex>{" "}
              <Flex
                direction="column"
                className="flex-1 p-4 border border-solid rounded-[15px] bg-gray-100"
                gap="4"
                align="baseline"
              >
                <Text size="1" className=" font-semibold opacity-50">
                  Finished Tasks
                </Text>
                <Box>
                  <Text size="5" className=" font-semibold opacity-70">
                    Finished Tasks - 75
                  </Text>
                </Box>

                <Flex gap="1" className="p-2 border border-solid rounded-[5px]">
                  <Link href="/">Finished Tasks</Link>
                  <FaSortDown />
                </Flex>
              </Flex>
            </Flex>
            <Box className="mt-4">
              <Flex align="center">
                <Box className="bg-gray-100 px-2 py-[2px] text-gray-600 font-semibold rounded-[5px] capitalize">
                  <Text size="2" className=" whitespace-nowrap">
                    Upgrade yourself
                  </Text>
                </Box>
                <Separator size="4" />
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
