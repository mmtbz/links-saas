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
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import classnames from "classnames";
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

const loginUrl = "/api/auth/signin";

const HomeNavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="text-white bg-[#0D7070] mt-2">
      <Container className="">
        <Flex justify="between">
          <Flex align="center" gap="3" className="py-2 lg:py-4 px-2 lg:px-0">
            <Link href="/">LOGO</Link>
          </Flex>
          <Flex
            align="center"
            gap="3"
            className="py-2 lg:py-3 lg:px-0 mx-2 lg:mx-0"
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
                <Link href="/">Login</Link>
              </Box>
              <Flex
                gap="1"
                align="center"
                className="px-4 bg-sky-100 text-black opacity-90"
              >
                <PiUsersFill />
                <Link href="/">Join</Link>
              </Flex>
            </Flex>

            <Box className="p-2 hover:bg-white hover:p-2 hover:rounded-[5px] hover:opacity-80 hover:text-black hidden lg:block">
              <Link href="/">Get a Demo</Link>
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
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetDescription className="flex flex-col justify-between">
            <Flex direction="column" gap="5" className="text-lg pt-8">
              {links.map((link) => (
                <SheetClose
                  onClick={() => navigateToRoute(link.href)}
                  key={link.label}
                  className="text-left pt-3 pb-1 border-solid border-b-[1px] border-black"
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

const AuthStatus = () => {
  const { status, data: session } = useSession();
  const currentPath = usePathname();

  const handleSignOut = async () => {
    const signOutData = {
      callbackUrl: "/",
    };
    const result = await signOut(signOutData);
  };

  if (status === "loading") return <p>loading</p>;
  if (status === "unauthenticated")
    if (currentPath === "/api/auth/signin") return null;
    else
      return (
        <Box className="px-6 py-2 rounded-2xl text-orange-300 border border-solid border-orange-300 hover:bg-orange-200 hover:text-white">
          <Link href="/api/auth/signin">Login</Link>
        </Box>
      );
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user?.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user?.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Button onClick={handleSignOut}>Sign Out</Button>
            {/* <Link href="/api/auth/signout">Log Out</Link> */}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};
export default HomeNavBar;
