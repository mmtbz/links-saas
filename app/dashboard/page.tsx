"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Flex } from "@radix-ui/themes";
import { CiSettings } from "react-icons/ci";

import { usePathname } from "next/navigation";
import { useState } from "react";
import LayersImage from "../../public/icons/001-layers.png";
import ProjectsImage from "../../public/icons/002-research.png";
import DashboardImage from "../../public/icons/003-layout.png";
import ListImage from "../../public/icons/004-list.png";
import QuizImage from "../../public/icons/005-quiz.png";
import PeopleImage from "../../public/icons/006-people.png";
import HomeImage from "../../public/icons/007-home.png";
import NavLink from "./_components/NavLink";


const DashboardPage = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home",
      image: HomeImage
    },
    {
      href: "/dashboard",
      label: "dashboard",
      image: DashboardImage 
    },
    {
      href: "/tasks",
      label: "Tasks",
      image: ListImage
    },
    {
      href: "/quiz",
      label: "quiz",
      image: QuizImage
    },
    {
      href: "/people",
      label: "people",
      image: PeopleImage
    },
    {
      href: "/projects",
      label: "projects",
      image: LayersImage
    },
    {
      href: "/insights",
      label: "insights",
      image: ProjectsImage
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
                image={link.image}
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
