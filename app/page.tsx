import {
  Box,
  Grid,
  ScrollArea,
  Separator
} from "@radix-ui/themes";
import AddNewLink from "./components/AddNewLink";
import IphoneCanvas from "./components/IphoneCanvas";
import ProfileSection from "./components/ProfileSection";

export default function Home() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <Grid
      columns={{ initial: "2", md: "3" }}
      gap="3"
      width="auto"
      className="px-3"
    >
      <Box className="col-span-2">
        {isMobile ? (
          <Box>
            <ProfileSection />
            <Separator my="3" size="4" />
            <AddNewLink />
          </Box>
        ) : (
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: "100vh", padding: "2rem" }}
            size="2"
            className=""
          >
            <ProfileSection />
            <Separator my="3" size="4" />
            <AddNewLink />
            {/* <Separator my="3" size="4" />
          <AddNewLink />
          <Separator my="3" size="4" />
          <AddNewLink />
          <Separator my="3" size="4" />
          <AddNewLink />
          <Separator my="3" size="4" />
          <AddNewLink />
          <Separator my="3" size="4" />
          <AddNewLink /> */}
          </ScrollArea>
        )}
      </Box>
      <IphoneCanvas />
    </Grid>
  );
}
