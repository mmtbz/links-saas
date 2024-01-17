"use client";
import { Container, Grid, Flex, Box, TextField, Text } from "@radix-ui/themes";
import Image from "next/image";
import WomanImage from "../public/images/businesswoman.png";
import GoogleLogo from "../public/images/goog.png";
import AirbnbLogo from "../public/images/abnb.png";
import MsftLogo from "../public/images/msft.png";
import SlackLogo from "../public/images/slack.png";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <Flex direction="column">
      <div className="bg-[#145959]">
        <Container className="">
          <Grid
            columns={{ sm: "1", md: "2" }}
            gap="5"
            justify="center"
            align="center"
            className="border-solid border-l border-b border-r border-black border-collapse p-2 mx-2 lg:mx-0"
          >
            <div className="font-extrabold text-6xl leading-[5rem] lg:leading-[4rem] mb-6">
              <div className="relative pt-[3rem]">
                <div className="uppercase font-bold text-[10rem] lg:text-[15rem] opacity-10 ">
                  FIND
                </div>
                <div className="capitalize font-extrabold lg:font-black text-[3.3rem] lg:text-[4.3rem] leading-[3.3rem] lg:leading-[4.3rem] absolute top-[1rem] lg:top-[-1.5rem] left-[0rem] text-[#F5F5F5]">
                  Hire the best <br />
                  candidates in <br />
                  Africa
                </div>
              </div>

              <p className="font-normal text-base text-[#4F4F4F] leading-6 pt-[3rem] lg:pt-[5rem] max-w-xl">
                Find You New Job Today! New Job Postings Everyday just for you,
                browse the job you want and apply wherever you want
              </p>
              <p className="text-[#333333] text-2xl pt-4 font-extrabold">
                Trending keywords:
              </p>
              <p className="text-[#F2994A] text-base pt-4 font-black">
                Web Developer | UI/UX Engineer | Frontend
              </p>
              <TextField.Root className="mt-4" radius="full" size="3">
                <TextField.Slot>
                  <IoSearch size={24} />
                </TextField.Slot>
                <TextField.Input placeholder="Search talents…" />
              </TextField.Root>
            </div>
            <Image
              src={WomanImage}
              alt="business-woman"
              className="hidden lg:block"
            />
          </Grid>
        </Container>
      </div>
    </Flex>
  );
}
