"use client";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumbs = () => {
  const pathName = usePathname();
  const pathnames = pathName.split("/").filter((x) => x);

  return (
    <Flex gap="2" className="pb-2">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Flex key={name} align={"center"} gap="2" className="capitalize">
            <FaAngleRight />

            {isLast ? (
              <Box className="bg-second px-3 rounded-custom">{name}</Box>
            ) : (
              <Link href={routeTo} className="hover:underline">
                {name}
              </Link>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Breadcrumbs;
