import prisma from "@/prisma/client";
import { Container } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import CompanyPage from "../companyDetail";

interface Props {
  params: { id: string };
}

const CompanyPageDetails = async ({ params }: Props) => {
  const company = await prisma.company.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!company) return notFound;

  return (
    <Container>
        <CompanyPage />
    </Container>
  );
};

export default CompanyPageDetails;
