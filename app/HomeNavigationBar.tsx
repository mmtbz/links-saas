"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Box, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiUsersFill } from "react-icons/pi";
import Logo from "@/public/logo-white.png";
import Image from "next/image";

const links = [
  { label: "For Companies", href: "/dashboard" },
  { label: "Find A Job", href: "/profile" },
  { label: "Get a Demo", href: "/job" },
  { label: "Dashboard", href: "/dashboard" },
];

const HomeNavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="text-white bg-[#0D7070] mt-2">
      <Container className="py-2 lg:py-3 lg:px-0 mx-3 lg:mx-0">
        <Flex justify="between" align="center">
          <Flex align="center" gap="3">
            <Link href="/">
              <Image src={Logo} alt="logo" height={40} />
            </Link>
          </Flex>

          <Flex align="center" gap="3">
            <Box className="hidden lg:block">
              <Link href="/dashboard">Get a Demo</Link>
            </Box>
            <Box className="hidden lg:block">
              <Flex
                align="center"
                gap="2"
                className="py-2 px-3 border border-solid rounded-custom"
              >
                <CiLogin />
                <Link href="/api/auth/signin">Log In</Link>
              </Flex>
            </Box>
            <Box className="hidden lg:block">
              <Flex
                align="center"
                gap="2"
                className=" rounded-custom px-3 py-2 bg-orange-400 text-black border border-orange-400
            "
              >
                <PiUsersFill />
                <Link href="/api/auth/signup">Sign Up</Link>
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
        <Box className="lg:hidden border border-solid rounded-[10px] p-2 focus:outline-none">
          <GiHamburgerMenu className="lg:hidden focus:outline-none" size={18} />
        </Box>
      </SheetTrigger>
      <SheetContent className="bg-[#145959] text-white">
        <SheetHeader>
          <SheetDescription className="flex flex-col justify-between">
            <Flex direction="column">
              <Flex
                direction="column"
                gap="5"
                className="text-lg pt-8 outline-none"
              >
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
              <Flex
                gap="6"
                align="center"
                justify="center"
                className="p-2 border border-solid rounded-custom mt-9"
              >
                <FiPlus />
                <Link href="/">Add a Project</Link>
              </Flex>

              <Flex
                gap="2"
                align="center"
                justify="center"
                className="bg-gray-200 p-2 border border-solid rounded-custom mt-3 text-black font-bold"
              >
                <CiLogin />
                <Link href="/api/auth/signin">Log In</Link>
              </Flex>
            </Flex>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HomeNavBar;
