import { Box, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface props {
  href: string;
  label: string;
  icon?: ReactElement;
  selected: boolean; // determine if current link is selected
  hideText: boolean; // determine if panel is too small to hide text
  image?: StaticImageData;
}

const NavLink = ({ href, label, icon, image, selected, hideText }: props) => {
  return (
    <Link href={href}>
      <Box
        className={classnames({
          "px-6 py-2 hover:bg-slate-100 border-b-[1px] border-solid": true,
          "hover:text-black border-b-[2px] border-solid border-black": selected,
          "px-8 py-3": hideText,
        })}
      >
        <Flex align="center" gap="2" justify={hideText ? "center" : "start"}>
          {icon}
          {image && <Image src={image} height={16} width={16} alt="layers" />}
          {!hideText && <Text className="capitalize">{label}</Text>}
        </Flex>
      </Box>
    </Link>
  );
};

export default NavLink;
