import { Container, Grid, Box, Flex, Text, Button } from "@radix-ui/themes";
import React from "react";
import InterviewImage from "../../../public/images/interview.png";
import FreeImage from "../../../public/images/free.png";
import FastDelivery from "../../../public/images/fast-delivery.png";
import Image from "next/image";

const StepsSection = () => {
  return (
    <div className="bg-[#004b4b] bg-opacity-10 py-4">
      <Container>
        <Box className="px-3 lg:px-0">
          <div>
            <Box className="relative">
              <Box className="uppercase font-bold text-7xl lg:text-6xl opacity-10">
                Process
              </Box>
              <Box className="capitalize font-bold text-3xl lg:text-2xl absolute top-[1rem] left-[1rem] text-[#004b4b]">
                Get your team in 4 steps
              </Box>
            </Box>
            <Grid
              gap="2"
              className="mt-4"
              columns={{ sm: "4" }}
              align="stretch"
            >
              <Flex
                gap="2"
                justify="start"
                align="baseline"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-[0.75rem] py-1 bg-[#004b4b] rounded-full text-white">
                  1
                </Box>
                <Box>
                  <Text className="block font-bold pb-2">
                    Talk to our expert
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                  <Flex justify="center">
                    <button className="mt-4 px-6 py-4 bg-[#004b4b] text-white rounded-[5px]">
                      Talk to an Expert
                    </button>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="baseline"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-[0.75rem] py-1 bg-white rounded-full">2</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Interview best match
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                  <Flex justify="center">
                    <Image src={InterviewImage} alt="interview" height={100} width={100} className=" object-cover"/>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="baseline"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-[0.75rem] py-1 bg-white rounded-full">3</Box>
                <Box>
                  <Text className="block font-bold py-2">Start free trial</Text>
                  <Text>Talk to our expert for your use case.</Text>
                  <Flex justify="center">
                    <Image src={FreeImage} alt="free" height={100} width={100} className=" object-cover"/>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="baseline"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-[0.75rem] py-1 bg-white rounded-full">2</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Get your project delivered
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                  <Flex justify="center">
                    <Image src={FastDelivery} alt="fast" height={100} width={100} className=" object-cover"/>
                  </Flex>
                </Box>
              </Flex>
            </Grid>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default StepsSection;
