import { Flex, Badge, Separator, Text } from "@radix-ui/themes";
import React from "react";
import ProfileCard from "./ProfileCard";
import Image from "next/image";

const ProfileMain = () => {
  const tags = [
    {
      prop: "Location",
      value: "San Francisco, CA",
    },

    {
      prop: "Time",
      value: "11:55 AM ",
    },
  ];
  return (
    <div className="max-h-screen">
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
        <ProfileCard key={tag.prop} value={tag.value} prop={tag.prop} />
      ))}
    </div>
  );
};

export default ProfileMain;
