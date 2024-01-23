import prisma from "@/prisma/client";
import { Box, Container, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import CompanyCard from "./CompanyCard";

const CompanyPage = async () => {
  const companies = await prisma.company.findMany();

  console.log(companies);
  return (
    <Container>
      <Box className="mt-4 px-3 lg:px-0">
        <Text size="6" className="font-semibold">
          Companies
        </Text>
        <Grid
          gap="3"
          className="grid mt-4"
          columns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {companies.map((company) => (
            <Link href={"/companies/" + company.id} key={company.id}>
              <CompanyCard
                name={company.name}
                descrption={company.description}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyPage;
