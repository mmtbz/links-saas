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
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import {
  FaAngleRight,
  FaBook,
  FaSortDown,
  FaTasks,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import NoticedIcon from "../../public/svg/getNoticed.svg";
import LearnIcon from "../../public/svg/learn.svg";
import SuccessfullIcon from "../../public/svg/successfull.svg";
import UpdateRoleModal from "./UpdateRoleModal";
import Spinner from "../components/Spinner";
import Title from "../components/Title";

const DashboardPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession();
  if (status === "loading")
    return (
      <Container>
        <Spinner header={"Dashaboard"} />
      </Container>
    );
  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }
  return (
    <>
      {session?.user?.role === "NONE" && <UpdateRoleModal />}
      <Title title={`Hello ${session?.user?.name}`}/>

      <Flex gap="4" className="mb-4 flex-col lg:flex-row">
        <Flex
          align="center"
          gap="3"
          justify="between"
          className="flex-1 bg-gradient-to-br from-teal-500 to-green-700 p-6 text-white rounded-[0.5rem]"
        >
          <Box>
            <Text className="block font-semibold text-lg" size="4">
              Get a perfect Remote job
            </Text>
            <Text size="2">Tell us your preference</Text>
          </Box>
          <FaAngleRight size={24} />
        </Flex>
        <Flex
          align="center"
          gap="3"
          justify="between"
          className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white rounded-[0.5rem]"
        >
          <Box>
            <Text className="block font-semibold text-lg" size="4">
              Take One time quiz for your skills
            </Text>
            <Text size="2">
              Take one time quiz valid for all your job application
            </Text>
          </Box>
          <FaAngleRight size={24} />
        </Flex>
      </Flex>
      <Box className="my-4">
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
          The key to your success on Fiverr is the brand you build for yourself
          through your Fiverr reputation. We gathered some tips and resources to
          help you become a leading seller on Fiverr.
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
                Tap into the power of social media by sharing your Gig, and get
                expert help to grow your impact.
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
                Tap into the power of social media by sharing your Gig, and get
                expert help to grow your impact.
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
                Tap into the power of social media by sharing your Gig, and get
                expert help to grow your impact.
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
    </>
  );
};

export default DashboardPage;
