"use client";

import { Tabs, Box, Text, Flex } from "@radix-ui/themes";
import React from "react";
import AboutTab from "./AboutTab";
import Title from "../components/Title";
import ResumeTab from "./ResumeTab";
import { Skill } from "@prisma/client";

interface Props {
  about: string;
  skills: Skill[]
}

const ProfileTabs = ({about, skills}: Props) => {
  return (
    <Tabs.Root defaultValue="about">
      <Flex align="center" justify="between" className="p-2">
        <Title title="About" />
        <Tabs.List className="">
          <Tabs.Trigger value="about">
            <Text className="text-xl font-medium text-gray-800">About</Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="resume">
            <Text className="text-xl font-medium text-gray-800">Resume</Text>
          </Tabs.Trigger>
        </Tabs.List>
      </Flex>

      <Box pt="2" className="p-2">
        <Tabs.Content value="about">
          <AboutTab about={about} skills={skills}/>
        </Tabs.Content>

        <Tabs.Content value="resume">
          <ResumeTab />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default ProfileTabs;
