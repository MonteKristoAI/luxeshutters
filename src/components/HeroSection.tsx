import { ShieldCheck, Award, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shutters.png";
import { useNavigate, useLocation } from "react-router-dom";

const trustChips = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Award, label: "Certified installers" },
  { icon: Zap, label: "Energy-efficient products" },
  { icon: MapPin, label: "Serving Regional NSW" },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToBooking = () => {
    if (location.pathname === "/") {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#booking");
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium plantation shutters installed in a Regional NSW home"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/95 via-[#1a1f2e]/75 to-[#1a1f2e]/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/60 mb-4 font-medium">
            Where Style Meets Everyday Comfort.
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Premium Plantation Shutters, Blinds & Curtains in <span className="text-accent">Regional NSW</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-8 leading-relaxed">
            Custom window furnishings supplied and installed across Wagga Wagga, Griffith, Temora and surrounding NSW areas. Free in-home measure and quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="xl"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg"
              onClick={scrollToBooking}>
              Get a Free Measure & Quote
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm"
              asChild>
              <a href="tel:1800465893">Call Us — 1800 465 893</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {trustChips.map(({ icon: Icon, label }) =>
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                <Icon className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/85">{label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
