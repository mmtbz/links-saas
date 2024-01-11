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
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import classnames from "classnames";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Company", href: "/company" },
  { label: "Jobs", href: "/job" },
];

const NavigationBar = () => {
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
            <AuthStatus />

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
                className={classnames({
                  "pb-5 hover:text-black hover:border-b-4 hover:border-black":
                    true,
                  "border-b-4 border-black": currentPath === link.href,
                })}
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
            <Flex direction="column" gap="5" className="text-lg pt-5">
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

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <p>loading</p>;
  if (status === "unauthenticated")
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
            <Link href="/api/auth/signout">Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};
export default NavigationBar;
