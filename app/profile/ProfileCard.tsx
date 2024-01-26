import { Badge, Flex, Text } from "@radix-ui/themes";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  prop: string;
  value: string;
}

const ProfileCard = ({ prop, value }: Props) => {
  return (
    <Flex gap="2" className="m-4">
      {/* <Flex align="center" justify="center" className="bg-slate-900">
        <FaLocationDot />
      </Flex> */}
      <Badge className="flex items-center p-2 bg-red-500 rounded-full" size="2">
        <FaLocationDot />
      </Badge>
      <Flex direction="column">
        <Text className="uppercase text-xs">{prop}</Text>
        <Text className="font-semibold">{value}</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
