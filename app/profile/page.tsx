"use client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

interface ProfileForm {
  userId: string;
  displayName: string;
  professionalTitle: string;
  about: string;
  language: string;
  country: string;
  city: string;
  timezone: string;
}

const ProfilePage = () => {
  const { register, handleSubmit } = useForm<ProfileForm>();
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
            <Text>Name</Text>
            <input
              className="border border-solid py-2 px-4 rounded-[10px]"
              {...register("displayName")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text>Professional Title</Text>
            <input
              className="border border-solid py-2 px-4 rounded-[10px]"
              {...register("professionalTitle")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text>About Me</Text>
            <textarea
              className="border border-solid py-2 px-4 rounded-[10px] "
              {...register("about")}
            />
          </Flex>
          <Flex direction="column" gap="2">
            <Text>Language</Text>
            <select
              className="border border-solid py-2 px-4 rounded-[10px]"
              {...register("language")}
            >
              <option>English</option>
              <option>French</option>
            </select>
          </Flex>
          <Flex gap="4">
            <Flex direction="column" gap="2" className="flex-1">
              <Text>Country</Text>
              <select
                className="border border-solid py-2 px-4 rounded-[10px]"
                {...register("country")}
              >
                <option>United States</option>
                <option>Rwanda</option>
              </select>
            </Flex>
            <Flex direction="column" gap="2" className="flex-1">
              <Text>City</Text>
              <input
                className="border border-solid py-2 px-4 rounded-[10px]"
                {...register("city")}
              />
            </Flex>
          </Flex>
          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Text>Timezone</Text>
              <Text>Current Time: 01:30pm</Text>
            </Flex>

            <select
              className="border border-solid py-2 px-4 rounded-[10px]"
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
