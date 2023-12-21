import { Grid, Card, Flex, Text, Badge, Box } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import GoogleLogo from "../../public/images/google.png";
import { CiBookmark } from "react-icons/ci";

const CompanyJobs = () => {
  return (
    <Grid
      gap="3"
      className="grid"
      columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      <Card>
        <Flex align="center" justify="between">
          <Flex className="h-12 w-12 bg-headings rounded-3xl">
            <Image
              src={GoogleLogo}
              height="70"
              width="70"
              alt="Company Picture"
              className="rounded-full mt-3 object-cover"
            />
          </Flex>
          <CiBookmark size={32} />
        </Flex>
        <Flex direction="column">
          <Text className="block font-bold" size="5" mt="4">
            UI/UX Designer
          </Text>
          <Text className="block color-gray" mt="1">
            Google Inc. • California, USA
          </Text>
        </Flex>
        <Flex justify="between" mt="4">
          <Badge color="gray" size="2">
            Design
          </Badge>
          <Badge color="gray" size="2">Full Time</Badge>
          <Badge color="gray" size="2">Chief Designer</Badge>
        </Flex>

        <Flex justify="between" mt="4">
          <Text className="color-gray font-thin">25 minutes ago</Text>
          <Box>
          <Text className="font-bold">$14K</Text>
          <Text className="color-gray font-thin">/Mo</Text>
          </Box>
          
        </Flex>
      </Card>
    </Grid>
  );
};

export default CompanyJobs;
