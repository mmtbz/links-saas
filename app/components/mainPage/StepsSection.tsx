import { Container, Grid, Box, Flex, Text, Button } from "@radix-ui/themes";
import React from "react";

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
            <Flex gap="2" className="mt-4 flex-col lg:flex-row">
              <Flex
                gap="2"
                justify="start"
                align="center"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-4 py-2 bg-[#004b4b] rounded-full text-white">1</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Talk to our expert
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                  <button className="mt-4 px-6 py-2 bg-[#004b4b] text-white rounded-[5px]">
                    Talk to an Expert
                  </button>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="center"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-4 py-2 bg-white rounded-full ">2</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Interview best match
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="center"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-4 py-2 bg-white rounded-full ">3</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Start Free trial
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                </Box>
              </Flex>
              <Flex
                gap="2"
                justify="start"
                align="center"
                className="p-3 border border-dashed border-sky-400"
              >
                <Box className="px-4 py-2 bg-white rounded-full ">4</Box>
                <Box>
                  <Text className="block font-bold py-2">
                    Deliver your project
                  </Text>
                  <Text>Talk to our expert for your use case.</Text>
                </Box>
              </Flex>
            </Flex>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default StepsSection;
