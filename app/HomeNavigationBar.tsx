"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Avatar,
  Box,
  Button,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSortDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiUsersFill } from "react-icons/pi";

const links = [
  { label: "For Companies", href: "/dashboard" },
  { label: "Find A Job", href: "/profile" },
  { label: "Login", href: "/company" },
  { label: "Get a Demo", href: "/job" },
  { label: "add a Project", href: "/job" },
];


const HomeNavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="text-white bg-[#0D7070] mt-2">
      <Container className="">
        <Flex justify="between">
          <Flex align="center" gap="3" className="py-2 lg:py-4 px-3 lg:px-0">
            <Link href="/">LOGO</Link>
          </Flex>
          <Flex
            align="center"
            gap="3"
            className="py-2 lg:py-3 lg:px-0 mx-3 lg:mx-0"
          >
            <Box className="hidden lg:block">
              <Flex gap="1">
                <Link href="/">For Companies</Link>
                <FaSortDown />
              </Flex>
            </Box>

            <Box className="p-2 hover:bg-white hover:p-2 hover:rounded-[5px] hover:opacity-80 hover:text-black hidden lg:block">
              <Link href="/">Find a Job</Link>
            </Box>

            <Flex className="border border-solid rounded-[5px] ">
              <Box className="border-r border-solid p-2 ">
                <Link href="/api/auth/signin">Login</Link>
              </Box>
              <Flex
                gap="1"
                align="center"
                className="px-4 bg-sky-100 text-black opacity-90"
              >
                <PiUsersFill />
                <Link href="/api/auth/signup">Sign Up</Link>
              </Flex>
            </Flex>

            <Box className="p-2 hover:bg-white hover:p-2 hover:rounded-[5px] hover:opacity-80 hover:text-black hidden lg:block">
              <Link href="/dashboard">Get a Demo</Link>
            </Box>
            <Box className="hidden lg:block">
              <Flex
                gap="1"
                align="center"
                className="p-2 border border-solid rounded-[5px]"
              >
                <FiPlus />
                <Link href="/">Add a Project</Link>
              </Flex>
            </Box>

            <MobileNavigationBar />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const MobileNavigationBar = () => {
  const router = useRouter();

  const navigateToRoute = (href: string): void => {
    router.push(href);
    router.refresh();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Box className="lg:hidden border border-solid rounded-xl p-2 focus:outline-none">
          <GiHamburgerMenu className="lg:hidden focus:outline-none" size={18} />
        </Box>
      </SheetTrigger>
      <SheetContent className="bg-[#145959] text-white">
        <SheetHeader>
          <SheetDescription className="flex flex-col justify-between">
            <Flex direction="column" gap="5" className="text-lg pt-8 outline-none">
              {links.map((link) => (
                <SheetClose
                  onClick={() => navigateToRoute(link.href)}
                  key={link.label}
                  className="text-left pt-3 pb-1 border-solid border-b-[1px]"
                >
                  {link.label}
                </SheetClose>
              ))}
            </Flex>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HomeNavBar;
