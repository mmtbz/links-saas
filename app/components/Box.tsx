import React, { ReactNode } from "react";
import { Box as ReadixBox } from "@radix-ui/themes";

const Box = ({ children }: { children: ReactNode }) => {
  return (
    <ReadixBox className="bg-white rounded-xl shadow-sm p-2">{children}</ReadixBox>
  );
};

export default Box;
