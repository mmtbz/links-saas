"use client";
import { AlertDialog, Flex } from "@radix-ui/themes";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  trigger: ReactNode;
  title: string;
  content: ReactNode;
}

const DialogBox = ({ trigger, title, content }: Props) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Content
        style={{
          maxWidth: 1280,
          backgroundColor: "#EDE8E3",
          borderRadius: 0,
          color: "#191D63",
          padding: 0,
        }}
      >
        <AlertDialog.Title className="px-[12px] pt-[12px] pb-3 lg:px-[24px] lg:pt-[24px] lg:pb-[45px]">
          <Flex justify="between" align="center" gap="2">
            <p className="font-semibold text-base text-center lg:text-xl leading-6">
              {title}
            </p>

            <AlertDialog.Action>
              <button className="text-[#191D63] rounded-full bg-white p-2">
                <X className="h-5 w-5" />
              </button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Title>
        <AlertDialog.Description size="2">
          <Flex
            direction="column"
            align="center"
            className="pb-4 gap-[0.5rem] px-[12px] lg:px-[24px]"
          >
            {content}
          </Flex>
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DialogBox;
