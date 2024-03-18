import { Box, Container, Flex, Grid, Separator, Text } from "@radix-ui/themes";
import Flags from "country-flag-icons/react/3x2";
import Image from "next/image";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const PublicResume = () => {
  return (
    <Container>
      <Grid columns="5">
        <Box className="col-span-1 bg-gray-100 min-h-screen space-y-3 pt-2">
          <Image
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            height={100}
            width={150}
            alt="profile picture"
            className="object-cover rounded-r-[15px]"
          />
          <Flex className="p-5" direction="column">
            <Text className="font-bold text-2xl">John Smith</Text>
            <Text className="font-semibold text-lg text-violet-500">
              UX Designeer
            </Text>

            <Separator size="4" className="my-5" />

            <Flex gap="2" align="center" className="mb-3">
              <Box className="p-2 bg-gray-300 rounded-full">
                <FaLocationDot color="gray" />
              </Box>
              <Flex direction="column">
                <Text className="text-sm opacity-50">Location</Text>
                <Text className=" text-sm">Kigali,Rwanda</Text>
              </Flex>
            </Flex>

            <Flex gap="2" align="center">
              <Box className="p-2 bg-gray-300 rounded-full">
                <FaClock color="gray" />
              </Box>
              <Flex direction="column">
                <Text className="text-sm opacity-50">Local Time</Text>
                <Text className=" text-sm">01:34PM</Text>
              </Flex>
            </Flex>
            <Separator size="4" className="my-5" />
            <Box className="mb-2">
              <Text className="text-sm opacity-50">Languages</Text>
            </Box>
            <Box className="space-y-2">
              <Flex gap="2" align="center">
                <Flags.RW className="w-8 h-8" />
                <Flex direction="column">
                  <Text className="text-sm opacity-50">kinyarwanda</Text>
                  <Text className="text-sm">Native</Text>
                </Flex>
              </Flex>
              <Flex gap="2" align="center">
                <Flags.US className="w-8 h-8" />
                <Flex direction="column">
                  <Text className="text-sm opacity-50">English</Text>
                  <Text className=" text-sm">Profecient</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box className=" col-span-4">hello</Box>
      </Grid>
    </Container>
  );
};

export default PublicResume;
