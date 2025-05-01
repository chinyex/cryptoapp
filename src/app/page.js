import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ChartSection from "./components/ChartSection";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url('/hero-shape-1.svg')] bg-cover bg-center min-h-screen">
        <Navbar />
        <HeroSection/>
        <FeaturesSection/>
        <ChartSection/>
      </div>

    </div>
  );
}
