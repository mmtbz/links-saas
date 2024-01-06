import { Badge, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaFlagUsa } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const ProfileMainExp = () => {
  return (
    <div>
      <Flex gap="3" className="px-2">
        <Image
          src="https://randomuser.me/api/portraits/men/75.jpg"
          height="120"
          width="120"
          alt="Profile Picture"
          className="rounded-full my-2"
        />

        <Flex direction="column" gap="3">
        <Flex direction="column">
          <Text>Current Project</Text>
          <Text>Mobile Tracking at Yumm Tech</Text>
          </Flex>
          <FaFlagUsa />
          <Flex align="center" gap="3">
            <FaChartLine /> <Text>87%</Text>
          </Flex>
        </Flex>
      </Flex>
      <Text as="p" size="7" className="text-center font-bold">
        Michael Blackson Emanuel
      </Text>

      <Badge size="2">Senior Software Engineer</Badge>
    </div>
  );
};

export default ProfileMainExp;
