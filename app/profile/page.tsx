import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";

const ProfilePage = () => {
  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text
          size="6"
          className="font-semibold bg-gradient-to-r from-teal-500 to-green-700 text-transparent bg-clip-text"
        >
          Profile & Resume
        </Text>
      </Box>
      <Grid
        columns={{ sm: "1", lg: "4" }}
        className="grid-cols-1 lg:grid-cols-4 py-4 px-3 lg:px-0"
        gap="4"
      >
        <Flex className="col-span-1 hidden lg:block font-semibold" gap="3" direction="column">
          <Box className="text-[#145959] hover:bg-[#19948c30] py-2 rounded-[5px]">
            <Text>Profile</Text>
          </Box>
          <Box className="text-[#145959] hover:bg-[#19948c30] py-2 rounded-[5px]">
            <Text>Work History</Text>
          </Box>
          <Box className="text-[#145959] hover:bg-[#19948c30] py-2 rounded-[5px]">
            <Text>Education History</Text>
          </Box>
          <Box className="text-[#145959] hover:bg-[#19948c30] py-2 rounded-[5px]">
            <Text>Resume Template</Text>
          </Box>
        </Flex>
        <Box className="col-span-1 lg:col-span-3"></Box>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
