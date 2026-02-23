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
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Longer delay to allow images/layout to settle before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      // Second scroll to correct for any late layout shifts
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1200);
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
        <FAQSection />
        <ConsultationForm showMap={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
