"use client";

import { Tabs, Box, Text, Flex } from "@radix-ui/themes";
import React from "react";
import AboutTab from "./AboutTab";
import Title from "../components/Title";
import ResumeTab from "./ResumeTab";

const ProfileTabs = () => {
  return (
    <Tabs.Root defaultValue="about">
      <Flex align="center" justify="between">
        <Title title="About" />
        <Tabs.List>
          <Tabs.Trigger value="about">
            <Text className="text-xl font-medium">About</Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="resume">
            <Text className="text-xl font-medium">Resume</Text>
          </Tabs.Trigger>
        </Tabs.List>
      </Flex>

      <Box pt="2">
        <Tabs.Content value="about">
          <AboutTab />
        </Tabs.Content>

        <Tabs.Content value="resume">
          <ResumeTab />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default ProfileTabs;
