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

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Company", href: "/company" },
  { label: "Jobs", href: "/job" },
];

const loginUrl = "/api/auth/signin";

const NavigationBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="py-2 lg:py-4 px-2 lg:px-0 border-solid border-b">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/" className="pr-8">
              LOGO
            </Link>
            <NavMenu />
          </Flex>
          <Flex align="center" gap="3">
            <Box
              className={`py-2 hover:rounded-2xl hover:text-orange-300 ${
                currentPath === loginUrl ? "hidden" : "hidden lg:block"
              } `}
            >
              <Link href={"login"}>For Companies</Link>
            </Box>

            <Box
              className={`py-2 hover:rounded-2xl hover:text-orange-300 ${
                currentPath === loginUrl ? "hidden" : "hidden lg:block"
              } `}
            >
              <Link href={"login"}>Find a Job</Link>
            </Box>

            <Box
              className={`py-2 hover:rounded-2xl hover:text-orange-300 ${
                currentPath === loginUrl ? "hidden" : "hidden lg:block"
              } `}
            >
              <Link href={"login"}>Log In</Link>
            </Box>

            <Box
              className={`py-3 px-3 rounded-full bg-sky-100 font-bold  hover:rounded-full  ${
                currentPath === loginUrl ? "hidden" : "hidden lg:block"
              } `}
            >
              <Link href={"login"}>Sign Up</Link>
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
                  hidden: currentPath === loginUrl || currentPath === "/",
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
export default NavigationBar;
