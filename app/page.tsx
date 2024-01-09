"use client";
import { Container, Grid, Text, Box, TextField } from "@radix-ui/themes";
import Image from "next/image";
import WomanImage from "../public/images/businesswoman.png";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-[#FFF5EC]">
      <Container className="px-2 lg:px-0">
        <Grid columns={{ sm: "1", md: "2" }}>
          <div className="font-extrabold text-5xl">
            <Text className=" text-[#16171C] block">Hire best candidates</Text>
            <Box>
              <Text>in </Text>
              <Text className="text-[#F2994A]">Africa</Text>
            </Box>

            <p className="font-normal text-base text-[#4F4F4F] leading-6 pt-5">
              Find You New Job Today! New Job Postings Everyday just for you,
              browse the job you want and apply wherever you want
            </p>
            <p className="text-[#333333] text-2xl pt-4">Trending keywords:</p>
            <p className="text-[#F2994A] text-2xl pt-4 font-black">
              Web Developer | UI/UX Engineer | Frontend
            </p>
            <TextField.Root className="mt-4" radius="full" size="3">
              <TextField.Slot>
                <IoSearch size={24} />
              </TextField.Slot>
              <TextField.Input placeholder="Search talents…" />
            </TextField.Root>
          </div>
          <Image src={WomanImage} alt="business-woman" />
        </Grid>
      </Container>
    </div>
  );
}
