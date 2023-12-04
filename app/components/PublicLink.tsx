import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IconBaseProps } from "react-icons";
import { CiLinkedin } from "react-icons/ci";

interface Props {
  icon?: IconBaseProps;
  label: string;
  link: string;
  id: number;
}

const PublicLink = ({ icon, label, link, id }: Props) => {
  return (
    <a href={link} target="_blank">
      <Flex
        className="space-x-2 p-1 rounded-xl hover:bg-slate-100 bg-black"
        align="center"
      >
        <Flex
          className="flex-shrink-0 h-10 w-10 rounded-lg text-slate-500"
          justify="center"
          align="center"
        >
          <CiLinkedin size={36} />
        </Flex>
        <Box className="w-full flex-grow min-w-0">
          <Text className="font-medium text-sm leading-6 text-gray-900">
            {label}
          </Text>
        </Box>
      </Flex>
    </a>
  );
};

export default PublicLink;
