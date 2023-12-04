import {
  Text,
  Card,
  Container,
  Flex,
  Grid,
  Badge,
  Separator,
} from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  const tags = [0, 1, 2, 3];
  return (
    <Container>
      <Grid columns="1fr 3fr" gap="3" className="mt-5">
        <Card>
          <Flex align="center" direction="column" gap="3">
            <Image
              src="https://randomuser.me/api/portraits/men/75.jpg"
              height="150"
              width="150"
              alt="Profile Picture"
              className="rounded-3xl mt-3"
            />
            <Text as="p" size="7" className="text-center font-bold">
              Michael Blackson Emanuel
            </Text>

            <Badge size="2">Senior Software Engineer</Badge>
          </Flex>
          <Separator my="3" size="4" />
          {tags.map((tag) => (
            <ProfileCard key={tag} />
          ))}
        </Card>
        <Card>
          <ProfileTabs />
        </Card>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
