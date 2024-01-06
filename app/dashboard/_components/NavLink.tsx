import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { ReactElement } from "react";
import classnames from "classnames";

interface props {
  href: string;
  label: string;
  icon: ReactElement;
  selected: boolean; // determine if current link is selected
}

const NavLink = ({ href, label, icon, selected }: props) => {
  return (
    <Link href={href}>
      <Box
        className={classnames({
          "px-6 py-2 hover:bg-slate-100 rounded-2xl border border-solid": true,
          "bg-black text-white hover:text-black": selected,
        })}
        // className = classNames({
        //   "px-6 py-2 hover:bg-slate-200 rounded-2xl border border-solid" : true,
        // })
      >
        <Flex align="center" gap="2">
          {icon}
          <Text className="capitalize">{label}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
