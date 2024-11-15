"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <HeroSection
      imageSrc="/lohri-celebration-india.jpg"
      imageAltText="all types of instruments"
      ButtonAction={() => alert("Button Clicked")}
      bgFilterOpacity={50}
      HeroTitle="Welcome to Omkar Sangeet Mahavidyalay"
      HeroSubTitle="Experience the Essence of Indian Classical Music"
      ButtonText="Learn More"
    />
  );
}
