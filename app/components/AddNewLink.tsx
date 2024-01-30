"use client";
import { Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUrlStore } from "../store";

const AddNewLink = () => {
  const [url, setUrl] = useState("");
  const { urls, addUrl, setLabel } = useUrlStore();

  const handleAddUrl = () => {
    const newUrl = {
      id: urls.length + 1,
      label: "New Label",
      link: "https://example.com",
    };
    addUrl(newUrl);
  };

  return (
    <Card>
      <Flex gap="2" direction="column">
        <Flex direction="column" gap="1">
          <Text className="font-bold text-headings block">Link</Text>
          <Text className="block font-light text-sm">Add new link here</Text>
        </Flex>
        <TextField.Root>
          <TextField.Slot>Label</TextField.Slot>
          <TextField.Input placeholder="Enter link label" />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>https://</TextField.Slot>
          <TextField.Input
            placeholder="Enter link"
            onInput={(e) => setUrl((e.target as HTMLInputElement).value)}
          />
        </TextField.Root>
      </Flex>

      <Flex justify="end" className="mt-2" align="center" gap="3">
        <Button onClick={handleAddUrl}>Add URL</Button>

        <Button variant="ghost">
          <AiOutlineClose /> Delete
        </Button>
      </Flex>
    </Card>
  );
};

export default AddNewLink;
