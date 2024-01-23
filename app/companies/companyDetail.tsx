"use client";
import {
  Tabs,
  Flex,
  Box,
  Text,
  Badge,
  Button,
  Separator,
} from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import MicrosoftLogo from "../../public/images/msft.png";
import { FiPlus } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import AboutCompany from "./AboutCompany";
import CompanyPosts from "./CompanyPosts";
import CompanyJobs from "./CompanyJobs";
import { FaBell } from "react-icons/fa";

const CompanyPage = () => {
  return (
    <>
      <Tabs.Root defaultValue="about">
        <Flex
          direction="column"
          gap="3"
          className="p-4 border border-solid rounded-[5px]"
        >
          <Flex justify="between">
            <Flex direction="column" gap="3">
              <Image
                src={MicrosoftLogo}
                height="150"
                width="150"
                alt="Company Picture"
                className="rounded-full object-cover"
              />
              <Text as="p" size="7" className="font-bold">
                Microsoft
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
            </Flex>

            <Flex gap="3">
              <Button color="orange">
                <FaBell />
                <Text>Follow</Text>
              </Button>
            </Flex>
          </Flex>
          <Separator size="4" />
          <Tabs.List className=" shadow-none">
            <Tabs.Trigger value="about">
              <Text className="text-xl font-medium">About</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="posts">
              <Text className="text-xl font-medium">Posts</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="jobs">
              <Text className="text-xl font-medium">Jobs</Text>
            </Tabs.Trigger>
          </Tabs.List>
        </Flex>

        <Box className="pt-5 bg-white">
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
