import prisma from "@/prisma/client";
import {
  Box,
  Container,
  Text,
  Grid,
  Separator,
  Flex,
  Avatar,
  Badge,
} from "@radix-ui/themes";
import React from "react";
import DialogBox from "../components/general/DialogBox";

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
                  <Flex gap="4">
                    <Avatar
                      fallback={"?"}
                      size="5"
                      radius="full"
                      src={user.image || ""}
                    />
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
                }
                title={"Hello"}
                content={
                  <>
                    <Text>{user.name} </Text> <br />
                  </>
                }
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
