import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ChartSection from "./components/ChartSection";
import RoadMap from "./components/RoadMap";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#14102C] bg-cover bg-center min-h-screen">
        <Navbar />
        <HeroSection/>
        <FeaturesSection/>
        <ChartSection/>
        <RoadMap/>
      </div>
     

    </div>
  );
}
