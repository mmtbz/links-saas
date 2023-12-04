"use client";
import { Card, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { useProfileStore } from "../store";

const ProfileSection = () => {
  const { profile, setDescription, setName, setPhotoUrl } = useProfileStore();

  return (
    <Card>
      <Flex direction="column" gap="2">
        <Flex direction="column" gap="1">
          <Text className="font-bold text-headings block">Profile</Text>
          <Text className="block font-light text-sm">
            Some public information about you
          </Text>
        </Flex>
        <TextField.Root>
          <TextField.Slot>Name</TextField.Slot>
          <TextField.Input
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </TextField.Root>

        <TextArea
          placeholder="Enter your Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <TextField.Root>
          <TextField.Slot>Photo Url</TextField.Slot>
          <TextField.Input
            placeholder="Enter your photo url"
            onChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
          />
        </TextField.Root>
      </Flex>
    </Card>
  );
};

export default ProfileSection;
