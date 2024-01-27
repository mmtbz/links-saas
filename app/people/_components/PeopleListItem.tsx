"use client";
import { Skill } from "@prisma/client";
import { Avatar, Badge, Box, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

interface Props {
  profileId: number;
  userId: string;
  image: string;
  name: string;
  skills: Skill[];
}

const PeopleListItem = (user: Props) => {
  const router = useRouter();

  return (
    <Flex
      gap="4"
      className=" hover:cursor-pointer"
      align="center"
      justify="between"
      onClick={() => router.push("/people/" + user.profileId)}
    >
      <Flex gap="4">
        <Avatar fallback={"?"} size="5" radius="full" src={user.image || ""} />
        <Box>
          <Flex direction="column" gap="3">
            <Box>
              <Flex gap="3">
                <Text size="5" className="font-bold">
                  {user.name}
                </Text>
                <Badge color="green" className="capitalize">
                  Open for project
                </Badge>
              </Flex>

              <Text> Kigali, Rwanda</Text>
            </Box>
            <Flex gap="2">
              {user.skills.map((skill) => (
                <Badge color="red" key={skill.id}>
                  {skill.name}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <FaAngleRight size={36} color="#145959" />
    </Flex>
  );
};

export default PeopleListItem;
