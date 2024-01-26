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
            <>
              <DialogBox
                trigger={
                  <PeopleListItem
                    id={""}
                    name={user.name}
                    email={null}
                    hashedPassword={null}
                    emailVerified={null}
                    image={user.image}
                    role={"JOB_SEEKER"}
                    active={true}
                  />
                }
                title={user.name || "User"}
                content={<PersonDescription />}
              />
              <Separator size="4" className="my-3" />
            </>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PeoplePage;

const PeopleListItem = (user: User) => {
  return (
    <Flex gap="4" className=" hover:cursor-pointer">
      <Avatar fallback={"?"} size="5" radius="full" src={user.image || ""} />
      <Box>
        <Flex direction="column">
          <Flex gap="3">
            <Text size="5" className="font-bold">
              {user.name}
            </Text>
            <Badge color="green" className="capitalize">
              Open for project
            </Badge>
          </Flex>

          <Text> Kigali, Rwanda</Text>
          <Flex gap="2">
            <Badge color="red">Java</Badge>
            <Badge>Python</Badge>
            <Badge color="blue">HTML</Badge>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

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
