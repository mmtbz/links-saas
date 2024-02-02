import { Box, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import { X } from "lucide-react";

interface Props {
  value: string;
  position: string;
  answer?: boolean;
  selected?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionSelection = ({
  value,
  position,
  answer,
  selected,
  onChange,
}: Props) => {
  return (
    <>
      <input
        type="radio"
        id={position}
        name="answer_option"
        value={position}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={position}>
        <Flex
          className={classnames({
            "mt-4 p-3 rounded-[5px] font-semibold hover:cursor-pointer ": true,
            "text-[#060710] bg-[#F4F3F6] hover:bg-gray-50":
              !selected || selected !== position,
            "text-[#F4F3F6] bg-[#45C486] hover:bg-[#45C486]":
              selected === position && answer,
            "text-[#F4F3F6] bg-[#A40021] hover:bg-[#A40021]":
              selected === position && !answer,
          })}
          gap="2"
          align="center"
        >
          {(!selected || selected !== position) && (
            <Box className="bg-[#EDE8E3] px-2 py-1 rounded-full">
              {position}
            </Box>
          )}
          {selected === position && answer && (
            <Box className="bg-[#F4F3F6] p-[0.5px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.71 7.21C18.617 7.11627 18.5064 7.04188 18.3846 6.99111C18.2627 6.94034 18.132 6.9142 18 6.9142C17.868 6.9142 17.7373 6.94034 17.6154 6.99111C17.4936 7.04188 17.383 7.11627 17.29 7.21L9.84 14.67L6.71 11.53C6.61347 11.4368 6.49953 11.3634 6.37468 11.3142C6.24982 11.265 6.1165 11.2409 5.98232 11.2432C5.84814 11.2456 5.71573 11.2743 5.59265 11.3278C5.46957 11.3813 5.35823 11.4585 5.265 11.555C5.17176 11.6515 5.09844 11.7655 5.04924 11.8903C5.00004 12.0152 4.9759 12.1485 4.97823 12.2827C4.98055 12.4169 5.00928 12.5493 5.06277 12.6723C5.11626 12.7954 5.19347 12.9068 5.29 13L9.13 16.84C9.22296 16.9337 9.33356 17.0081 9.45542 17.0589C9.57728 17.1097 9.70798 17.1358 9.84 17.1358C9.97201 17.1358 10.1027 17.1097 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.68C18.8115 8.58636 18.8925 8.4727 18.9479 8.3462C19.0033 8.21971 19.0319 8.0831 19.0319 7.945C19.0319 7.8069 19.0033 7.67029 18.9479 7.54379C18.8925 7.41729 18.8115 7.30364 18.71 7.21Z"
                  fill="#31CD63"
                />
              </svg>
            </Box>
          )}
          {selected === position && !answer && (
            <Box className="bg-[#F4F3F6] p-1 rounded-full">
              <X className="h-5 w-5" color="#A40021" />
            </Box>
          )}
          <Text className="">{value}</Text>
        </Flex>
      </label>
    </>
  );
};

export default OptionSelection;
