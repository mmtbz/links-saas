import React from "react";
import GoogleLogo from "../../../public/images/google.png";
import AirbnbLogo from "../../../public/images/abnb.png";
import MsftLogo from "../../../public/images/msft.png";
import SlackLogo from "../../../public/images/slack.png";
import { Container, Flex } from "@radix-ui/themes";
import Image from "next/image";

const CompaniesSection = () => {
  return (
    <Container className="px-3 lg:px-0">
      <div >
        <div className="text-center text-xl pb-6 pt-2">
          <p className="inline">Trusted by big and small</p>
          <p className="text-orange-400 inline font-bold"> Companies</p>
        </div>

        <Flex align="center" gap="2" justify="between" className="pb-6">
          <Image src={GoogleLogo} alt="google logo" height="80" width="80" />
          <Image src={MsftLogo} alt="Microsoft logo" height="110" width="110" />
          <Image src={SlackLogo} alt="Slack logo" height="80" width="80" />
          <Image src={AirbnbLogo} alt="Airbnb logo" height="80" width="80" />
        </Flex>
      </div>
    </Container>
  );
};

export default CompaniesSection;
