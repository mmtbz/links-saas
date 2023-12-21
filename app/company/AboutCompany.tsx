import { Box, Grid, Link, Text } from "@radix-ui/themes";
import Image from "next/image";
import Title from "../components/Title";

const AboutCompany = () => {
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Title title="About Company" />
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

      <Title title="Website" />
      <Link color="orange" href="www.google.com">
        www.google.com
      </Link>

      <Title title="Industry" />
      <Text className="block">Internet Product</Text>

      <Title title="Employee Size" />
      <Text className="block">123200 Employees</Text>

      <Title title="Head Office" />
      <Text className="block">Mountain View, California, USA</Text>

      <Title title="Since" />
      <Text className="block">1980</Text>

      <Title title="Specialization" />
      <Text className="block">
        Search technology, Web computing, Software and Online advertising
      </Text>

      <Title title="Company Galery" />
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
    </Box>
  );
};

export default AboutCompany;
