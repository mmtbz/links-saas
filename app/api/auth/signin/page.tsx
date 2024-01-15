"use client";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import WorkPerson from "../../../../public/svg/working_person.svg";

const LoginPage = () => {

  const handleSignIn = async () => {
    const loginData = {
      callbackUrl: "/dashboard",
      redirect: false,
    };
    const result = await signIn("google", loginData);

    // Check if the sign-in was successful and the user is authenticated
    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    }
  };

  return (
    <Grid columns={{ sm: "1", lg: "2" }}>
      <Flex direction="column" className="px-2 lg:mx-auto">
        <Text size="8" mb="5" mt="5">
          Welcome back 👋
        </Text>
        <Text size="3">
          Today is a new day. It&lsquo;s your day. You shape it.
        </Text>
        <Text size="3" mb="3">
          Sign in to manage your projects
        </Text>
        <Flex direction="column" mb="3">
          <label>Email</label>
          <input
            placeholder="example@email.com"
            className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
          />
        </Flex>
        <Flex direction="column" mb="3">
          <label>Password</label>
          <input
            placeholder="At least 8 characters"
            type="password"
            className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
          />
        </Flex>
        <Flex justify="end" className="mb-3">
          <Button
            variant="ghost"
            color="blue"
            className="outline-none hover:bg-inherit hover:cursor-pointer"
          >
            Forgot Password?
          </Button>
        </Flex>

        <button className="px-3 py-2 bg-slate-800 text-white rounded-xl mb-5">
          Sign In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <button
          className="px-3 py-2 bg-sky-50 text-black rounded-xl mb-3 flex gap-2 justify-center items-center"
          onClick={handleSignIn}
        >
          <FcGoogle size={20} />
          <Text>Sign In with Google</Text>
        </button>

        <Flex gap="2" align="center" justify="end" mb="5">
          <Text>Don&lsquo;t have an account?</Text>
          <a className="outline-none hover:bg-inherit hover:cursor-pointer text-sky-600">
            Sign Up
          </a>
        </Flex>

        <Flex justify="center" align="center">
          <Text color="gray" className="opacity-50 mt-9" size="2">
            © 2024 ALL RIGHTS RESERVED
          </Text>
        </Flex>
      </Flex>
      <Image
        src={WorkPerson}
        alt="My Happy SVG"
        className="hidden lg:block"
        priority={false}
      />
    </Grid>
  );
};

export default LoginPage;
