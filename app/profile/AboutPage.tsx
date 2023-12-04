import { Badge, Box, Flex, Text, Grid } from "@radix-ui/themes";
import React from "react";
import Testimonial from "./Testimonial";
import ProfileTitle from "./ProfileTitle";

type Skill = {
  skill: string;
  color: string;
};

type Testimonial = {
  testimonial: string;
  name: string;
  photo: string;
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

  const testimonials: Testimonial[] = [
    {
      testimonial: "he is a good dev",
      name: "Peter Parker",
      photo: "https://randomuser.me/api/portraits/men/70.jpg",
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
        <ProfileTitle title="Skills" />
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
        <ProfileTitle title="Testimonials" />
      </Box>
      <Grid gap="3" className="grid" columns="repeat(3, 1fr)">
        {testimonials.map((testimonial) => (
          <Testimonial
            testimonial={testimonial.testimonial}
            photo={testimonial.photo}
            name={testimonial.name}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default AboutPage;
