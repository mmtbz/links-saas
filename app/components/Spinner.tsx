import React from "react";
import SpinnerImg from "../../public/spinner-2.svg";
import Image from "next/image";
import { Text, Flex } from "@radix-ui/themes";

const Spinner = ({ header }: { header: String }) => {
  return (
    <Flex
      className="col-span-3 min-w-full"
      justify="center"
      direction="column"
      align="center"
      gap="4"
    >
      <Image src={SpinnerImg} alt="loading..." height={80} width={80} />
      <Text>Loading {header}, Please wait...</Text>
    </Flex>
  );
};

export default Spinner;
