import { Flex, Grid, Link, Text } from "@radix-ui/themes";
import Image from "next/image";
import Card from "../components/Card";

const AboutCompany = () => {
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <Flex gap="4" direction="column">
      <Card title="About Company">
        <Text className="block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, veniam
          error repudiandae eaque accusantium possimus hic esse, harum omnis
          nesciunt nam et quasi. Molestiae, sint quisquam. Aperiam ducimus sint
          velit.
        </Text>
        <Text className="block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, veniam
          error repudiandae eaque accusantium possimus hic esse, harum omnis
          nesciunt nam et quasi. Molestiae, sint quisquam. Aperiam ducimus sint
          velit.
        </Text>
      </Card>
      <Card title="Website">
        <Link color="orange" href="www.google.com">
          www.google.com
        </Link>
      </Card>

      <Card title="Industry" body="Internet Product" />
      <Card title="Employee Size" body="123200 Employees" />
      <Card title="Head Office" body="Mountain View, California, USA" />
      <Card title="Since" body="1980" />
      <Card
        title="Specialization"
        body="Search technology, Web computing, Software and Online advertising"
      />

      <Card title="Company Galery">
        <Grid
          gap="3"
          className="grid"
          columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          {images.map((img) => (
            <Image
              src={`https://source.unsplash.com/collection/190727/800x600?${img}`}
              height="800"
              width="1200"
              alt="Profile Picture"
              className="rounded-lg mt-1"
              key={img}
            />
          ))}
        </Grid>
      </Card>
    </Flex>
  );
};

export default AboutCompany;
