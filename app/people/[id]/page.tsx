import ProfileMain from "@/app/profile/ProfileMain";
import ProfileTabs from "@/app/profile/ProfileTabs";
import prisma from "@/prisma/client";
import { Box, Container, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React, { cache } from "react";

interface Props {
  params: { id: string };
}

const findUserProfile = cache((profileId: number) =>
  prisma.userProfile.findUnique({
    where: { id: profileId },
    include: { user: true },
  })
);

const findSkills = cache((userId: string) =>
  prisma.user.findUnique({
    where: { id: userId },
    include: { skills: true },
  })
);

const PersonDetailsPage = async ({ params }: Props) => {
  if (params.id === "null") notFound();
  const profile = await findUserProfile(parseInt(params.id));
  if (!profile) notFound();
  const skills = await findSkills(profile?.userId).then((res) => res?.skills);
  
  return (
    <Container>
      <Grid gap="3" columns={{ md: "1fr 2fr", lg: "1fr 3fr", sm: "1fr" }}>
        <Box className="bg-white bg-opacity-40 rounded-[5px]">
          <ProfileMain
            name={profile.user.name || ""}
            photo={profile.user.image || ""}
            title={profile.professionalTitle || ""}
            location={profile.location || ""}
          />
        </Box>
        <Box className="bg-white bg-opacity-40 rounded-[5px]">
          <ProfileTabs about={profile.about || ""} skills={skills || []} />
        </Box>
      </Grid>
    </Container>
  );
};

export default PersonDetailsPage;
