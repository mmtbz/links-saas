import { Flex, Badge, Separator, Text, Avatar } from "@radix-ui/themes";
import React from "react";
import ProfileCard from "./ProfileCard";
import Image from "next/image";

interface Props {
  name: string;
  photo: string;
  title: string;
  location: string;
}

const ProfileMain = ({ name, photo, title, location }: Props) => {
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
      <Flex align="center" direction="column" gap="3" className="p-2">
        <Avatar
          src={photo}
          fallback="?"
          size="8"
          radius="small"
          className="cursor-pointer"
        />
        <Text as="p" size="7" className="text-center font-bold">
          {name}
        </Text>

        <Badge size="2">{title}</Badge>
      </Flex>
      <Separator my="3" size="4" />
      <ProfileCard value={location} prop="Location" />
    </div>
  );
};

export default ProfileMain;
