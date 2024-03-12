"use client";
import { FEATURES } from "@/app/feature";
import Logo from "@/public/logo-green.png";
import { Box, Container, Flex, Grid, Switch, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Image from "next/image";
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

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
    } else {
      router.push(result?.url as string);
    }
  };

  const hideCustomLoginForm = !FEATURES.HIDE_CUSTOM_LOGIN.enabled;

  return (
    <Container className="">
      <Grid columns={{ initial: "1", md: "5" }}>
        <Box className="h-screen md:col-span-3 p-5 bg-[#F0F2F5]">
          <Flex justify="between">
            <Box className="">
              <Image src={Logo} alt="logo" height={40} />
            </Box>
            <Box className="hidden md:block">
              <Flex gap="2">
                <Text>Don&lsquo;t have an account?</Text>
                <Link
                  href="/api/auth/signup"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Box className="h-5/6 flex flex-col justify-center items-center">
            <Box className="text-center space-y-5 max-w-sm mx-auto">
              <Box className="space-y-2">
                <Text className="font-bold block" size="7">
                  👋 Welcome Back
                </Text>
                <Text size="3" className="block">
                  Sign in into your account
                </Text>
              </Box>

              <button
                className="inline-flex gap-1 items-center justify-center bg-white py-2 px-4 rounded-custom border border-green-500 w-full"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle />
                Google
              </button>
              <div className="flex items-center my-4">
                <hr className="flex-1 border-t border-gray-300" />
                <span className="mx-4 text-gray-500">Or</span>
                <hr className="flex-1 border-t border-gray-300" />
              </div>
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
              <Flex className="text-sm" justify="between">
                <Flex gap="1">
                  <Switch />
                  <Text>Remember Me</Text>
                </Flex>

                <Text className="text-blue-500 hover:cursor-pointer hover:underline">
                  Forgot password
                </Text>
              </Flex>
              <button className="p-2 rounded-custom border border-gray-300 w-full">
                Login
              </button>
              <Box className="md:hidden">
                <Flex gap="2">
                  <Text>Don&lsquo;t have an account?</Text>
                  <Link
                    href="/api/auth/signup"
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="md:col-span-2 h-screen bg-primary relative text-white hidden md:block">
          <Box className="bg-[FFF2F2] rounded-[5px] space-y-3 p-5 m-4 bg-white bg-opacity-[0.06] absolute bottom-0 left-7">
            <Box className="bg-orange-600 rounded-[5px] inline-flex py-1 px-4">
              👍 Top notch candidates
            </Box>
            <Box>
              Today, we create innovative solutions to the <br /> challenges
              that consumers face in both their <br />
              everyday lives and events.
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default LoginPage;
