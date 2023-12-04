import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

type Props = {
  testimonial: string;
  name: string;
  photo: string;
};

const Testimonial = ({ testimonial, name, photo }: Props) => {
  return (
    <Box className="relative border-[1px] min-h-[100px] mt-5 rounded-2xl border-red">
      <Image
        src={photo}
        alt={"tesimonial user"}
        height={80}
        width={80}
        className="absolute rounded-2xl -top-8 left-4"
      />
      <Text className="absolute left-[6.5rem] top-[1.5rem] text-xl font-bold">
        {name}
      </Text>

      <Box className="mt-[3.5rem] ml-4">{testimonial}</Box>
    </Box>
  );
};

export default Testimonial;
