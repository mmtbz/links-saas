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
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const TasksPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession();
  if (status === "loading") return <div>Loading ....</div>;
  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
    return null;
  }
  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text
          size="6"
          className="font-semibold bg-gradient-to-r from-teal-500 to-green-700 text-transparent bg-clip-text"
        >
          Your Tasks
        </Text>
      </Box>
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
                  <Text className="block">{session?.user?.name}</Text>
                  <Text className=" text-gray-500" size="1">
                    {session?.user?.role}
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
                <Text size="1">Unseen</Text>
                <Progress value={20} className="max-w-[4rem] h-2" />
                <Text size="1">25%</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Text size="1">In Progress</Text>
                <Progress value={45} className="max-w-[4rem] h-2" />
                <Text size="1">45%</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Text size="1">Completed</Text>
                <Progress value={35} className="max-w-[4rem] h-2" />
                <Text size="1">35%</Text>
              </Flex>
            </Flex>
            <Box className="my-4 mx-3">
              <Separator size="4" />
            </Box>
            <Box className="bg-[#19948c30] px-3 py-2 rounded-[5px] text-center">
              <Text>Total Tasks ( Aug ) 75</Text>
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

            <Flex
              className=" bg-white p-4 border-y border-solid border-[#E4E5E7] my-4"
              align="center"
              justify="between"
            >
              <Text>Projects</Text>
              <select
                name="projects"
                id="projects"
                className="p-1 bg-[#19948c30] rounded-[5px]"
              >
                <option value="volvo">UI development</option>
                <option value="saab">Mobile Engineering</option>
              </select>
            </Flex>

            <Box className="bg-white p-4 border-y border-solid border-[#E4E5E7]">
              <Text>Account</Text>
            </Box>
            <Box className=" bg-white ">
              <Link href={"/people/"}>
                <Flex
                  gap="2"
                  align="center"
                  justify="start"
                  className="p-2 text-[#145959] hover:bg-[#19948c30]"
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
                  className="p-2 text-[#145959] hover:bg-[#19948c30]"
                >
                  <IoMdSettings />
                  <Text>Settings</Text>
                </Flex>
              </Link>
              <Flex
                gap="2"
                align="center"
                justify="start"
                className="p-2 text-[#145959] hover:bg-[#19948c30] hover:cursor-pointer"
                onClick={() => console.log("sign out")}
              >
                <CiLogout />
                <Text>Sign Out</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box className="col-span-1 lg:col-span-3"></Box>
      </Grid>
    </Container>
  );
};

export default TasksPage;
