import { Badge, Flex, Grid, Text } from "@radix-ui/themes";
import Card from "../components/Card";
import Testimonial from "./Testimonial";
import { Skill } from "@prisma/client";

interface Props {
  about: string;
  skills: Skill[];
}

type Testimonial = {
  testimonial: string;
  name: string;
  photo: string;
};

const AboutTab = ({ about, skills }: Props) => {
  // const skills: Skill[] = [
  //   {
  //     skill: "java",
  //     color: "teal",
  //   },
  //   {
  //     skill: "HTML",
  //     color: "red",
  //   },
  //   {
  //     skill: "spring boot",
  //     color: "yellow",
  //   },
  //   {
  //     skill: "python",
  //     color: "blue",
  //   },
  // ];

  const testimonials: Testimonial[] = [
    {
      testimonial: "he is a good dev",
      name: "Peter Parker",
      photo: "https://randomuser.me/api/portraits/men/70.jpg",
    },

    {
      testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      name: "Igiraneza Emmanuel",
      photo: "https://randomuser.me/api/portraits/men/70.jpg",
    },
  ];

  return (
    <Flex gap="2" direction="column">
      <Flex className="bg-white p-2 rounded-[5px] bg-opacity-25 border border-black">
        <span className="text-lg leading-7">{about}</span>
      </Flex>

      <Card title="Skills">
        <Flex gap="2">
          {skills.map((skill) => (
            <Badge size="2" color="red" key={skill.id} className="capitalize">
              {skill.name}
            </Badge>
          ))}
        </Flex>
      </Card>

      <Card title="Testimonials">
        <Grid
          gap="3"
          className="grid"
          columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              testimonial={testimonial.testimonial}
              photo={testimonial.photo}
              name={testimonial.name}
            />
          ))}
        </Grid>
      </Card>
    </Flex>
  );
};

export default AboutTab;
