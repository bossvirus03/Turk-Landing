
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ItinerarySection from "@/components/ItinerarySection";
import CountdownSection from "@/components/CountdownSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScheduleSummary from "@/components/ScheduleSummary";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutSection />
      <ScheduleSummary/>
      <ItinerarySection />
      <HeroSection />
      <ServicesSection />
      {/* <CountdownSection /> */}
      <ContactSection />
      <Footer />

      <a href="tel:0343118488" className="hotline-button">
        <Phone className="h-6 w-6 mr-1" />
        <span className="hotline-text">Hotline: 0989.494.899</span>
      </a>
    </div>
  );
};

export default Index;
