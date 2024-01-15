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
          <AlertDialog.Title style={{ marginBottom: "2rem", padding: "24px" }}>
            <Flex justify="between" align="center">
              <Flex gap="2" className="bg-[#F4F3F6] rounded-[5px] p-1">
                <Image src={CoinsImage} alt="coins" />
                <Text> 200</Text>
              </Flex>

              <Text className="font-semibold text-xl">
                Javascript Foundamentals #145
              </Text>

              <AlertDialog.Action>
                <button className="text-[#191D63] rounded-full bg-white p-2">
                  <X className="h-5 w-5" />
                </button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Title>
          <AlertDialog.Description size="2">
            <Flex direction="column" align="center" gap="4" p="5">
              <Text className="font-bold text-xl">
                PREDICT THE TOP LOSER (for tomorrow) across these indices
              </Text>
              <Flex direction="column" gap="1">
                <Flex
                  className="mt-4 bg-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#EDE8E3] px-2 py-1 rounded-full">A</Box>
                  <Text className="text-[#060710]">
                    JavaScript is a scripting language used to make the website
                    interactive
                  </Text>
                </Flex>
                <Flex
                  className="mt-4 bg-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
                  gap="2"
                  align="center"
                >
                  <Box className="bg-[#EDE8E3] px-2 py-1 rounded-full">B</Box>
                  <Text className="text-[#060710]">
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
            <Box className="bg-white px-[20rem] py-3">
              <Flex align="center" justify="between">
                <Progress value={33} className="max-w-[12rem] h-2" />

                <button className="bg-[#747475] text-white px-10 py-3 rounded-[5px] opacity-50">
                  CONTINUE
                </button>
              </Flex>
            </Box>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Grid>
  );
};

export default QuizPage;
