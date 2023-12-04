"use client";

import { Tabs, Box, Text, Flex } from "@radix-ui/themes";
import React from "react";
import AboutPage from "./AboutPage";
import ProfileTitle from "./ProfileTitle";

const ProfileTabs = () => {
  return (
    <Tabs.Root defaultValue="about">
      <Flex align="center" justify="between">
        <ProfileTitle title="About" />
        <Tabs.List>
          <Tabs.Trigger value="about">About</Tabs.Trigger>
          <Tabs.Trigger value="resume">Resume</Tabs.Trigger>
          <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
        </Tabs.List>
      </Flex>

      <Box pt="2">
        <Tabs.Content value="about">
          <AboutPage />
        </Tabs.Content>

        <Tabs.Content value="resume">
          <Text size="2">Access and update your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="contact">
          <Text size="2">Edit your profile or update contact information.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default ProfileTabs;
