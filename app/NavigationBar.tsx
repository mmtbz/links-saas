"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Company", href: "/company" },
  { label: "Jobs", href: "/job" },
];

const NavigationBar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="py-2 lg:py-3 px-2 lg:px-0 bg-[#FFF5EC] border-solid border-b">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/" className="pr-8">
              LOGO
            </Link>
            <NavMenu />
          </Flex>
          <Flex align="center" gap="3">
            <Box className="py-2 hover:rounded-2xl hover:text-orange-300 hidden lg:flex">
              <Link href={"login"}>Apply For Jobs</Link>
            </Box>
            <Box
              className="px-6 py-2 rounded-2xl bg-orange-300 text-white border border-solid border-orange-300 hover:bg-white hover:text-orange-300
            hover:border hover:border-solid hover:border-orange-300 hidden lg:flex"
            >
              <Link href={"login"} className="font-bold">
                Hire Best Talents
              </Link>
            </Box>
            {status === "authenticated" && (
              <Box>
                {session.user?.name}
                <Link href="/api/auth/signout" className="ml-3">Sign Out</Link>
              </Box>
            )}
            {status === "unauthenticated" && (
              <Box className="px-6 py-2 rounded-2xl text-orange-300 border border-solid border-orange-300 hover:bg-orange-200 hover:text-white">
                <Link href="/api/auth/signin">Login</Link>
              </Box>
            )}

            <MobileNavigationBar />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavMenu = () => {
  const currentPath = usePathname();
  return (
    <div className="md:hidden lg:flex lg:items-center lg:justify-end">
      <ul className="hidden md:flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <Text
                color={currentPath === link.href ? undefined : "gray"}
                className="hover:text-black"
              >
                {link.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
        <Box className="lg:hidden border border-solid rounded-xl border-black p-2 focus:outline-none">
          <GiHamburgerMenu className="lg:hidden focus:outline-none" size={18} />
        </Box>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetDescription>
            <Flex direction="column" gap="3" className="text-lg">
              {links.map((link) => (
                <SheetClose
                  onClick={() => navigateToRoute(link.href)}
                  key={link.label}
                  className="text-left"
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
export default NavigationBar;
