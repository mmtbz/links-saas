"use client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { useProfileStore, useUrlStore } from "../store";
import PublicLink from "./PublicLink";

const PublicProfile = () => {
  const { urls } = useUrlStore();
  const { profile } = useProfileStore();

  return (
    <Grid gap="3">
      <Flex direction="column" gap="3">
        {profile.photoUrl && (
          <Box className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <Image
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              height={150}
              width={150}
              alt="profile picture"
              className="h-full w-full object-cover"
            />
          </Box>
        )}

        <Box className="text-center">
          <Text className="text-2xl font-bold mt-4 text-slate-800">
            {profile.name}
          </Text>
          <Text className="block font-light text-medium">
            {profile.description}
          </Text>
        </Box>
      </Flex>
      <Flex gap="2" justify="center">
        <CiLinkedin size={36} />
        <FaTwitter size={36} />
      </Flex>

      <Flex direction="column">
        {urls.map((url) => (
          <PublicLink
            key={url.id}
            label={url.label}
            link={url.link}
            id={url.id}
          />
        ))}
      </Flex>
    </Grid>
  );
};

export default PublicProfile;
