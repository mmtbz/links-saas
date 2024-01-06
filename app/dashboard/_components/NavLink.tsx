import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { CiHome } from "react-icons/ci";

interface props {
  href: string;
  label: string;
  icon: ReactElement;
}

const NavLink = ({ href, label, icon }: props) => {
  return (
    <Link href={href}>
      <Box className="rounded-2xl text-lg p-2 bg-slate-500">
        <Flex align="center" gap="1">
          {icon}
          <Text>{label}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
