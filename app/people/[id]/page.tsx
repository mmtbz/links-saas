import ProfileMain from "@/app/profile/ProfileMain";
import ProfileTabs from "@/app/profile/ProfileTabs";
import { Box, Container, Grid } from "@radix-ui/themes";
import React from "react";

const PersonDetailsPage = () => {
  return (
    <Container>
      <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
        <Box className="bg-white bg-opacity-40 rounded-[5px]">
          <ProfileMain />
        </Box>
        <Box className="bg-white bg-opacity-40 rounded-[5px]">
          <ProfileTabs />
        </Box>
      </Grid>
    </Container>
  );
};

export default PersonDetailsPage;
