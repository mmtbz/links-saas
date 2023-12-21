"use client";
import { Tabs, Flex, Box, Text, Badge, Button } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import GoogleLogo from "../../public/images/google.png";
import { FiPlus } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import AboutCompany from "./AboutCompany";
import CompanyPosts from "./CompanyPosts";
import CompanyJobs from "./CompanyJobs";

const CompanyPage = () => {
  return (
    <>
      <Flex align="center" direction="column" gap="3">
        <Image
          src={GoogleLogo}
          height="150"
          width="150"
          alt="Company Picture"
          className="rounded-full mt-3 object-cover"
        />
        <Text as="p" size="7" className="text-center font-bold">
          Google
        </Text>

        <Flex align="center" gap="3">
          <Badge size="2" color="orange">
            Software
          </Badge>
          <Badge size="2" color="blue">
            California, USA
          </Badge>
          <Badge size="2" color="green">
            1 week ago
          </Badge>
        </Flex>

        <Flex align="center" gap="3">
          <Button color="orange">
            <FiPlus /> Follow
          </Button>
          <Button color="orange">
            <TbExternalLink /> Visit
          </Button>
        </Flex>
      </Flex>

      <Tabs.Root defaultValue="about">
        <Tabs.List className="justify-center">
          <Tabs.Trigger value="about">
            <Text className="text-xl font-medium">About Us</Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="posts">
            <Text className="text-xl font-medium">Posts</Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="jobs">
            <Text className="text-xl font-medium">Jobs</Text>
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="2">
          <Tabs.Content value="about">
            <AboutCompany />
          </Tabs.Content>

          <Tabs.Content value="posts">
            <CompanyPosts />
          </Tabs.Content>

          <Tabs.Content value="jobs">
            <CompanyJobs />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </>
  );
};

export default CompanyPage;
