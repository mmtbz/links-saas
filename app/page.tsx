"use client";
import { Container, Grid, Flex, Box, TextField, Text } from "@radix-ui/themes";
import Image from "next/image";
import WomanImage from "../public/images/businesswoman.png";
import GoogleLogo from "../public/images/goog.png";
import AirbnbLogo from "../public/images/abnb.png";
import MsftLogo from "../public/images/msft.png";
import SlackLogo from "../public/images/slack.png";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <Flex direction="column" className="border-collapse">
      <div className="bg-[#FFF5EC]">
        <Container className="px-2 lg:px-0">
          <Grid
            columns={{ sm: "1", md: "2" }}
            gap="5"
            justify="center"
            align="center"
            className="border-solid border border-black border-collapse"
          >
            <div className="relative">
              <div className="uppercase font-bold text-8xl opacity-10">
                Popular
              </div>
              <div className="capitalize font-bold text-2xl absolute top-[2rem] left-[2rem] text-[#191D63]">
                Latest Popular Jobs
              </div>
            </div>

            <div className="font-extrabold text-7xl leading-[5rem] lg:text-6xl lg:leading-[4rem] mb-6">
              <p className=" text-[#16171C]">Hire the best candidates</p>
              <Flex gap="3">
                <p>in </p>
                <p className="text-[#F2994A]">Africa</p>
              </Flex>

              <p className="font-normal text-base text-[#4F4F4F] leading-6 pt-5 max-w-xl">
                Find You New Job Today! New Job Postings Everyday just for you,
                browse the job you want and apply wherever you want
              </p>
              <p className="text-[#333333] text-2xl pt-4 font-extrabold">
                Trending keywords:
              </p>
              <p className="text-[#F2994A] text-base pt-4 font-black">
                Web Developer | UI/UX Engineer | Frontend
              </p>
              <TextField.Root className="mt-4" radius="full" size="3">
                <TextField.Slot>
                  <IoSearch size={24} />
                </TextField.Slot>
                <TextField.Input placeholder="Search talents…" />
              </TextField.Root>
            </div>
            <Image
              src={WomanImage}
              alt="business-woman"
              className="hidden lg:block"
            />
          </Grid>
        </Container>
      </div>
      <div>
        <Container className="px-2 lg:px-0 border-solid border border-black border-collapse">
          <div className="text-center text-xl mb-6 mt-2">
            <p className="inline">Trusted by big and small</p>
            <p className="text-orange-400 inline font-bold"> companies</p>
          </div>

          <Flex align="center" gap="2" justify="between" mb="6">
            <Image src={GoogleLogo} alt="google logo" height="80" width="80" />
            <Image
              src={MsftLogo}
              alt="Microsoft logo"
              height="110"
              width="110"
            />
            <Image src={SlackLogo} alt="Slack logo" height="80" width="80" />
            <Image src={AirbnbLogo} alt="Airbnb logo" height="80" width="80" />
          </Flex>
        </Container>
      </div>
      <div className="bg-[#FFF5EC] py-8 border-solid border border-black border-collapse">
        <Container className="px-2 lg:px-0">
          <p className="text-center text-orange-400">Choose Categories</p>
          <p className="text-center text-2xl font-bold">Choose Categories</p>
          <Grid columns={{ sm: "2", lg: "4" }} gap="4">
            <Flex className="bg-[#F2994A] px-2 py-6 rounded-3xl" gap="3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M27.1884 31.3496C26.5386 31.3496 25.9033 31.1568 25.3629 30.7958C24.8226 30.4347 24.4014 29.9216 24.1527 29.3212C23.904 28.7207 23.839 28.0601 23.9658 27.4227C24.0925 26.7853 24.4055 26.1998 24.865 25.7403C25.3245 25.2808 25.91 24.9678 26.5474 24.841C27.1848 24.7142 27.8455 24.7793 28.4459 25.028C29.0463 25.2767 29.5595 25.6979 29.9205 26.2382C30.2816 26.7786 30.4743 27.4138 30.4743 28.0637C30.4743 28.9352 30.1281 29.7709 29.5119 30.3872C28.8957 31.0034 28.0599 31.3496 27.1884 31.3496ZM45.4864 29.8093L30.31 50.4074C30.2065 50.5453 30.0623 50.6472 29.8978 50.6986C29.7332 50.75 29.5566 50.7483 29.3931 50.6938C29.2295 50.6393 29.0872 50.5347 28.9864 50.3948C28.8856 50.2549 28.8314 50.0869 28.8314 49.9145V34.43C30.3801 34.0301 31.7298 33.0792 32.6275 31.7553C33.5252 30.4315 33.9093 28.8257 33.7077 27.239C33.5062 25.6522 32.7329 24.1935 31.5327 23.1361C30.3325 22.0787 28.7879 21.4954 27.1884 21.4954C25.5889 21.4954 24.0444 22.0787 22.8442 23.1361C21.644 24.1935 20.8707 25.6522 20.6692 27.239C20.4676 28.8257 20.8517 30.4315 21.7494 31.7553C22.6471 33.0792 23.9968 34.0301 25.5455 34.43V49.9145C25.5455 50.0869 25.4913 50.2549 25.3905 50.3948C25.2897 50.5347 25.1474 50.6393 24.9838 50.6938C24.8203 50.7483 24.6437 50.75 24.4791 50.6986C24.3146 50.6472 24.1704 50.5453 24.0669 50.4074L8.89048 29.8093C8.53297 29.3233 8.31528 28.7487 8.26098 28.1478C8.20668 27.5468 8.31784 26.9425 8.58244 26.4003L14.0451 15.3517V7.52728C14.0451 6.65583 14.3913 5.82006 15.0075 5.20385C15.6237 4.58764 16.4595 4.24146 17.331 4.24146H37.0459C37.9174 4.24146 38.7532 4.58764 39.3694 5.20385C39.9856 5.82006 40.3318 6.65583 40.3318 7.52728V15.3517L45.7945 26.4003C46.0591 26.9425 46.1702 27.5468 46.1159 28.1478C46.0616 28.7487 45.8439 29.3233 45.4864 29.8093ZM37.0459 7.52728H17.331V14.0989H37.0459V7.52728Z"
                  fill="white"
                />
              </svg>
              <Box>
                <Text className="text-white font-black block text-2xl">
                  UI / UX <br />
                  Design
                </Text>
                <Text className="text-[#F2F2F2] text-sm">
                  120 Candidates available
                </Text>
              </Box>
            </Flex>
            <Flex className="bg-white px-2 py-6 rounded-3xl" gap="3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="54"
                viewBox="0 0 53 54"
                fill="none"
              >
                <path
                  d="M45.5006 8.5745L17.7594 18.4802V33.8141L19.3979 34.3989L16.9292 39.3364C16.648 39.8978 16.4908 40.513 16.4683 41.1404C16.4457 41.7678 16.5584 42.3927 16.7985 42.9728C17.0387 43.5528 17.4008 44.0745 17.8602 44.5023C18.3197 44.9302 18.8658 45.2542 19.4615 45.4525L28.4077 48.4338C29.4084 48.7601 30.4928 48.718 31.4653 48.3151C32.4377 47.9122 33.2342 47.1751 33.711 46.2367L36.5653 40.5281L45.5006 43.7197C45.831 43.8376 46.1849 43.8744 46.5325 43.827C46.8801 43.7796 47.2112 43.6495 47.498 43.4474C47.7848 43.2454 48.0189 42.9775 48.1806 42.6662C48.3423 42.3548 48.4268 42.0092 48.4271 41.6584V10.6358C48.4268 10.285 48.3423 9.93939 48.1806 9.62807C48.0189 9.31674 47.7848 9.0488 47.498 8.84679C47.2112 8.64478 46.8801 8.5146 46.5325 8.46722C46.1849 8.41983 45.831 8.45663 45.5006 8.5745ZM29.7921 44.2783L20.8481 41.297L23.5534 35.8841L32.4076 39.0473L29.7921 44.2783ZM8.99719 33.8141H13.3783V18.4802H8.99719C6.58101 18.4802 4.61609 20.4451 4.61609 22.8613V29.4329C4.61609 31.8491 6.58101 33.8141 8.99719 33.8141Z"
                  fill="#F2994A"
                />
              </svg>
              <Box>
                <Text className="text-[#333333] font-black block text-2xl">
                  Marketing & Communication
                </Text>
                <Text className="text-[#828282] text-sm">
                  120 Candidates available
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Container>
      </div>
    </Flex>
  );
}
