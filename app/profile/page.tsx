import { Card, Grid } from "@radix-ui/themes";
import ProfileMain from "./ProfileMain";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
      <Card>
        <ProfileMain />
      </Card>
      <Card>
        <ProfileTabs />
      </Card>
    </Grid>
  );
};

export default ProfilePage;
