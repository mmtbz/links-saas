import React, { ReactNode } from "react";
import { Box as ReadixBox, Text } from "@radix-ui/themes";
import Title from "./Title";

interface props {
  children?: ReactNode;
  title?: string;
  body?: string;
}

const Card = ({ children, title, body }: props) => {
  return (
    <ReadixBox className="bg-white sm:rounded-xl shadow-sm p-2">
      <Title title={title} />
      {body && <Text className="block">{body}</Text>}
      {children && children}
    </ReadixBox>
  );
};

export default Card;
