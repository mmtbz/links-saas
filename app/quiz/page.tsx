"use client";
import { AlertDialog, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { X } from "lucide-react";
import Image from "next/image";
import CoinsImage from "../../public/icons/coins.png";
import JsImage from "../../public/icons/js.png";
import { Progress } from "@/components/ui/progress";

const QuizPage = () => {
  const quizResponse = {};

  return (
    <Grid
      gap="3"
      className="grid"
      columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Card>
            <Image src={JsImage} alt="javascript" width={50} height={50} />
            Javascript foundamentals
          </Card>
        </AlertDialog.Trigger>
        <AlertDialog.Content
          style={{
            maxWidth: 1280,
            backgroundColor: "#EDE8E3",
            borderRadius: 0,
            color: "#191D63",
            padding: 0,
          }}
        >
          <AlertDialog.Title className="px-[12px] pt-[12px] pb-3 lg:px-[24px] lg:pt-[24px] lg:pb-[45px]">
            <Flex justify="between" align="center" gap="2">
              <Flex
                gap="2"
                className="bg-[#F4F3F6] rounded-[5px] p-1"
                align="center"
              >
                <Image src={CoinsImage} alt="coins" className="h-5 w-5" />
                <Text className="text-sm"> 200</Text>
              </Flex>

              <p className="font-semibold text-base text-center lg:text-xl leading-6">
                Javascript Foundamentals #145
              </p>

              <AlertDialog.Action>
                <button className="text-[#191D63] rounded-full bg-white p-2">
                  <X className="h-5 w-5" />
                </button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Title>
          <AlertDialog.Description size="2">
            <Flex
              direction="column"
              align="center"
              className="pb-4 gap-[0.5rem] px-[12px] lg:px-[24px]"
            >
              <Progress value={33} className="h-3 bg-[#F4F3F6] lg:hidden" />

              <p className="font-bold text-lg lg:text-xl text-center leading-6 pt-5 lg:pt-0">
                PREDICT THE TOP LOSER (for tomorrow) across these indices
              </p>
              <Flex direction="column" gap="1">
                <Flex
                  className="mt-4 bg-[#45C486] text-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#F4F3F6] p-[0.5px] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.71 7.21C18.617 7.11627 18.5064 7.04188 18.3846 6.99111C18.2627 6.94034 18.132 6.9142 18 6.9142C17.868 6.9142 17.7373 6.94034 17.6154 6.99111C17.4936 7.04188 17.383 7.11627 17.29 7.21L9.84 14.67L6.71 11.53C6.61347 11.4368 6.49953 11.3634 6.37468 11.3142C6.24982 11.265 6.1165 11.2409 5.98232 11.2432C5.84814 11.2456 5.71573 11.2743 5.59265 11.3278C5.46957 11.3813 5.35823 11.4585 5.265 11.555C5.17176 11.6515 5.09844 11.7655 5.04924 11.8903C5.00004 12.0152 4.9759 12.1485 4.97823 12.2827C4.98055 12.4169 5.00928 12.5493 5.06277 12.6723C5.11626 12.7954 5.19347 12.9068 5.29 13L9.13 16.84C9.22296 16.9337 9.33356 17.0081 9.45542 17.0589C9.57728 17.1097 9.70798 17.1358 9.84 17.1358C9.97201 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68C18.8115 8.58636 18.8925 8.4727 18.9479 8.3462C19.0033 8.21971 19.0319 8.0831 19.0319 7.945C19.0319 7.8069 19.0033 7.67029 18.9479 7.54379C18.8925 7.41729 18.8115 7.30364 18.71 7.21Z"
                        fill="#31CD63"
                      />
                    </svg>
                  </Box>
                  <Text className="">
                    JavaScript is a scripting language used to make the website
                    interactive
                  </Text>
                </Flex>
                <Flex
                  className="mt-4 bg-[#A40021] text-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#F4F3F6] p-1 rounded-full">
                    <X className="h-5 w-5" color="#A40021"/>
                  </Box>
                  <Text className="">
                    JavaScript is an assembly language used to make the website
                    interactive
                  </Text>
                </Flex>
                <Flex
                  className="mt-4 bg-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#EDE8E3] px-2 py-1 rounded-full">C</Box>
                  <Text className="text-[#060710]">
                    JavaScript is a compiled language used to make the website
                    interactive
                  </Text>
                </Flex>
                <Flex
                  className="mt-4 bg-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#EDE8E3] px-2 py-1 rounded-full">D</Box>
                  <Text className="text-[#060710]">None of the mentioned</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              align="center"
              justify="center"
              className="bg-white p-3 lg:gap-[20rem]"
            >
              <Progress
                value={33}
                className="max-w-[12rem] h-2 hidden lg:block"
              />

              <button className="bg-[#747475] text-white px-10 py-3 rounded-[5px] opacity-50">
                CONTINUE
              </button>
            </Flex>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Grid>
  );
};

export default QuizPage;
