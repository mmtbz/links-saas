"use client";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  Box,
  Container,
  Flex,
  Grid,
  Separator,
  Text,
} from "@radix-ui/themes";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CoinsImage from "../../public/icons/coins.png";
import JsImage from "../../public/images/js-banner.webp";
import OptionSelection from "./_components/option";

import classNames from "classnames";
import { CiHeart } from "react-icons/ci";

const QuizPage = () => {
  const [selected, setSelected] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelected(selectedValue);
  };

  const answers = [
    {
      position: "A",
      value:
        "JavaScript is a scripting language used to make the website interactive",
      answer: true,
    },
    {
      position: "B",
      value:
        "JavaScript is an assembly language used to make the website interactive",
    },
    {
      position: "C",
      value:
        "JavaScript is a compiled language used to make the website interactive",
    },
    {
      position: "D",
      value: "None of the above",
    },
  ];

  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Assesments & Quizes
        </Text>
        <Grid
          gap="3"
          className="grid mt-4"
          columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Flex
                direction="column"
                gap="3"
                className="border border-solid border-gray-200 rounded-[15px] p-4"
              >
                <Box>
                  <Text className="block font-bold">
                    Javascript foundamentals
                  </Text>
                  <Text className="text-blue-600 text-xs font-semibold">
                    Recommended for You
                  </Text>
                </Box>

                <Image
                  src={JsImage}
                  alt="javascript course"
                  className=" object-cover rounded-[15px]"
                />

                <Separator size="4" />
                <Text>Introduction to Javascript, for absolute begineers</Text>
                <Box className="uppercase text-xs">
                  <Text className="text-blue-600 font-semibold">1000 </Text>
                  <Text className="opacity-70">
                    people took it in past month
                  </Text>
                </Box>
              </Flex>
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
                    What is Javascript?
                  </p>
                  <Flex direction="column" gap="1">
                    {answers.map((answer) => (
                      <OptionSelection
                        key={answer.position}
                        value={answer.value}
                        position={answer.position}
                        answer={answer.answer}
                        selected={selected}
                        onChange={handleRadioChange}
                      />
                    ))}
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

                  <button
                    className={classNames({
                      "text-white px-10 py-3 rounded-[5px]": true,
                      "bg-[#747475] opacity-50": selected === "",
                      "bg-[#31CD63]": selected != "",
                    })}
                  >
                    CONTINUE
                  </button>
                </Flex>
              </AlertDialog.Description>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuizPage;
