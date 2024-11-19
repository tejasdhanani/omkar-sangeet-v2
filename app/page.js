"use client";
import { organization } from "@/content/global";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import { BadgeSection } from "./components/Badge";

export default function Home() {
  return (
    <>
      <HeroSection
        imageSrc="/lohri-celebration-india.jpg"
        imageAltText="all types of instruments"
        bgFilterOpacity={65}
        HeroTitle={`Welcome to ${organization.name}`}
        HeroSubTitle="Affiliated with Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai"
        ButtonText="Explore Courses"
        url="/courses"
      />
      <AboutUs />
      <BadgeSection />
    </>
  );
}
