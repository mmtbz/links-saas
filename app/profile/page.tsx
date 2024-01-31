import { Avatar, Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <>
      <Box className="col-span-1 lg:col-span-2">
        <Flex gap="4" align="center">
          <Avatar fallback="DM" size="6" color="green" radius="full" />
          <button className="border py-1 px-3 border-solid border-[#145959] rounded-[10px]">
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
          <button className="p-2 px-4 bg-[#145959] text-white rounded-[10px]">
            Save Changes
          </button>
          <button className="py-2 px-4 border border-black rounded-[10px]">
            Cancel
          </button>
        </Flex>
        <button className="py-2 px-4 bg-[#C84545] text-white rounded-[10px]">
          Delete Account
        </button>
      </Flex>
    </>
  );
};

export default ProfilePage;
