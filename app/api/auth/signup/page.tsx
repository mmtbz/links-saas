"use client";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <Flex
      justify="between"
      direction="column"
      className="shadow-lg max-w-[25rem] rounded-t-[10px] mx-auto bg-gradient-to-br from-teal-500 to-green-700"
    >
      <Flex
        className="text-center text-3xl font-bold p-5"
        align="center"
        justify="center"
      >
        <Link href="/">HAKKA</Link>
      </Flex>
      <Flex
        direction="column"
        className="rounded-t-[10px] p-3 bg-gray-50 mx-1 mt-1"
      >
        <Text size="8" mb="4" mt="3">
          Hello, Welcome 👋
        </Text>
        <Text mb="4" className="text-gray-500 text-sm">
          Today is a new day. It&lsquo;s your day. You shape it. <br /> Sign up
          to manage your projects
        </Text>

        <button
          className="px-3 py-2 bg-sky-100 text-black rounded-xl my-3 flex gap-2 justify-center items-center"
          onClick={() => console.log()}
        >
          <FcGoogle size={20} />
          <Text className=" font-semibold opacity-60">Sign Up with Google</Text>
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <form>
          <Flex direction="column" mb="3">
            <label>Firstname</label>
            <input
              type="text"
              placeholder="Emmanuel"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={() => console.log()}
            />
          </Flex>
          <Flex direction="column" mb="3">
            <label>Lastname</label>
            <input
              type="text"
              placeholder="Habimana"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={() => console.log()}
            />
          </Flex>
          <Flex direction="column" mb="3">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={() => console.log()}
            />
          </Flex>
          <Flex direction="column" mb="3">
            <label>Password</label>
            <input
              placeholder="At least 8 characters"
              type="password"
              autoComplete="true"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={() => console.log()}
            />
          </Flex>
        </form>

        <button
          className="px-3 py-2 bg-slate-800 text-white rounded-xl my-5"
          onClick={() => console.log()}
        >
          Sign Up
        </button>

        <Flex gap="2" align="center" justify="center" mb="5">
          <Text>Have an account?</Text>
          <Link
            href="/api/auth/signin"
            className="outline-none hover:bg-inherit hover:cursor-pointer text-blue-800"
          >
            Sign In
          </Link>
        </Flex>

        <Flex justify="center" align="center" className="mb-1 mt-9">
          <Text color="gray" className="opacity-50" size="2">
            © 2024 ALL RIGHTS RESERVED
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
