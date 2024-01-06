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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Company", href: "/company" },
  { label: "Jobs", href: "/job" },
];

const NavigationBar = () => {
  return (
    <nav className="mb-2 py-4 bg-white">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">LOGO</Link>
            <NavMenu />
          </Flex>
          <Flex align="center" gap="3">
            <Box className="px-6 py-2 hover:bg-slate-200 rounded-2xl border border-solid">
              <Link href={"login"}>Login</Link>
            </Box>

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
      <ul className="hidden md:flex space-x-6">
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
        <CiMenuBurger className="lg:hidden focus:outline-none" />
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
