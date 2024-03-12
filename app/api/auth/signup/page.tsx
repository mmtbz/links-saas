"use client";
import { FEATURES } from "@/app/feature";
import LogoWite from "@/public/logo-white.png";
import LogoGreen from "@/public/logo-green.png";
import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineTaskAlt } from "react-icons/md";

const SignUpPage = () => {
  const hideCustomLoginForm = !FEATURES.HIDE_CUSTOM_LOGIN.enabled;

  return (
    <Container className="">
      <Grid columns={{ initial: "1", md: "5" }}>
        <Box className="md:col-span-2 h-screen bg-primary relative text-white hidden md:block">
          <Box className="p-5">
            <Image src={LogoWite} alt="logo" height={40} />
          </Box>
          <Box className="bg-[FFF2F2] rounded-[5px] space-y-3 p-5 m-4 bg-white bg-opacity-[0.06] absolute top-[210px] left-[15px]">
            <Box className="bg-black rounded-[5px] inline-flex py-3 px-4">
              <FaPeopleGroup size="24" />
            </Box>
            <Box>
              Over 1000+ pre-veted candidates. <br />
              Your project will be delivered on time.
            </Box>
          </Box>
          <Box className="p-3 bg-[#5A5A5A] rounded-full inline-flex items-center gap-1 absolute top-[500px] right-[-70px] shadow-2xl">
            <Box className="p-2 rounded-full bg-gray-300">
              <MdOutlineTaskAlt color="grey" />
            </Box>
            <Text>Task Management</Text>
          </Box>
          <Box className="p-3 bg-green-500 rounded-full inline-flex items-center gap-1 absolute top-[150px] left-[25px] shadow-2xl">
            <Box className="p-2 rounded-full bg-black bg-opacity-30">
              <FaBook color="black" />
            </Box>
            <Text className="text-black">Lean & take quizes</Text>
          </Box>
        </Box>
        <Box className="h-screen md:col-span-3 p-5 bg-[#F0F2F5]">
          <Flex className="justify-start md:justify-end">
            <Box className="lg:hidden">
            <Image src={LogoGreen} alt="logo" height={30} />
            </Box>

            <Box className="hidden md:block">
              <Flex gap="2">
                <Text>Have an account?</Text>
                <Link
                  href="/api/auth/signin"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Box className="h-[90%] flex flex-col justify-center items-center">
            <Box className="text-center space-y-5 max-w-sm mx-auto">
              <Box className="space-y-2">
                <Text className="font-bold block" size="7">
                  👋 Get started with Worklane
                </Text>
                <Text size="3" className="block">
                  Getting started is easy
                </Text>
              </Box>

              <button className="inline-flex gap-1 items-center justify-center bg-white py-2 px-4 rounded-custom border border-green-500 w-full">
                <FcGoogle />
                Google
              </button>
              <div className="flex items-center my-4">
                <hr className="flex-1 border-t border-gray-300" />
                <span className="mx-4 text-gray-500">Or</span>
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <input
                placeholder="Fullname"
                className="p-2 rounded-custom border border-gray-300 outline-none w-full"
                type="text"
              />
              <input
                placeholder="Email"
                className="p-2 rounded-custom border border-gray-300 outline-none w-full"
                type="email"
              />
              <input
                placeholder="Password"
                className="p-2 rounded-custom border border-gray-300 outline-none w-full"
                type="password"
              />
              <input
                placeholder="Confirm password"
                className="p-2 rounded-custom border border-gray-300 outline-none w-full"
                type="password"
              />
              <button className="p-2 rounded-custom border bg-green-500 w-full">
                Create Account
              </button>
              <Box className="md:hidden">
                <Flex gap="2">
                  <Text>Have an account?</Text>
                  <Link
                    href="/api/auth/signin"
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign In
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Box className="mt-5 text-center">
              <Text size="2">
                By continuing you indicate that you read and agreed to the Terms
                of Use
              </Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
