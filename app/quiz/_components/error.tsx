import { Box, Flex, Text } from "@radix-ui/themes";
import { X } from "lucide-react";

const ErrorSelection = () => {
  return (
    <Flex
      className="mt-4 bg-[#A40021] text-[#F4F3F6] p-3 rounded-[5px] font-semibold hover:cursor-pointer hover:bg-gray-50"
      gap="2"
      align="center"
    >
      <Box className="bg-[#F4F3F6] p-1 rounded-full">
        <X className="h-5 w-5" color="#A40021" />
      </Box>
      <Text className="">
        JavaScript is an assembly language used to make the website interactive
      </Text>
    </Flex>
  );
};

export default ErrorSelection;
