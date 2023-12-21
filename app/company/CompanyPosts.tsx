import { Card, Flex, Text, Box, Grid, Button } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import GoogleLogo from "../../public/images/google.png";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";

const CompanyPosts = () => {
  return (
    <Grid
      gap="3"
      className="grid"
      columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      <Card>
        <Flex gap="2" align="center">
          <Image
            src={GoogleLogo}
            height="100"
            width="100"
            alt="Company Picture"
            className="rounded-full mt-3 object-cover"
          />
          <Flex direction="column">
            <Text as="p" size="5" className="font-bold">
              Google Inc.
            </Text>
            <Flex align="center" gap="1" className="color-gray">
              <IoMdTime />
              <Text as="span" className="font-extralight">
                21 minutes ago
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            aspernatur consectetur. Qui quidem vel incidunt quod deserunt...{" "}
            <Button variant="ghost" color="orange" className="hover:bg-none">
              Read more.
            </Button>
          </Text>
        </Box>

        <Image
          src={`https://source.unsplash.com/collection/190727/800x600?8`}
          height="400"
          width="1200"
          alt="Profile Picture"
          className="rounded-3xl mt-4 object-cover"
        />

        <Text className="font-bold block" size="5" mt="4">
          What's it like to work at Google?
        </Text>
        <Text className="font-extralight block" size="3" mt="1">
          Youtube.com
        </Text>
      </Card>
    </Grid>
  );
};

export default CompanyPosts;
