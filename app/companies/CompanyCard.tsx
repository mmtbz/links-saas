import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  descrption: string;
}

const CompanyCard = ({ name, descrption }: Props) => {
  return (
    <Flex
      direction="column"
      gap="3"
      className="border border-solid bg-gray-50 border-gray-200 rounded-[15px] p-4 hover:bg-gray-100"
    >
      <Box>
        <Text className="block font-bold text-lg">{name}</Text>
        <Text className="text-blue-600 text-xs font-semibold">
          🔥 Active hiring
        </Text>
      </Box>

      <Image src="" alt={name +" logo"} className=" object-cover rounded-[15px]" />

      <Separator size="4" />
      <Text>{descrption}</Text>
      <Box className="uppercase text-xs">
        <Text className="opacity-70">followed by</Text>
        <Text className="text-blue-600 font-semibold"> 1000 </Text>
        <Text className="opacity-70"> people</Text>
      </Box>
    </Flex>
  );
};

export default CompanyCard;
