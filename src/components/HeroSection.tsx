import { ShieldCheck, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-windows.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const trustChips = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Award, label: "Certified installers" },
  { icon: Zap, label: "Energy-efficient experts" },
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

  const scrollToGallery = () => {
    if (location.pathname === "/") {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#gallery");
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern home with beautiful energy-efficient windows letting in natural light"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/85 via-[#1a1f2e]/55 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Better comfort. Better insulation. Better living.
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-8 leading-relaxed">
            Premium windows and doors that transform your home — more natural light, lower energy bills, and modern curb appeal you'll love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="xl"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg"
              onClick={scrollToBooking}>
              Request a free consultation
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm"
              onClick={scrollToGallery}>
              View our work
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
