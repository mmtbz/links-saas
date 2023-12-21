"use client";
import { Dialog, Flex, Grid } from "@radix-ui/themes";
import PostCard from "./_components/PostCard";

const CompanyPosts = () => {
  return (
    <Grid
      gap="3"
      className="grid"
      columns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      <Dialog.Root>
        <Dialog.Trigger>
          <a>
            <PostCard />
          </a>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 780 }}>
          <Dialog.Title>Some Post</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Some Post
          </Dialog.Description>

          <Flex direction="column" gap="3">
            some content
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Grid>
  );
};

export default CompanyPosts;
