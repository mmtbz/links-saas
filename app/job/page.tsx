"use client";
import { Card, Grid, Separator, Text, TextField } from "@radix-ui/themes";
import Title from "../components/Title";

const JobPage = () => {
  return (
    <Card>
      <Title title="Site Reliability Engineer - Platforms" />
      <Text>Dallas, Texas</Text>
      <Text className="block">Engineering /Full-Time/ On-Site</Text>
      <Separator mt="4" size="4" mb="4" />
      <Text>Submit your Application</Text>
      <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
        <Text>Resume/CV</Text>
        <input type="file" placeholder="attach resume/cv" />
        <Text>First Name</Text>
        <TextField.Root>
          <TextField.Input placeholder="First Name" />
        </TextField.Root>
        <Text>Last Name</Text>
        <TextField.Root>
          <TextField.Input placeholder="Last Name" />
        </TextField.Root>
      </Grid>
    </Card>
  );
};

export default JobPage;
