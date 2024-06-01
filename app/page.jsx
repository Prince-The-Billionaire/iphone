import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import dynamic from "next/dynamic";
import VideoCarousel from "@/components/VideoCarousel";


const Hero = dynamic(() => import("../components/Hero"),{
  ssr:false,
})
export default function Home() {

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}
