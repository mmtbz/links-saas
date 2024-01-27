import prisma from "@/prisma/client";
import { Box, Container, Separator, Text } from "@radix-ui/themes";
import PeopleListItem from "./_components/PeopleListItem";

const PeoplePage = async () => {
  const users = await prisma.user.findMany({ include: { skills: true } });

  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Talents
        </Text>
        <Box className="mt-3">
          {users.map((user) => (
            <Box key={user.id}>
              <PeopleListItem
                profileId={user.userProfileId!}
                userId={user.id}
                image={user.image || ""}
                name={user.name || ""}
                skills={user.skills || []}
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

// const PersonDescription = () => {
//   return (
//     <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
//       <Box className="bg-white bg-opacity-40 rounded-[5px]">
//         <ProfileMain />
//       </Box>
//       <Box className="bg-white bg-opacity-40 rounded-[5px]">
//         <ProfileTabs />
//       </Box>
//     </Grid>
//   );
// };
