import prisma from "@/prisma/client";
import { User } from "@prisma/client";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Separator,
  Text,
} from "@radix-ui/themes";
import DialogBox from "../components/general/DialogBox";
import ProfileMain from "../profile/ProfileMain";
import ProfileTabs from "../profile/ProfileTabs";
import PeopleListItem from "./_components/PeopleListItem";

const PeoplePage = async () => {
  const users = await prisma.user.findMany();

  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Talents
        </Text>
        <Box className="mt-3">
          {users.map((user) => (
            <Box key={user.id}>
              <DialogBox
                trigger={
                  <PeopleListItem
                    profileId={user.userProfileId!}
                    userId={user.id}
                    image={user.image || ""}
                    name={user.name || ""}
                  />
                }
                title={user.name || "User"}
                content={<PersonDescription />}
              />
              <Separator size="4" className="my-3" />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PeoplePage;

const PersonDescription = () => {
  return (
    <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
      <Box className="bg-white bg-opacity-40 rounded-[5px]">
        <ProfileMain />
      </Box>
      <Box className="bg-white bg-opacity-40 rounded-[5px]">
        <ProfileTabs />
      </Box>
    </Grid>
  );
};
