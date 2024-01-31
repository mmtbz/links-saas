import { Avatar, Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";

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
        <Flex
          className="col-span-1 hidden lg:block font-semibold"
          gap="3"
          direction="column"
        >
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
        <Box className="col-span-1 lg:col-span-3">
          <Grid
            columns={{ sm: "1", lg: "3" }}
            className="grid-cols-1 lg:grid-cols-3"
            gap="4"
          >
            <Box className="col-span-1 lg:col-span-2">
              <Flex gap="4" align="center">
                <Avatar fallback="DM" size="6" color="green" radius="full" />
                <button className=" border py-1 px-3 border-solid border-[#145959] rounded-[10px]">
                  Update
                </button>
                <Flex align="center" gap="1">
                  <FaRegTrashAlt />
                  <Text>Remove</Text>
                </Flex>
              </Flex>
              <form>
                <Flex direction="column" gap="4" className="my-4">
                  <Flex direction="column" gap="2">
                    <Text>Name</Text>
                    <input className="border border-solid py-2 px-4 rounded-[10px] " />
                  </Flex>
                  <Flex direction="column" gap="2">
                    <Text>Description</Text>
                    <textarea className="border border-solid py-2 px-4 rounded-[10px] " />
                  </Flex>
                  <Flex direction="column" gap="2">
                    <Text>Language</Text>
                    <select className="border border-solid py-2 px-4 rounded-[10px]">
                      <option>English</option>
                    </select>
                  </Flex>
                  <Flex direction="column" gap="2">
                    <Text>Country</Text>
                    <select className="border border-solid py-2 px-4 rounded-[10px]">
                      <option>United States</option>
                      <option>Rwanda</option>
                    </select>
                  </Flex>
                  <Flex direction="column" gap="2">
                    <Flex justify="between">
                      <Text>Timezone</Text>
                      <Text>Current Time: 01:30pm</Text>
                    </Flex>

                    <select className="border border-solid py-2 px-4 rounded-[10px]">
                      <option>Central TIme US & Canada</option>
                      <option>Rwanda</option>
                    </select>
                  </Flex>
                </Flex>
              </form>
            </Box>
            <Flex className="col-span-1 lg:col-span-3" justify="between">
              <Flex gap="3">
                <button className="p-2 bg-[#145959] text-white rounded-[10px]">Save Changes</button>
                <button className="p-2 border border-black rounded-[10px]">Cancel</button>
              </Flex>
              <button className="p-2 bg-[#C84545] text-white rounded-[10px]">Delete Account</button>
            </Flex>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
