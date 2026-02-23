import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import AboutTeam from "@/components/AboutTeam";
import BookingSection from "@/components/BookingSection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogPreview from "@/components/BlogPreview";
import ConsultationForm from "@/components/ConsultationForm";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <div className="section-shadow-top"><WhyChooseUs /></div>
        <GallerySection />
        <div className="section-shadow-top"><AboutTeam /></div>
        <BookingSection />
        <div className="section-shadow-top"><ReviewsSection /></div>
        <BlogPreview />
        <ConsultationForm showMap={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
