"use client";
import {
  Box,
  Container,
  Flex,
  Grid,
  Separator,
  Text
} from "@radix-ui/themes";
import Image from "next/image";
import GoogleLogo from "../../public/images/google.png";
import MicrosoftLogo from "../../public/images/msft.png";

const CompanyPage = () => {
  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Companies
        </Text>
        <Grid
          gap="3"
          className="grid mt-4"
          columns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          <Flex
            direction="column"
            gap="3"
            className="border border-solid bg-gray-50 border-gray-200 rounded-[15px] p-4 hover:bg-gray-100"
          >
            <Box>
              <Text className="block font-bold text-lg">Google</Text>
              <Text className="text-blue-600 text-xs font-semibold">
                🔥 Active hiring
              </Text>
            </Box>

            <Image
              src={GoogleLogo}
              alt="google logo"
              className=" object-cover rounded-[15px]"
            />

            <Separator size="4" />
            <Text>Software Services</Text>
            <Box className="uppercase text-xs">
              <Text className="opacity-70">followed by</Text>
              <Text className="text-blue-600 font-semibold"> 1000 </Text>
              <Text className="opacity-70"> people</Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            gap="3"
            className="border border-solid bg-gray-50 border-gray-200 rounded-[15px] p-4 hover:bg-gray-100"
          >
            <Box>
              <Text className="block font-bold text-lg">Microsoft</Text>
              <Text className="text-blue-600 text-xs font-semibold">
                Open Hiring soon
              </Text>
            </Box>

            <Image
              src={MicrosoftLogo}
              alt="google logo"
              className=" object-cover rounded-[15px]"
            />

            <Separator size="4" />
            <Text>Software Services</Text>
            <Box className="uppercase text-xs">
              <Text className="opacity-70">followed by</Text>
              <Text className="text-blue-600 font-semibold"> 674 </Text>
              <Text className="opacity-70"> people</Text>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyPage;
