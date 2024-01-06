"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container, Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";

const NavigationBar = () => {
  return (
    <nav className="mb-2 px-5 py-6 bg-white">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">LOGO</Link>
            <NavMenu />
          </Flex>
          <Flex align="center" gap="3">
            <Link href={"login"}>Login</Link>
            <MobileNavigationBar />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavMenu = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Company", href: "/company" },
    { label: "Jobs", href: "/job" },
  ];

  return (
    <div className="md:hidden lg:flex lg:items-center lg:justify-end">
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "nav-link": true,
                "!text-zinc-900": link.href === currentPath,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileNavigationBar = () => {
  const router = useRouter();
  const links = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Company", href: "/company" },
    { label: "Jobs", href: "/job" },
  ];

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
