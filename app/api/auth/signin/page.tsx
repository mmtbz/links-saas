"use client";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const loginData = {
      callbackUrl: "/dashboard",
      redirect: false,
    };
    const result = await signIn("google", loginData);

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    }
  };

  const handleCustomSignIn = async () => {
    const loginData = {
      email: email,
      password: password,
      callbackUrl: "/dashboard",
      redirect: false,
    };
    const result = await signIn("credentials", loginData);
    console.log(result);

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    } else {
      router.push(result?.url as string);
    }
  };

  return (
    <Flex 
    justify="between"
    direction="column"
    className="shadow-lg border border-solid border-[#E4E5E7] rounded-[5px] max-w-[25rem] mx-auto h-screen">
      <Box className=" bg-white text-center text-3xl font-bold mt-7">
        <Link href="/">HAKKA</Link>
      </Box>
      <Flex direction="column" className="rounded-t-[10px] p-3 bg-gray-50 mx-1">
        <Text size="8" mb="5" mt="5">
          Welcome back 👋
        </Text>
        <Text size="3">
          Today is a new day. It&lsquo;s your day. You shape it.
        </Text>
        <Text size="3" mb="3">
          Sign in to manage your projects
        </Text>
        <form>
          <Flex direction="column" mb="3">
            <label>Email</label>
            <input
              placeholder="example@email.com"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Flex direction="column" mb="3">
            <label>Password</label>
            <input
              placeholder="At least 8 characters"
              type="password"
              autoComplete="true"
              className="border border-solid border-grey px-3 py-2 rounded-xl bg-blue-50 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Flex>
        </form>
        <Flex justify="end" className="mb-3">
          <Button
            variant="ghost"
            color="blue"
            className="outline-none hover:bg-inherit hover:cursor-pointer"
          >
            Forgot Password?
          </Button>
        </Flex>

        <button
          className="px-3 py-2 bg-slate-800 text-white rounded-xl mb-5"
          onClick={handleCustomSignIn}
        >
          Sign In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <button
          className="px-3 py-2 bg-sky-50 text-black rounded-xl mb-3 flex gap-2 justify-center items-center"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={20} />
          <Text>Sign In with Google</Text>
        </button>

        <Flex gap="2" align="center" justify="center" mb="5">
          <Text>Don&lsquo;t have an account?</Text>
          <a className="outline-none hover:bg-inherit hover:cursor-pointer text-sky-600">
            Sign Up
          </a>
        </Flex>

        <Flex justify="center" align="center" className="mb-3 mt-9">
          <Text color="gray" className="opacity-50" size="2">
            © 2024 ALL RIGHTS RESERVED
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
