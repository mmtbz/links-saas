import { Box, Container, Text, Flex } from "@radix-ui/themes";
import { FaAngleRight } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <Container>
      <Box className="mt-4">
        <Text size="6" className="font-semibold">
          Morning David,
        </Text>
        <Flex gap="4" className="mt-4 mx-4">
          <Flex
            align="center"
            gap="3"
            justify="between"
            className="flex-1 bg-gradient-to-br from-teal-500 to-green-700 p-6 text-white rounded-[0.5rem]"
          >
            <Box>
              <Text className="block" size="4">
                Get a perfect Candidate for your Project
              </Text>
              <Text size="2">Tell us what service you need</Text>
            </Box>
            <FaAngleRight size={24} />
          </Flex>
          <Flex
            align="center"
            gap="3"
            justify="between"
            className="flex-1 bg-gradient-to-br from-green-700 to-teal-500 p-6 text-white rounded-[0.5rem]"
          >
            <Box>
              <Text className="block" size="4">
                Get a perfect Candidate for your Project
              </Text>
              <Text size="2">Tell us what service you need</Text>
            </Box>
            <FaAngleRight size={24} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default DashboardPage;
