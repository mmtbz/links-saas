import { Card, Grid } from "@radix-ui/themes";
import ProfileMain from "./ProfileMain";
import ProfileTabs from "./ProfileTabs";
import Box from "../components/Box";

const ProfilePage = () => {
  return (
    <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
      <Box>
        <ProfileMain />
      </Box>
      <Box>
        <ProfileTabs />
      </Box>
    </Grid>
  );
};

export default ProfilePage;
