import { Flex } from "@radix-ui/themes";
import ResumeCard from "./ResumeCard";

const ResumeTab = () => {
  return (
    <Flex gap="3">
      <ol className="timeline">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </ol>
    </Flex>
  );
};

export default ResumeTab;
