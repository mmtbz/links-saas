"use client";
import {
  Tabs as MyTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Badge,
  Box,
  Button,
  Flex,
  Separator,
  Tabs,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import MicrosoftLogo from "../../public/images/msft.png";
import GoogLogo from "../../public/images/goog.png";

import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyPosts from "./CompanyPosts";

const CompanyPage = () => {
  return (
    <>
      <Tabs.Root defaultValue="about">
        <MyTabs defaultValue="about">
          <Flex
            direction="column"
            gap="3"
            className="border border-solid rounded-[10px] bg-gray-50"
          >
            <Flex justify="between" className="p-4">
              <Flex direction="column" gap="3">
                <Flex
                  className="p-2 h-25 w-25"
                  align="center"
                  justify="center"
                >
                  <Image
                    src={MicrosoftLogo}
                    alt="Company Picture"
                    height={150}
                    width={150}
                    className="object-cover"
                  />
                </Flex>

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

            <TabsList className="text-gray-600">
              <TabsTrigger value="about">
                <Text className="text-xl font-medium">About</Text>
              </TabsTrigger>
              <TabsTrigger value="posts">
                <Text className="text-xl font-medium">Posts</Text>
              </TabsTrigger>
              <TabsTrigger value="jobs">
                <Text className="text-xl font-medium">Jobs</Text>
              </TabsTrigger>
            </TabsList>
          </Flex>

          <Box className="pt-5 bg-white">
            <TabsContent value="about">
              <AboutCompany />
            </TabsContent>
            <TabsContent value="posts">
              <CompanyPosts />
            </TabsContent>
            <TabsContent value="jobs">
              <CompanyJobs />
            </TabsContent>
          </Box>
        </MyTabs>
      </Tabs.Root>
    </>
  );
};

export default CompanyPage;
