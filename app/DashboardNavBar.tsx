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
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import NotificationIcon from "../public/svg/notification.svg";
import HeartIcon from "../public/svg/favorite.svg";
import MessageIcon from "../public/svg/message.svg";
import LayersImage from "../public/icons/001-layers.png";
import ProjectsImage from "../public/icons/002-research.png";
import DashboardImage from "../public/icons/003-layout.png";
import ListImage from "../public/icons/004-list.png";
import QuizImage from "../public/icons/005-quiz.png";
import PeopleImage from "../public/icons/006-people.png";
import HomeImage from "../public/icons/007-home.png";
import { RiHome4Fill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
import { MdInsights } from "react-icons/md";

import React from "react";
import { CiLogout } from "react-icons/ci";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Tasks", href: "/tasks" },
  { label: "Jobs", href: "/job" },
  { label: "Quiz", href: "/quiz" },
  { label: "Settings", href: "/profile" },
];

const navLinks = [
  {
    href: "/",
    label: "Home",
    image: HomeImage,
    icon: RiHome4Fill,
  },
  {
    href: "/dashboard",
    label: "dashboard",
    image: DashboardImage,
    icon: LuLayoutDashboard,
  },
  {
    href: "/tasks",
    label: "Tasks",
    image: ListImage,
    icon: FaTasks,
  },
  {
    href: "/quiz",
    label: "quiz",
    image: QuizImage,
    icon: MdOutlineQuiz,
  },
  {
    href: "/people",
    label: "people",
    image: PeopleImage,
    icon: FaPeopleGroup,
  },
  {
    href: "/projects",
    label: "projects",
    image: LayersImage,
    icon: GoStack,
  },
  {
    href: "/insights",
    label: "insights",
    image: ProjectsImage,
    icon: MdInsights,
  },
];

const loginUrl = "/api/auth/signin";

const DashboardNavBar = () => {
  const currentPath = usePathname();
  // we don't want this nav bar on home page, home page has it's own
  if (currentPath === "/") return null;
  if (currentPath.startsWith("/api/auth")) return null;
  console.log(currentPath);
  return (
    <nav>
      <Box className="max-h-[0.5rem] lg:max-h-[0.5rem] opacity-0">a</Box>
      <Box className="max-w-[74rem] mx-auto">
        <Flex
          justify="between"
          className="text-white bg-[#145959] lg:rounded-[1rem]"
        >
          <Flex align="center" gap="3">
            <Link href="/" className="pl-2">
              LOGO
            </Link>
          </Flex>
          <Flex align="center" gap="3" className="py-2 px-2">
            <Flex gap="2" align="center">
              <Image
                src={NotificationIcon}
                alt="Notification"
                className="hidden lg:block hover:cursor-pointer"
                priority={false}
                height={20}
                width={20}
              />
              <Image
                src={HeartIcon}
                alt="Favorites"
                className="hidden lg:block hover:cursor-pointer"
                priority={false}
                height={20}
                width={20}
              />
              <Image
                src={MessageIcon}
                alt="Message"
                className="hidden lg:block hover:cursor-pointer"
                priority={false}
                height={20}
                width={20}
              />
            </Flex>

            <Box className="hidden lg:block">
              <Flex
                gap="1"
                align="center"
                className="px-3 py-1 border border-solid rounded-[5px]"
              >
                <FiPlus />
                <Link href="/">Add a Project</Link>
              </Flex>
            </Box>
            <AuthStatus />
            <MobileNavigationBar />
          </Flex>
        </Flex>
      </Box>
      <Container>
        <Box className="hidden lg:block">
          <Flex
            className="text-white bg-[#0D7070] my-2 rounded-[0.5rem] px-4  text-sm"
            gap="4"
          >
            {navLinks.map((link) => (
              <Flex key={link.href} className="p-1" gap="1" align="center">
                {link.icon &&
                  React.createElement(link.icon, { className: "icon-class" })}
                <Link href={link.href}>{link.label}</Link>
              </Flex>
            ))}
          </Flex>
        </Box>
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
        <Box className="lg:hidden border border-solid rounded-xl border-white p-2 focus:outline-none">
          <GiHamburgerMenu className="lg:hidden focus:outline-none" size={18} />
        </Box>
      </SheetTrigger>
      <SheetContent className="bg-[#145959] text-white">
        <SheetHeader>
          <SheetDescription className="flex flex-col justify-between">
            <Flex direction="column" gap="5" className="text-lg pt-8">
              {links.map((link) => (
                <SheetClose
                  onClick={() => navigateToRoute(link.href)}
                  key={link.label}
                  className="text-left pt-3 pb-1 border-solid border-b-[1px] border-white"
                >
                  {link.label}
                </SheetClose>
              ))}
            </Flex>
            <Flex
              gap="6"
              align="center"
              justify="center"
              className="p-2 border border-solid rounded-[5px] mt-9"
            >
              <CiLogout />
              <Link href="/">Sign Out</Link>
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
export default DashboardNavBar;
