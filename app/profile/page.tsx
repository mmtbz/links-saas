"use client";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { z } from "zod";
import { createProfileSchema } from "../SchemaValidation";
import classNames from "classnames";

type ProfileForm = z.infer<typeof createProfileSchema>;

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(createProfileSchema),
  });
  const [error, setError] = useState("");

  return (
    <Box className="col-span-1 lg:col-span-2 space-y-3">
      <Flex gap="4" align="center">
        <Avatar fallback="DM" size="6" color="green" radius="full" src={""} />
        <button className="border py-1 px-3 border-solid border-[#145959] rounded-[10px]">
          Update
        </button>
        <Flex align="center" gap="1" className="hover:cursor-pointer">
          <FaRegTrashAlt />
          <Text>Remove</Text>
        </Flex>
      </Flex>
      {error && (
        <Flex
          className="p-4 bg-red-400 text-white rounded-2xl"
          gap="2"
          align="center"
        >
          <IoInformationCircleOutline size={24} />
          <Text>{error}</Text>
        </Flex>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          // TODO add real userId
          try {
            data.userId = Math.random().toString();
            await axios.post("/api/profile", data);
            await toast({
              title: "Profile Updated Successfully",
              description: "Your Profile was updated successfully.",
            });
          } catch (error) {
            setError("An unexpected error occured. Please try again.");
          }
        })}
      >
        <Flex direction="column" gap="4" className="my-4">
          <Flex direction="column" gap="2">
            <Text color={errors.displayName ? "red" : undefined}>Name *</Text>
            <input
              className={classNames({
                "border border-solid py-2 px-4 rounded-[10px]": true,
                "border-red-500": errors.displayName,
              })}
              {...register("displayName")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text color={errors.professionalTitle ? "red" : undefined}>
              Professional Title *
            </Text>
            <input
              className={classNames({
                "border border-solid py-2 px-4 rounded-[10px]": true,
                "border-red-500": errors.professionalTitle,
              })}
              {...register("professionalTitle")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text color={errors.about ? "red" : undefined}>About Me *</Text>
            <textarea
              className={classNames({
                "border border-solid py-2 px-4 rounded-[10px]": true,
                "border-red-500": errors.about,
              })}
              {...register("about")}
            />
          </Flex>
          <Flex gap="4">
            <Flex direction="column" gap="2" className="flex-1">
              <Text color={errors.country ? "red" : undefined}>Country *</Text>
              <select
                className={classNames({
                  "border border-solid py-2 px-4 rounded-[10px]": true,
                  "border-red-500": errors.country,
                })}
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
                  "border border-solid py-2 px-4 rounded-[10px]": true,
                  "border-red-500": errors.city,
                })}
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
                "border border-solid py-2 px-4 rounded-[10px]": true,
                "border-red-500": errors.timezone,
              })}
              {...register("timezone")}
            >
              <option>Central TIme US & Canada</option>
              <option>Central Africa Timezone</option>
            </select>
          </Flex>
        </Flex>
        <Flex className="col-span-1 lg:col-span-2" justify="between">
          <button className="p-2 px-4 bg-[#145959] text-white rounded-[10px]">
            Save Changes
          </button>
          <button
            className="py-2 px-4 border border-black rounded-[10px]"
            onClick={() => console.log("clear")}
          >
            Cancel
          </button>
        </Flex>
      </form>
    </Box>
  );
};

export default ProfilePage;