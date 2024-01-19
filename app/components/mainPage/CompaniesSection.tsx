import React from "react";
import GoogleLogo from "../../../public/images/google.png";
import AirbnbLogo from "../../../public/images/abnb.png";
import MsftLogo from "../../../public/images/msft.png";
import SlackLogo from "../../../public/images/slack.png";
import { Box, Container, Flex } from "@radix-ui/themes";
import Image from "next/image";

const CompaniesSection = () => {
  return (
    <Container className="px-3 lg:px-0">
      <div >
        <Box className="relative text-center py-5">
          <Box className="uppercase font-bold text-7xl lg:text-8xl opacity-10">
            Trusted
          </Box>
          <Box className=" max-w-[30rem] lg:max-w-none leading-[1.8rem] capitalize font-bold text-3xl lg:text-4xl absolute top-[1.8rem] lg:top-[2.8rem] left-[1rem] lg:left-[18rem] text-center">
            <p className="inline text-[#004b4b]">Trusted by big and small</p>
            <p className="text-orange-400 inline font-bold"> Companies</p>
          </Box>
        </Box>

        <Flex align="center" gap="2" justify="between" className="pb-6">
          <Image src={GoogleLogo} alt="google logo" height="40" width="40" />
          <Image src={MsftLogo} alt="Microsoft logo" height="110" width="110" />
          <Image src={SlackLogo} alt="Slack logo" height="80" width="80" />
          <Image src={AirbnbLogo} alt="Airbnb logo" height="80" width="80" />
        </Flex>
      </div>
    </Container>
  );
};

export default CompaniesSection;
