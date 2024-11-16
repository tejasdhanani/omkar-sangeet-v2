"use client";
import { organization } from "@/content/global";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <HeroSection
        imageSrc="/lohri-celebration-india.jpg"
        imageAltText="all types of instruments"
        ButtonAction={() => alert("Button Clicked")}
        bgFilterOpacity={50}
        HeroTitle={`Welcome to ${organization.name}`}
        HeroSubTitle="Experience the Essence of Indian Classical Music"
        ButtonText="Explore Courses"
      />
      <AboutUs />
      {/* Courses Section */}
    </>
  );
}
