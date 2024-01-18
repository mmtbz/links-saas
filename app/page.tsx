"use client";
import { Box } from "@radix-ui/themes";
import HomeNavBar from "./HomeNavigationBar";
import MainPageFirstComp from "./components/MainPageFirstComp";

export default function Home() {
  return (
    <div className="bg-[#145959]">
      <Box className="max-h-[0.5rem] lg:max-h-[1rem] opacity-0">a</Box>
      <HomeNavBar />
      <MainPageFirstComp />
    </div>
  );
}
