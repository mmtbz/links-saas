import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import GoogleLogo from "../../../public/images/google.png";

const PostCard = () => {
  return (
    <Card>
      <Flex gap="2" align="center">
        <Image
          src={GoogleLogo}
          height="100"
          width="100"
          alt="Company Picture"
          className="rounded-full mt-3 object-cover"
        />
        <Flex direction="column">
          <Text as="p" size="5" className="font-bold">
            Google Inc.
          </Text>
          <Flex align="center" gap="1" className="color-gray">
            <IoMdTime />
            <Text as="span" className="font-extralight">
              21 minutes ago
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          aspernatur consectetur. Qui quidem vel incidunt quod deserunt...{" "}
          <Button variant="ghost" color="orange" className="hover:bg-none">
            Read more.
          </Button>
        </Text>
      </Box>

      <Image
        src={`https://source.unsplash.com/collection/190727/800x600?8`}
        height="400"
        width="1200"
        alt="Profile Picture"
        className="rounded-3xl mt-4 object-cover"
      />

      <Text className="font-bold block" size="5" mt="4">
        What's it like to work at Google?
      </Text>
      <Text className="font-extralight block" size="3" mt="1">
        Youtube.com
      </Text>
      <Flex justify="between" mt="4">
        <Flex gap="4">
          <Button variant="ghost">
            <CiHeart size={24} /> 3
          </Button>
          <Button variant="ghost">
            <GoComment size={24} /> 10
          </Button>
        </Flex>
        <Button variant="ghost">
          <PiShareFatLight size={24} /> 2
        </Button>
      </Flex>
    </Card>
  );
};

export default PostCard;
