"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Flex } from "@radix-ui/themes";
import { BsListTask } from "react-icons/bs";
import { CiHome, CiSettings } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdInsights, MdOutlineQuiz } from "react-icons/md";

import NavLink from "./_components/NavLink";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardPage = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: <CiHome />,
    },
    {
      href: "/dashboard",
      label: "dashboard",
      icon: <BsListTask />,
    },
    {
      href: "/tasks",
      label: "Tasks",
      icon: <BsListTask />,
    },
    {
      href: "/quiz",
      label: "quiz",
      icon: <MdOutlineQuiz />,
    },
    {
      href: "/people",
      label: "people",
      icon: <IoIosPeople />,
    },
    {
      href: "/projects",
      label: "projects",
      icon: <GoProjectRoadmap />,
    },
    {
      href: "/insights",
      label: "insights",
      icon: <MdInsights />,
    },
  ];

  const currentPath = usePathname();
  const [hideText, setHidetext] = useState(false);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={20}
        minSize={10}
        maxSize={25}
        onResize={(size) => setHidetext(size <= 15)}
        className="hidden lg:block"
      >
        <Flex
          className="rounded-md bg-white p-2 max-h-screen min-h-screen"
          direction="column"
          gap="2"
          justify="between"
        >
          <Flex gap="2" direction="column">
            {navLinks.map((link) => (
              <NavLink
                href={link.href}
                label={link.label}
                icon={link.icon}
                selected={currentPath === link.href}
                hideText={hideText}
                key={link.label}
              />
            ))}
          </Flex>
          <NavLink
            href="/settings"
            label="settings"
            icon={<CiSettings />}
            selected={currentPath === "/settings"}
            hideText={hideText}
          />
        </Flex>
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-gray-200 hidden lg:flex" />
      <ResizablePanel defaultSize={80}>
        <div className="flex h-full items-center justify-center p-6 bg-white">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default DashboardPage;
