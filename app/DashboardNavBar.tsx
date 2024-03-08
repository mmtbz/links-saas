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
  Container,
  DropdownMenu,
  Flex,
  Separator,
  Text,
} from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBook, FaTasks } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import HeartIcon from "../public/svg/favorite.svg";
import MessageIcon from "../public/svg/message.svg";
import NotificationIcon from "../public/svg/notification.svg";

import { CiLogout } from "react-icons/ci";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Tasks", href: "/dashboard/tasks" },
  { label: "Jobs", href: "/job" },
  { label: "Quiz", href: "/dashboard/quiz" },
  { label: "People", href: "/people" },
  { label: "Settings", href: "/profile" },
];

const DashboardNavBar = () => {
  const currentPath = usePathname();
  // we don't want this nav bar on home page, home page has it's own
  if (currentPath === "/") return null;
  if (currentPath.startsWith("/api/auth")) return null;
  return (
    <nav>
      <Container className="text-white bg-[#145959]">
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/" className="pl-2">
              LOGO
            </Link>
          </Flex>
          <Flex align="center" className="py-2">
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
            <Box className="hidden lg:block pl-5">
              <Flex gap="4" align="center">
                <Link href="/dashboard/quiz">
                  <Flex gap="2" align="center">
                    <FaBook />
                    <Text>Learn</Text>
                  </Flex>
                </Link>
                <Link href="/dashboard/tasks">
                  <Flex gap="2" align="center">
                    <FaTasks />
                    <Text>Tasks</Text>
                  </Flex>
                </Link>
                <Link href="/job">
                  <Flex gap="2" align="center">
                    <MdOutlineWork />
                    <Text>Jobs</Text>
                  </Flex>
                </Link>
                <AuthStatus />
              </Flex>
            </Box>
            <MobileNavigationBar />
          </Flex>
        </Flex>
      </Container>
      {/* <Container>
        <Box className="hidden lg:block">
          <Flex
            className="text-white bg-[#0D7070] my-2 rounded-[0.5rem] px-4 text-sm"
            gap="4"
          >
            {navLinks.map((link) => (
              <Flex
                key={link.href}
                className="p-2 capitalize"
                gap="1"
                align="center"
              >
                {link.icon &&
                  React.createElement(link.icon, { className: "icon-class" })}
                <Link href={link.href}>{link.label}</Link>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Container> */}
    </nav>
  );
};

const MobileNavigationBar = () => {
  const router = useRouter();

  const navigateToRoute = (href: string): void => {
    router.push(href);
    router.refresh();
  };

  const handleSignOut = async () => {
    const signOutData = {
      callbackUrl: "/",
    };
    const result = await signOut(signOutData);
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
              gap="2"
              align="center"
              justify="center"
              className="p-2 border border-solid rounded-custom mt-9"
              onClick={handleSignOut}
            >
              <CiLogout />
              <button>Sign Out</button>
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

  if (status === "loading")
    return <Avatar src="" fallback="?" size="2" radius="full" />;
  if (status === "unauthenticated")
    if (currentPath.startsWith("/api/auth")) return null;
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image || ""}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer bg-white"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Flex direction="column" gap="3" className="p-3">
            <Box>
              <Text className="font-bold text-xl block">
                {session?.user?.name}
              </Text>
              <Text className="font-semibold text-normal opacity-60">
                {session?.user?.email}
              </Text>
            </Box>

            <Separator size="4" />
            <Flex
              gap="2"
              align="center"
              justify="center"
              className="p-2 border border-solid border-[#145959] rounded-custom text-[#145959] hover:cursor-pointer"
              onClick={handleSignOut}
            >
              <CiLogout />
              <button>Sign Out</button>
            </Flex>
          </Flex>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};
export default DashboardNavBar;
