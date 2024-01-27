"use client";
import { Progress } from "@/components/ui/progress";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Separator,
  Text
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAngleRight, FaSortDown } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import NoticedIcon from "../../public/svg/getNoticed.svg";
import LearnIcon from "../../public/svg/learn.svg";
import SuccessfullIcon from "../../public/svg/successfull.svg";
import UpdateRoleModal from "./UpdateRoleModal";

const DashboardPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession();
  if (status === "loading") return <div>Loading ....</div>;
  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
    return null;
  }
  return (
    <Container>
      {session?.user?.role === "NONE" && <UpdateRoleModal />}
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Morning {session?.user?.name},
        </Text>
        <Flex gap="4" className="mt-4 flex-col lg:flex-row">
          <Flex
            align="center"
            gap="3"
            justify="between"
            className="flex-1 bg-gradient-to-br from-teal-500 to-green-700 p-6 text-white rounded-[0.5rem]"
          >
            <Box>
              <Text className="block font-semibold text-lg" size="4">
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
              <Text className="block font-semibold text-lg" size="4">
                Get a perfect Candidate for your Project
              </Text>
              <Text size="2">Tell us what service you need</Text>
            </Box>
            <FaAngleRight size={24} />
          </Flex>
        </Flex>

        <Grid
          columns={{ sm: "1", lg: "4" }}
          className=" grid-cols-1 lg:grid-cols-4 py-4"
          gap="4"
        >
          <Box className=" col-span-1 shadow-lg border border-solid border-[#E4E5E7] rounded-[5px] hidden lg:block">
            <Box className=" bg-white">
              <text className="opacity-0">a</text>
            </Box>
            <Box className="rounded-t-[5px] p-3 bg-gray-100 mx-1">
              <Flex justify="between" align="center">
                <Flex align="center" gap="3">
                  <Avatar
                    src={session?.user?.image || ""}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                  <Box>
                    <Text className="block">{session!.user?.name}</Text>
                    <Text className=" text-gray-500" size="1">
                      {session!.user?.email}
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
          <Box className="col-span-1 lg:col-span-3">
            <Box className="my-4 lg:hidden">
              <Flex align="center">
                <Box className="bg-gray-100 px-2 py-[2px] text-gray-600 font-semibold rounded-[5px] capitalize">
                  <Text size="2" className=" whitespace-nowrap">
                    Tasks Insights
                  </Text>
                </Box>
                <Separator size="4" />
              </Flex>
            </Box>
            <Flex gap="4" className="flex-col lg:flex-row">
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
                    🫣 Unseen Tasks - 5
                  </Text>
                </Box>

                <Flex gap="1" className="p-2 border border-solid rounded-[5px]">
                  <Link href="/tasks">Unseen Tasks</Link>
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
                  <Link href="/tasks">Active Tasks</Link>
                  <FaSortDown />
                </Flex>
              </Flex>
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
                    👍 Finished Tasks - 75
                  </Text>
                </Box>

                <Flex gap="1" className="p-2 border border-solid rounded-[5px]">
                  <Link href="/tasks">Finished Tasks</Link>
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
            <Box className="mt-4 p-4 shadow-lg border border-solid border-[#E4E5E7] rounded-[5px]">
              <Text size="4" className=" font-semibold block py-2">
                3 steps to become a top candidate on Hakka
              </Text>
              <Text size="2" className="text-gray-500">
                The key to your success on Fiverr is the brand you build for
                yourself through your Fiverr reputation. We gathered some tips
                and resources to help you become a leading seller on Fiverr.
              </Text>

              <Flex className="mt-6 flex-col lg:flex-row" gap="4">
                <Flex className=" flex-1" direction="column" gap="3">
                  <Box>
                    <Image
                      src={NoticedIcon}
                      alt="get noticed"
                      priority={false}
                      height={45}
                      width={45}
                    />
                    <Text className="font-semibold">Get Noticed</Text>
                  </Box>

                  <Box>
                    <p className="text-gray-500 text-sm">
                      Tap into the power of social media by sharing your Gig,
                      and get expert help to grow your impact.
                    </p>
                  </Box>
                  <Flex>
                    <button className="min-w-[10rem] text-blue-700 font-semibold p-2 border border-solid border-blue-700 rounded-[5px]">
                      Apply for Jobs
                    </button>
                  </Flex>
                </Flex>
                <Flex className=" flex-1" direction="column" gap="3">
                  <Box>
                    <Image
                      src={LearnIcon}
                      alt="learn"
                      priority={false}
                      height={45}
                      width={45}
                    />
                    <Text className="font-semibold">Get Noticed</Text>
                  </Box>

                  <Box>
                    <p className="text-gray-500 text-sm">
                      Tap into the power of social media by sharing your Gig,
                      and get expert help to grow your impact.
                    </p>
                  </Box>
                  <Flex>
                    <button className="min-w-[10rem] text-blue-700 font-semibold p-2 border border-solid border-blue-700 rounded-[5px]">
                      Take Quiz
                    </button>
                  </Flex>
                </Flex>
                <Flex className=" flex-1" direction="column" gap="3">
                  <Box>
                    <Image
                      src={SuccessfullIcon}
                      alt="be successfull"
                      priority={false}
                      height={45}
                      width={45}
                    />
                    <Text className="font-semibold">Get Noticed</Text>
                  </Box>

                  <Box>
                    <p className="text-gray-500 text-sm">
                      Tap into the power of social media by sharing your Gig,
                      and get expert help to grow your impact.
                    </p>
                  </Box>
                  <Flex>
                    <button className="min-w-[10rem] text-blue-700 font-semibold p-2 border border-solid border-blue-700 rounded-[5px]">
                      Learn for free
                    </button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
