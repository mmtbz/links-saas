"use client";
import { Box } from "@radix-ui/themes";
import HomeNavBar from "./HomeNavigationBar";
import HeroSection from "./components/mainPage/HeroSection";
import CompaniesSection from "./components/mainPage/CompaniesSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#145959]">
        <Box className="max-h-[0.5rem] lg:max-h-[1rem] opacity-0">a</Box>
        <HomeNavBar />
        <HeroSection />
      </div>
      <CompaniesSection />
    </>
  );
}
