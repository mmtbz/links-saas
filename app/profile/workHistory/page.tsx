import { Box, Checkbox, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const WorkHistoryPage = () => {
  return (
    <>
      <Box className="col-span-1 lg:col-span-2">
        <Flex
          className="border py-1 px-3 border-solid border-[#145959] text-[#145959] rounded-[10px] hover:cursor-pointer mx-8"
          align="center"
          justify="center"
          gap="1"
        >
          <FiPlus />

          <Text>Add work record</Text>
        </Flex>
        <form>
          <Flex direction="column" gap="4" className="my-4">
            <Flex direction="column" gap="2">
              <Text>Title</Text>
              <input
                className="border border-solid py-2 px-4 rounded-[10px] outline-none"
                placeholder="Ex: Sr Software Engineer"
              />
            </Flex>
            <Flex direction="column" gap="2">
              <Text>Company Name</Text>
              <input
                className="border border-solid py-2 px-4 rounded-[10px] outline-none"
                placeholder="Ex: Google"
              />
            </Flex>
            <Flex direction="column" gap="2">
              <Text>Description</Text>
              <textarea className="border border-solid py-2 px-4 rounded-[10px] " />
            </Flex>
            <Flex direction="column" gap="2">
              <Text>Location</Text>
              <input
                className="border border-solid py-2 px-4 rounded-[10px] outline-none"
                placeholder="Ex: United States"
              />
            </Flex>
            <Flex gap="2" align="center">
              <Checkbox defaultChecked size="3" color="cyan" />
              <Text>I am currently working in this position</Text>
            </Flex>

            <Flex direction="column" gap="2">
              <Text>Start Date</Text>
              <Flex gap="4">
                <select
                  className="flex-1 border border-solid py-2 px-4 rounded-[10px] outline-none"
                  placeholder="Month"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <select
                  className="flex-1 border border-solid py-2 px-4 rounded-[10px] outline-none"
                  placeholder="Year"
                >
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </Flex>
            </Flex>
            <Flex direction="column" gap="2">
              <Text>End Date</Text>
              <Flex gap="4">
                <select
                  className="flex-1 border border-solid py-2 px-4 rounded-[10px] outline-none"
                  placeholder="Month"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <select
                  className="flex-1 border border-solid py-2 px-4 rounded-[10px] outline-none"
                  placeholder="Year"
                >
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </Flex>
            </Flex>
          </Flex>
        </form>
      </Box>
      <Flex className="col-span-1 lg:col-span-3" justify="between">
        <button className="p-2 bg-[#145959] text-white rounded-[10px]">
          Save Changes
        </button>
        <button className="py-2 px-6 border border-black rounded-[10px]">
          Cancel
        </button>
      </Flex>
    </>
  );
};

export default WorkHistoryPage;
