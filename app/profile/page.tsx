"use client";
import { UserProfile } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { profileSchema } from "../SchemaValidation";
import ProfileForm from "./ProfileForm";
import Breadcrumbs from "../components/Breadcrumbs";

type ProfileForm = z.infer<typeof profileSchema>;

const ProfilePage = () => {
  const { data: session, status } = useSession();

  const {
    data: userProfile,
    error,
    isLoading,
  } = useQuery<UserProfile>({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () =>
      await axios
        .get("/api/profile/" + session?.user?.id)
        .then((res) => res.data),
    retry: 3,
  });

  if (status === "loading" || isLoading || !session) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileForm userProfile={userProfile} />
    </>
  );
};

export default ProfilePage;
