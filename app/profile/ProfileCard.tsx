import { Flex, Box, Text, Badge } from "@radix-ui/themes";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <Flex gap="2" className="my-4">
      {/* <Flex align="center" justify="center" className="bg-slate-900">
        <FaLocationDot />
      </Flex> */}
      <Badge className="flex items-center p-2 bg-red-500 rounded-full" size="2">
        <FaLocationDot />
      </Badge>
      <Flex direction="column">
        <Text className="uppercase text-xs">Location</Text>
        <Text className="font-semibold">San-Francisco, USA</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
