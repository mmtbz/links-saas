import React, { ReactNode } from "react";
import { Box as ReadixBox } from "@radix-ui/themes";

interface props {
  children: ReactNode;
  className: string;
}

const Box = ({ children, className }: props) => {
  return (
    <ReadixBox className={`${className} rounded-xl shadow-sm p-2`}>
      {children}
    </ReadixBox>
  );
};

export default Box;
