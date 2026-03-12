import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import SEOHead from "@/components/SEOHead";
import StructuredData, { buildBreadcrumbData } from "@/components/StructuredData";

const Contact = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Contact Luxe Shutters — Free Measure & Quote Regional NSW"
      description="Get in touch with Luxe Shutters for a free in-home measure and quote. Serving Wagga Wagga, Griffith, Temora, Young and Regional NSW. Call 1800 465 893."
      canonical="/contact"
    />
    <StructuredData data={buildBreadcrumbData([{ name: "Home", url: "https://luxeshutters.lovable.app/" }, { name: "Contact", url: "https://luxeshutters.lovable.app/contact" }])} id="ld-breadcrumb" />
    <Header />
    <main className="pt-24">
      <ConsultationForm />
    </main>
    <Footer />
  </div>
);

export default Contact;
