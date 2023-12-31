import { Box, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { ReactElement } from "react";

interface props {
  href: string;
  label: string;
  icon: ReactElement;
  selected: boolean; // determine if current link is selected
  hideText: boolean; // determine if panel is too small to hide text
}

const NavLink = ({ href, label, icon, selected, hideText }: props) => {
  return (
      <Link href={href}>
        <Box
          className={classnames({
            "px-6 py-2 hover:bg-slate-100 rounded-2xl border border-solid":
              true,
            "bg-black text-white hover:text-black": selected,
            "px-8 py-3": hideText,
          })}
        >
          <Flex align="center" gap="2" justify={hideText ? "center" : "start"}>
            {icon}
            {!hideText && <Text className="capitalize">{label}</Text>}
          </Flex>
        </Box>
      </Link>
  );
};

export default NavLink;
