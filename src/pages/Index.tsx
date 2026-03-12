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
import SEOHead from "@/components/SEOHead";
import StructuredData, { LOCAL_BUSINESS_DATA, ORGANIZATION_DATA, buildFAQData, buildBreadcrumbData } from "@/components/StructuredData";

const HOME_FAQS = [
  { q: "How much do plantation shutters cost in NSW?", a: "Plantation shutter pricing varies based on window size, material (timber or PVC), and style. On average, expect $300–$700 per panel installed. Contact us for a free in-home measure and quote tailored to your Regional NSW home." },
  { q: "Are plantation shutters better than blinds?", a: "Both are excellent choices. Plantation shutters offer superior durability, property value increase, and timeless style. Blinds provide more budget-friendly versatility. The best option depends on your room, budget, and aesthetic preferences. View our shutters and blinds on the services page." },
  { q: "What window coverings work best in hot Australian climates?", a: "For maximum heat reduction, we recommend plantation shutters, block-out roller blinds, or zipscreens for outdoor areas. These products reflect heat and UV rays, keeping your home cooler and reducing energy bills throughout Regional NSW summers." },
  { q: "Do you install shutters in Wagga Wagga?", a: "Yes! We supply and install plantation shutters, blinds, curtains, zipscreens, and awnings across Wagga Wagga, Griffith, Temora, Young, Cootamundra, West Wyalong, Junee, Cowra, and surrounding Regional NSW areas." },
  { q: "Do you offer free in-home quotes?", a: "Absolutely. We bring our mobile showroom to your home so you can see and feel the quality of our products in your own space. There's no obligation — just honest advice and a detailed quote within 48 hours." },
  { q: "How long does shutter installation take?", a: "Most standard installations take 1–3 hours per window. Whole-home shutter projects typically take 1–2 days. We provide detailed timelines during your consultation and keep you informed every step of the way." },
  { q: "Are motorised blinds worth it?", a: "Motorised blinds offer excellent convenience, improved child safety, and smart-home integration. They're particularly popular in hard-to-reach windows and large living areas. Most of our blind and curtain products are available with motorisation." },
  { q: "What about warranty coverage?", a: "All our products come with manufacturer warranties. We also provide a workmanship warranty on every installation. Blinds include a 12-month limited warranty, and shutters carry extended coverage. Ask about specific details during your consultation." },
];

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Plantation Shutters & Blinds Regional NSW | Luxe Shutters"
        description="Premium plantation shutters, blinds and curtains installed across Wagga Wagga, Temora, Griffith and Regional NSW. Book a free in-home measure and quote today."
        canonical="/"
      />
      <StructuredData data={LOCAL_BUSINESS_DATA} id="ld-local-business" />
      <StructuredData data={ORGANIZATION_DATA} id="ld-organization" />
      <StructuredData data={buildFAQData(HOME_FAQS)} id="ld-faq" />
      <StructuredData data={buildBreadcrumbData([{ name: "Home", url: "https://luxeshutters.lovable.app/" }])} id="ld-breadcrumb" />
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
