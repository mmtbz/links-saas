import { Text, Separator, Box } from "@radix-ui/themes";

const ProfileTitle = ({ title }: { title: string }) => {
  return (
    <Box>
      <Text className="text-xl font-bold">{title}</Text>
      <Separator my="3" size="2" />
    </Box>
  );
};

export default ProfileTitle;
