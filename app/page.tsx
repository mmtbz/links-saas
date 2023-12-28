import { Box, Grid, Separator } from "@radix-ui/themes";
import AddNewLink from "./components/AddNewLink";
import IphoneCanvas from "./components/IphoneCanvas";
import ProfileSection from "./components/ProfileSection";

export default function Home() {
  return (
    <Grid
      columns={{ initial: "2", md: "3" }}
      gap="3"
      width="auto"
      className="px-3"
    >
      <Box className="col-span-2 overflow-y-auto">
        <ProfileSection />
        <Separator my="3" size="4" />
        <AddNewLink />
      </Box>
      <IphoneCanvas />
    </Grid>
  );
}
