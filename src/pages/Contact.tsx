import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <ConsultationForm />
    </main>
    <Footer />
  </div>
);

export default Contact;
