import { Box, Container, Flex, Text, TextField } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import RemoteWork from "../../../public/images/remote-working.png";
import Trending from "../../../public/svg/trending.svg";

const HeroSection = () => {
  return (
    <Flex direction="column">
      <div className="bg-[#145959] pt-5">
        <Container>
          <Flex justify="between" align="center" className="px-3 lg:px-0">
            <div className="mb-6 space-y-4">
              <div className="text-center lg:text-left capitalize font-extrabold lg:font-black text-[4.5rem] lg:text-[4.3rem] leading-[6.3rem] lg:leading-[5.3rem]  text-[#F5F5F5]">
                Hire best <br />
                candidates in
                <br />
                <Text>
                  <Typewriter
                    options={{
                      strings: [
                        "Africa",
                        "America",
                        "Asia",
                        "Europe",
                        "Australia",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Text>
              </div>

              <p className="font-normal text-base text-[#D5D5D5] leading-6  max-w-xl hidden lg:block">
                Find Your New Job Today! New Job Postings Everyday just for you,
                browse the job you want and apply wherever you want
              </p>
              <p className="text-lg pt-4 font-normal uppercase text-white  hidden lg:block">
                Trending keywords
              </p>
              <Box className="hidden lg:block">
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
                      className="hidden lg:block"
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
                      className=" hidden lg:block"
                    />
                  </Flex>
                  <Box className="hidden lg:block">
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
                        className=" hidden lg:block"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box className="hidden lg:block">
                <TextField.Root
                  className="mt-4 outline-none hidden lg:block"
                  radius="large"
                  size="3"
                >
                  <TextField.Slot>
                    <IoSearch size={24} />
                  </TextField.Slot>
                  <TextField.Input placeholder="Search talents…" />
                </TextField.Root>
              </Box>

              <Flex className="text-[#D5D5D5]" justify="between" align="center">
                <Text className="underline font-semibold">
                  Looking for a job instead?
                </Text>
                <Link
                  href={"/dashboard"}
                  className="px-4 py-2 bg-orange-400 rounded-[10px] text-black"
                >
                  Create account
                </Link>
              </Flex>
            </div>
            <Image
              src={RemoteWork}
              alt="business-woman"
              className="hidden lg:block"
            />
          </Flex>
        </Container>
      </div>
    </Flex>
  );
};

export default HeroSection;
