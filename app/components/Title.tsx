import { Box, Text } from "@radix-ui/themes";

const Title = ({ title }: { title?: string }) => {
  if (!title) return null;
  return (
    <Box className="pb-2">
      <Text
        size="6"
        className="font-semibold bg-gradient-to-r from-teal-500 to-green-700 text-transparent bg-clip-text"
      >
        {title}
      </Text>
    </Box>
  );
};

export default Title;
