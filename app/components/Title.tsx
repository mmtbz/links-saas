import { Text, Separator, Box } from "@radix-ui/themes";

const Title = ({ title }: { title?: string }) => {
  if (!title) return null;
  return (
    <Box className="mb-2">
      <Text className="text-xl font-bold">{title}</Text>
      {/* <Separator my="1" size="2" /> */}
    </Box>
  );
};

export default Title;
