"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserProfile } from "@prisma/client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { z } from "zod";
import { profileSchema } from "../SchemaValidation";
import Breadcrumbs from "../components/Breadcrumbs";
import Title from "../components/Title";

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileForm = ({ userProfile }: { userProfile?: UserProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });
  return (
    <Box className="col-span-1 lg:col-span-2 space-y-3">
      <Breadcrumbs />
      <Title title="Profile & Resume" />

      <Flex gap="4" align="center">
        <Avatar fallback="DM" size="6" color="green" radius="full" src={""} />
        <button className="border py-1 px-3 border-solid border-[#145959] rounded-[5px]">
          Update
        </button>
        <Flex align="center" gap="1" className="hover:cursor-pointer">
          <FaRegTrashAlt />
          <Text>Remove</Text>
        </Flex>
      </Flex>

      <form
        onSubmit={handleSubmit(async (data) => {
          // todo use patch function instead
          data.userId = Math.random().toString();
          axios
            .patch("/api/profile/" + userProfile?.userId, data)
            .then(() => {
              toast.custom((t) => (
                <Flex
                  justify="between"
                  align="center"
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } w-full bg-green-500 text-white shadow-lg rounded-custom pointer-events-auto p-2`}
                >
                  <Flex gap="4" align="center">
                    <FaCircleCheck size="24" color="white" />
                    <Text className="pl-4">
                      Your profile data has been updated successfully.
                    </Text>
                  </Flex>
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoIosCloseCircle size="30" />
                  </button>
                </Flex>
              ));
            })
            .catch(() => {
              toast.custom((t) => (
                <Flex
                  justify="between"
                  align="center"
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } w-full bg-red-500 text-white shadow-lg rounded-custom pointer-events-auto p-2`}
                >
                  <Flex gap="4" align="center">
                    <IoIosCloseCircle size="30" />
                    <Text className="pl-4">
                      Error while updating profile data. Try again later.
                    </Text>
                  </Flex>
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoIosCloseCircle size="30" />
                  </button>
                </Flex>
              ));
            });
        })}
      >
        <Flex direction="column" gap="4" className="my-4">
          <Flex direction="column" gap="2">
            <Text color={errors.displayName ? "red" : undefined}>Name *</Text>
            <input
              className={classNames({
                "border border-solid py-2 px-4 rounded-[5px]": true,
                "border-red-500": errors.displayName,
              })}
              defaultValue={userProfile?.displayName || ""}
              {...register("displayName")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text color={errors.professionalTitle ? "red" : undefined}>
              Professional Title *
            </Text>
            <input
              className={classNames({
                "border border-solid py-2 px-4 rounded-[5px]": true,
                "border-red-500": errors.professionalTitle,
              })}
              defaultValue={userProfile?.professionalTitle || ""}
              {...register("professionalTitle")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text color={errors.about ? "red" : undefined}>About Me *</Text>
            <textarea
              className={classNames({
                "border border-solid py-2 px-4 rounded-[5px]": true,
                "border-red-500": errors.about,
              })}
              defaultValue={userProfile?.about || ""}
              {...register("about")}
            />
          </Flex>
          <Flex gap="4">
            <Flex direction="column" gap="2" className="flex-1">
              <Text color={errors.country ? "red" : undefined}>Country *</Text>
              <select
                className={classNames({
                  "border border-solid py-2 px-4 rounded-[5px]": true,
                  "border-red-500": errors.country,
                })}
                defaultValue={userProfile?.country || ""}
                {...register("country")}
              >
                <option>United States</option>
                <option>Rwanda</option>
              </select>
            </Flex>
            <Flex direction="column" gap="2" className="flex-1">
              <Text color={errors.city ? "red" : undefined}>City *</Text>
              <input
                className={classNames({
                  "border border-solid py-2 px-4 rounded-[5px]": true,
                  "border-red-500": errors.city,
                })}
                defaultValue={userProfile?.city || ""}
                {...register("city")}
              />
            </Flex>
          </Flex>
          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Text color={errors.timezone ? "red" : undefined}>
                Timezone *
              </Text>
              <Text>Current Time: 01:30pm</Text>
            </Flex>

            <select
              className={classNames({
                "border border-solid py-2 px-4 rounded-[5px]": true,
                "border-red-500": errors.timezone,
              })}
              defaultValue={userProfile?.timezone || ""}
              {...register("timezone")}
            >
              <option>Central TIme US & Canada</option>
              <option>Central Africa Timezone</option>
            </select>
          </Flex>
        </Flex>
        <Flex className="col-span-1 lg:col-span-2" justify="between">
          <button className="p-2 px-4 bg-[#145959] text-white rounded-[5px]">
            Save Changes
          </button>
        </Flex>
      </form>
    </Box>
  );
};

export default ProfileForm;
