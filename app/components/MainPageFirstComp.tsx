import { Container, Grid, Flex, Box, TextField, Text } from "@radix-ui/themes";
import Image from "next/image";
import WomanImage from "../../public/images/businesswoman.png";
import GoogleLogo from "../public/images/goog.png";
import AirbnbLogo from "../public/images/abnb.png";
import MsftLogo from "../public/images/msft.png";
import SlackLogo from "../public/images/slack.png";
import { IoSearch } from "react-icons/io5";
import Trending from "../../public/svg/trending.svg";

const MainPageFirstComp = () => {
  return (
    <Flex direction="column">
      <div className="bg-[#145959] pt-5">
        <Container>
          <Grid
            columns={{ sm: "1", md: "2" }}
            gap="5"
            justify="center"
            align="center"
            className="px-3"
          >
            <div className="font-extrabold text-6xl leading-[5rem] lg:leading-[4rem] mb-6">
              <div className="relative pt-[3rem]">
                <div className="uppercase font-bold text-[10rem] text-black lg:text-[15rem] opacity-20 ">
                  FIND
                </div>
                <div className="capitalize font-extrabold lg:font-black text-[3.3rem] lg:text-[4.3rem] leading-[3.3rem] lg:leading-[4.3rem] absolute top-[1rem] lg:top-[-1.5rem] left-[0rem] text-[#F5F5F5]">
                  Hire the best <br />
                  candidates in <br />
                  Africa
                </div>
              </div>

              <p className="font-normal text-base text-[#D5D5D5] leading-6 pt-[4rem] lg:pt-[5rem] max-w-xl">
                Find Your New Job Today! New Job Postings Everyday just for you,
                browse the job you want and apply wherever you want
              </p>
              <p className="text-lg pt-4 font-normal uppercase text-white">
                Trending keywords
              </p>
              <Flex gap="4" className="mt-5">
                <Flex
                  align="center"
                  className="text-white font-normal text-xs uppercase px-4 py-2 bg-white bg-opacity-[0.06] rounded-full gap-3"
                >
                  <Text>Frontend</Text>
                  <Image
                    src={Trending}
                    alt="My Happy SVG"
                    priority={false}
                    height={20}
                    width={20}
                  />
                </Flex>
                <Flex
                  align="center"
                  className="text-white font-normal text-xs uppercase px-4 py-2 bg-white bg-opacity-[0.06] rounded-full gap-3"
                >
                  <Text>Java developer</Text>
                  <Image
                    src={Trending}
                    alt="My Happy SVG"
                    priority={false}
                    height={20}
                    width={20}
                  />
                </Flex>
                <Flex
                  align="center"
                  className="text-white font-normal text-xs uppercase px-4 py-2 bg-white bg-opacity-[0.06] rounded-full gap-1"
                >
                  <Text>Salesforce developer</Text>
                  <Image
                    src={Trending}
                    alt="My Happy SVG"
                    priority={false}
                    height={20}
                    width={20}
                  />
                </Flex>
              </Flex>
              <TextField.Root className="mt-4 " radius="large" size="3">
                <TextField.Slot>
                  <IoSearch size={24} />
                </TextField.Slot>
                <TextField.Input placeholder="Search talents…" />
              </TextField.Root>
            </div>
            <Image
              src={WomanImage}
              alt="business-woman"
              height={150}
              width={150}
              className="hidden lg:block"
            />
          </Grid>
        </Container>
      </div>
    </Flex>
  );
};

export default MainPageFirstComp;
