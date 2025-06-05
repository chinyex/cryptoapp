import "./globals.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ChartSection from "./components/ChartSection";
import RoadMap from "./components/RoadMap";
import TestimonialSection from "./components/TestimonialSection";
import Faq from "./components/Faq";
import Blogs_News from "./components/Blogs_News";
import ContactUs from "./components/ContactUs";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
      <div className="bg-[#080321] bg-cover bg-center min-h-screen">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ChartSection />
        <RoadMap />
        <TestimonialSection />
        <Faq />
        <Blogs_News />
        <div className="relative">
          <ContactUs />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] md:bottom-[-50px] w-[90%] md:w-7xl z-10">
            <NewsLetter className="" />
          </div>
        </div>
        <Footer/>
      </div>
    
  );
}
