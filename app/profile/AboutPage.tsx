import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import React from "react";

type Skill = {
  skill: string;
  color: string;
};

const AboutPage = () => {
  const skills: Skill[] = [
    {
      skill: "java",
      color: "teal",
    },
    {
      skill: "HTML",
      color: "red",
    },
    {
      skill: "spring boot",
      color: "yellow",
    },
    {
      skill: "python",
      color: "blue",
    },
  ];

  return (
    <Flex gap="2" direction="column">
      <Flex>
        <Text>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. My job is to
          build your website so that it is functional and user-friendly but at
          the same time attractive. Moreover, I add personal touch to your
          product and make sure that is eye-catching and easy to use. My aim is
          to bring across your message and identity in the most creative way. I
          created web design for many famous brand companies.
        </Text>
      </Flex>
      <Box>
        <Text>Skills</Text>
      </Box>

      <Flex gap="2">
        {skills.map((skill) => (
          <Badge
            size="2"
            color={skill.color as any}
            key={skill.skill}
            className="capitalize"
          >
            {skill.skill}
          </Badge>
        ))}
      </Flex>

      <Box>
        <Text>Testimonials</Text>
      </Box>
    </Flex>
  );
};

export default AboutPage;
