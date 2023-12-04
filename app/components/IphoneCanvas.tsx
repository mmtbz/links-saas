import { Box } from "@radix-ui/themes";
import PublicProfile from "./PublicProfile";

const IphoneCanvas = () => {
  return (
    <Box className="h-screen hidden md:grid items-center justify-center">
      <Box className="h-[700px] w-[340px] overflow-y-auto rounded-[4rem] ring-8 border-indigo-950 overflow-hidden p-4  bg-white">
        <PublicProfile />
      </Box>
    </Box>
  );
};

export default IphoneCanvas;
