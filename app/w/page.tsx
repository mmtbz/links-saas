import { Box, Container, Flex, Grid, Separator, Text } from "@radix-ui/themes";
import Flags from "country-flag-icons/react/3x2";
import Image from "next/image";
import {
  FaCheck,
  FaClock,
  FaLink,
  FaLinkedinIn,
  FaLocationDot,
  FaRegCircleDot,
} from "react-icons/fa6";
import { SiCoursera, SiTesla, SiUdacity, SiUdemy } from "react-icons/si";

import { GoDotFill } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

const PublicResume = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", sm: "5" }}>
        <Box className="col-span-1 bg-gray-50 lg:min-h-screen space-y-3 pt-4">
          <Flex justify="between" align="start" className="pr-2">
            <Image
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              height={100}
              width={150}
              alt="profile picture"
              className="object-cover rounded-r-[15px]"
            />
            <Box className="lg:hidden">
              <Flex align="end" gap="2" direction="column">
                <Box className="p-2 bg-primary rounded-xl max-w-fit">
                  <FaCheck color="white" />
                </Box>
                <Text className="font-semibold">Verified</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex className="p-5" direction="column">
            <Text className="font-bold text-2xl">John Smith</Text>
            <Text className="font-semibold text-lg text-violet-500">
              UX Designeer
            </Text>

            <Separator size="4" className="my-5" />
            <Box className="hidden lg:block">
              <Flex align="center" gap="2">
                <Box className="p-2 bg-primary rounded-xl max-w-fit">
                  <FaCheck color="white" />
                </Box>
                <Text className="font-semibold">Verified</Text>
              </Flex>
              <Separator size="4" className="my-5" />
            </Box>

            <Flex gap="2" align="center" className="mb-3">
              <Box className="p-2 bg-gray-300 rounded-full">
                <FaLocationDot color="gray" />
              </Box>
              <Flex direction="column">
                <Text className="text-sm opacity-50">Location</Text>
                <Text className=" text-sm">Kigali,Rwanda</Text>
              </Flex>
            </Flex>

            <Flex gap="2" align="center">
              <Box className="p-2 bg-gray-300 rounded-full">
                <FaClock color="gray" />
              </Box>
              <Flex direction="column">
                <Text className="text-sm opacity-50">Local Time</Text>
                <Text className=" text-sm">01:34PM</Text>
              </Flex>
            </Flex>
            <Separator size="4" className="my-5" />
            <Box className="mb-2">
              <Text className="text-sm opacity-50">Languages</Text>
            </Box>
            <Box className="space-y-2">
              <Flex gap="2" align="center">
                <Flags.RW className="w-8 h-8" />
                <Flex direction="column">
                  <Text className="text-sm opacity-50">kinyarwanda</Text>
                  <Text className="text-sm">Native</Text>
                </Flex>
              </Flex>
              <Flex gap="2" align="center">
                <Flags.US className="w-8 h-8" />
                <Flex direction="column">
                  <Text className="text-sm opacity-50">English</Text>
                  <Text className=" text-sm">Profecient</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box className=" col-span-4 pt-4 pl-4">
          {/** latest projects */}
          <Flex gap="2" align="center" className="mb-4">
            <Box>
              <FaRegCircleDot />
            </Box>
            <Text className="text-lg font-semibold">Latest Projects</Text>
          </Flex>
          <Flex gap="2" className="pl-6 flex-col lg:flex-row pr-2 lg:pr-0">
            <Box className="bg-blue-50 p-4 rounded-l-xl space-y-4">
              <Flex gap="4">
                <Box className="min-w-max">
                  <div className="w-14 h-14 relative">
                    <Image
                      src="https://randomuser.me/api/portraits/med/men/75.jpg"
                      height={100}
                      width={100}
                      alt="project cover"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </Box>

                <Box>
                  <Text className="font-semibold text-lg" as="p">
                    Wakka Application
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi nemo atque eos, excepturi impedit quia exercitationem?
                  </Text>
                </Box>
              </Flex>
              <Box className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <Box className="bg-blue-100 p-2 rounded-full">
                  <FaLink size="20" />
                </Box>

                <Text>more details</Text>
              </Box>
            </Box>
            <Box className="bg-blue-50 p-4 rounded-r-xl space-y-4">
              <Flex gap="4" align="start">
                <Box className=" min-w-max">
                  <div className="w-14 h-14 relative">
                    <Image
                      src="https://randomuser.me/api/portraits/med/men/75.jpg"
                      height={100}
                      width={100}
                      alt="project cover"
                      className="absolute object-cover inset-0 w-full h-full rounded-xl"
                    />
                  </div>
                </Box>

                <Box>
                  <Text className="font-semibold text-lg" as="p">
                    Wakka Application
                  </Text>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi nemo atque eos, excepturi impedit quia exercitationem?
                  </Text>
                </Box>
              </Flex>
              <Box className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <Box className="bg-blue-100 p-2 rounded-full">
                  <FaLink size="20" />
                </Box>

                <Text>more details</Text>
              </Box>
            </Box>
          </Flex>
          {/** experience section */}
          <Flex gap="2" align="center" className="my-4">
            <Box>
              <FaRegCircleDot />
            </Box>
            <Text className="text-lg font-semibold block">Experience</Text>
          </Flex>
          <Box className="space-y-4">
            <Flex className="pl-6 gap-4 flex-col lg:flex-row pr-2 lg:pr-0">
              <Box className="space-y-3 min-w-max">
                <Flex
                  align="center"
                  className=" text-gray-500 text-sm space-x-2"
                >
                  <GoDotFill />
                  <Text>Jan 2020 - Jan 2022</Text>
                  <FaLocationDot />
                  <Text>Cupertino, Ca</Text>
                </Flex>
                <Flex className="ml-6" gap="4">
                  <div className="w-12 h-12 relative bg-blue-600 rounded-xl">
                    <FaLinkedinIn
                      className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                      color="white"
                    />
                  </div>
                  <Flex direction="column" gap="1">
                    <Text className=" font-semibold">Product Designer</Text>
                    <Text className="font-sm text-gray-500 text-sm">
                      Linkedin Corp
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box className="pl-6 lg:pl-0">
                <Text className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque id praesentium amet! Eos in dignissimos quos ipsa
                  recusandae neque, cum commodi facilis eveniet. Illum mollitia
                  nulla, rem possimus saepe, laudantium odio quibusdam nostrum
                  esse ipsa perferendis ab laboriosam provident minima
                  voluptatibus iste eveniet earum molestiae alias placeat.
                  Facilis, qui consequuntur.
                </Text>
              </Box>
            </Flex>
            <Flex className="pl-6 gap-4 flex-col lg:flex-row pr-2 lg:pr-0">
              <Box className="space-y-3 min-w-max">
                <Flex
                  align="center"
                  className=" text-gray-500 text-sm space-x-2"
                >
                  <GoDotFill />
                  <Text>Jan 2020 - Jan 2022</Text>
                  <FaLocationDot />
                  <Text>Cupertino, Ca</Text>
                </Flex>
                <Flex className="ml-6" gap="4">
                  <div className="w-12 h-12 relative bg-red-600 rounded-xl">
                    <SiTesla
                      className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                      color="white"
                    />
                  </div>
                  <Flex direction="column" gap="1">
                    <Text className=" font-semibold">Product Designer</Text>
                    <Text className="font-sm text-gray-500 text-sm">
                      Linkedin Corp
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box className="pl-6 lg:pl-0">
                <Text className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque id praesentium amet! Eos in dignissimos quos ipsa
                  recusandae neque, cum commodi facilis eveniet. Illum mollitia
                  nulla, rem possimus saepe, laudantium odio quibusdam nostrum
                  esse ipsa perferendis ab laboriosam provident minima
                  voluptatibus iste eveniet earum molestiae alias placeat.
                  Facilis, qui consequuntur.
                </Text>
              </Box>
            </Flex>
            <Flex className="pl-6 gap-4 flex-col lg:flex-row pr-2 lg:pr-0">
              <Box className="space-y-3 min-w-max">
                <Flex
                  align="center"
                  className=" text-gray-500 text-sm space-x-2"
                >
                  <GoDotFill />
                  <Text>Jan 2020 - Jan 2022</Text>
                  <FaLocationDot />
                  <Text>Cupertino, Ca</Text>
                </Flex>
                <Flex className="ml-6" gap="4">
                  <div className="w-12 h-12 relative bg-gray-100 rounded-xl">
                    <FcGoogle
                      className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                      color="white"
                    />
                  </div>
                  <Flex direction="column" gap="1">
                    <Text className=" font-semibold">Product Designer</Text>
                    <Text className="font-sm text-gray-500 text-sm">
                      Google
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box className="pl-6 lg:pl-0">
                <Text className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque id praesentium amet! Eos in dignissimos quos ipsa
                  recusandae neque, cum commodi facilis eveniet. Illum mollitia
                  nulla, rem possimus saepe, laudantium odio quibusdam nostrum
                  esse ipsa perferendis ab laboriosam provident minima
                  voluptatibus iste eveniet earum molestiae alias placeat.
                  Facilis, qui consequuntur.
                </Text>
              </Box>
            </Flex>
          </Box>
          {/** education section */}
          <Flex gap="2" align="center" className="my-4">
            <Box>
              <FaRegCircleDot />
            </Box>
            <Text className="text-lg font-semibold block">Education</Text>
          </Flex>
          <Flex gap="2" className="pl-6 flex-col lg:flex-row pr-2 lg:pr-0">
            <Box className="bg-blue-50 p-4 rounded-xl space-y-4 flex-1">
              <Flex gap="4">
                <Flex align="center" gap="2">
                  <Box className="min-w-max">
                    <div className="w-12 h-12 relative bg-purple-600 rounded-xl">
                      <SiUdemy
                        className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                        color="white"
                      />
                    </div>
                  </Box>
                  <Text className="font-semibold text-lg" as="p">
                    Udemy
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="1" direction="column">
                <Text className="text-blue-600 font-semibold">
                  Javascript mastery
                </Text>
                <Text className=" text-sm text-gray-500">Oct 2021</Text>
              </Flex>
            </Box>
            <Box className="bg-blue-50 p-4 rounded-xl space-y-4 flex-1">
              <Flex gap="4">
                <Flex align="center" gap="2">
                  <Box className="min-w-max">
                    <div className="w-12 h-12 relative bg-blue-600 rounded-xl">
                      <SiCoursera
                        className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                        color="white"
                      />
                    </div>
                  </Box>
                  <Text className="font-semibold text-lg" as="p">
                    Coursera
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="1" direction="column">
                <Text className="text-blue-600 font-semibold">
                  Javascript mastery
                </Text>
                <Text className=" text-sm text-gray-500">Oct 2021</Text>
              </Flex>
            </Box>
            <Box className="bg-blue-50 p-4 rounded-xl space-y-4 flex-1">
              <Flex gap="4">
                <Flex align="center" gap="2">
                  <Box className="min-w-max">
                    <div className="w-12 h-12 relative bg-gray-100 rounded-xl">
                      <SiUdacity
                        className="absolute object-cover inset-0 w-full h-full rounded-xl p-2"
                        color="blue"
                      />
                    </div>
                  </Box>
                  <Text className="font-semibold text-lg" as="p">
                    Udacity
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="1" direction="column">
                <Text className="text-blue-600 font-semibold">
                  Javascript mastery
                </Text>
                <Text className=" text-sm text-gray-500">Oct 2021</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Container>
  );
};

export default PublicResume;
