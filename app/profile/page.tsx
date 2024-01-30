"use client";
import { Flex, Grid, Switch, Text } from "@radix-ui/themes";
import { useState } from "react";
import Box from "../components/Box";
import ProfileMain from "./ProfileMain";
import ProfileTabs from "./ProfileTabs";
import ProfileMainExp from "./ProfileMainExp";

const ProfilePage = () => {
  const [showNewProfile, setShowNewProfile] = useState(true);
  return (
    <>
      <Flex align="center" gap="3" mb="3">
        <Switch
          onCheckedChange={() => setShowNewProfile(!showNewProfile)}
          defaultChecked
        />
        <Text> Switch Profiles</Text>
      </Flex>

      <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
        <Box className="bg-white">
          {showNewProfile ? (
            <ProfileMainExp />
          ) : (
            <ProfileMain name={""} photo={""} title={""} location={""} />
          )}
        </Box>
        <Box className="inherit">
          <ProfileTabs about={""} skills={[]} />
        </Box>
      </Grid>
    </>
  );
};

export default ProfilePage;
