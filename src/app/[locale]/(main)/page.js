import Hero from "@/Layouts/Hero/Hero";
import About from "@/Layouts/Home/About/About";
import BusinessLayouts from "@/Layouts/Home/BusinessLayouts/BusinessLayouts";
import HowWe from "@/Layouts/Home/HowWe/HowWe";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BusinessLayouts />
      <HowWe />
    </>
  );
}
