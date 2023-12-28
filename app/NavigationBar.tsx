"use client";
import { Container, Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b mb-3 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">LOGO</Link>
            <NavMenu menuOpen />
          </Flex>
          <Flex align="center" gap="3">
            <Link href={"login"}>Login</Link>
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavMenu = ({ menuOpen }: { menuOpen: boolean }) => {
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
      {/* Navigation links for large screens */}

      <ul
        className={`lg:flex space-x-6 ${menuOpen ? 'hidden' : 'block sm:hidden'}`}
      >
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
export default NavigationBar;
