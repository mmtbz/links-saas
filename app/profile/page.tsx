import { Card, Container, Grid } from "@radix-ui/themes";
import ProfileMain from "./ProfileMain";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  return (
    <Container className="p-2 sm:p-5 md:p-8 lg:p-10 xl:p-12">
      <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
        <Card>
          <ProfileMain />
        </Card>
        <Card>
          <ProfileTabs />
        </Card>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
