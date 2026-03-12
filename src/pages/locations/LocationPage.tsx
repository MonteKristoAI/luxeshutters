import { Link, useNavigate } from "react-router-dom";
import { Calendar, CheckCircle2, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import StructuredData, { buildBreadcrumbData } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LocationPageData } from "@/data/locationPages";

import serviceShutters from "@/assets/service-shutters.jpg";
import serviceBlinds from "@/assets/service-blinds.jpg";
import serviceCurtains from "@/assets/service-curtains.jpg";
import serviceZipscreens from "@/assets/service-zipscreens.jpg";

const productImages: Record<string, string> = {
  shutters: serviceShutters,
  blinds: serviceBlinds,
  curtains: serviceCurtains,
  zipscreens: serviceZipscreens,
};

export default function LocationPage({ data }: { data: LocationPageData }) {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const image = productImages[data.productSlug] || serviceShutters;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`/${data.slug}`}
      />
      <StructuredData
        data={buildBreadcrumbData([
          { name: "Home", url: "https://luxeshutters.lovable.app/" },
          { name: "Services", url: "https://luxeshutters.lovable.app/services" },
          { name: data.title, url: `https://luxeshutters.lovable.app/${data.slug}` },
        ])}
        id="ld-breadcrumb"
      />
      <Header />

      {/* Hero */}
      <section className="bg-secondary/50 pt-32 pb-14 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              <MapPin className="w-3.5 h-3.5 inline mr-1" />{data.city}, NSW
            </span>
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
              {data.heroHeading}
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">{data.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2">
                <Calendar className="h-4 w-4" />{data.ctaText}
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1800465893" className="gap-2"><Phone className="h-4 w-4" />Call 1800 465 893</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={image}
              alt={`${data.product} installation in ${data.city} NSW`}
              className="rounded-2xl shadow-card object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={ref} className={`py-16 md:py-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-8">
            Why Choose {data.product} for Your {data.city} Home?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-6">
            Our Installation Process in {data.city}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{data.installationProcess}</p>

          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-6">
            Trusted by {data.city} Homeowners
          </h2>
          <p className="text-muted-foreground leading-relaxed">{data.localTrust}</p>
        </div>
      </section>

      {/* CTA + Internal Links */}
      <section className="bg-primary/5 py-14 md:py-18 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Book a free in-home measure and quote in {data.city}. No obligation — we come to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2">
              <Calendar className="h-4 w-4" />{data.ctaText}
            </Button>
            <Link to="/contact"><Button variant="outline" size="lg">Speak With Our Team</Button></Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/services" className="text-primary font-medium hover:underline">View All Services</Link>
            <span className="text-muted-foreground">·</span>
            <Link to={`/services#${data.productSlug}`} className="text-primary font-medium hover:underline">
              Learn More About {data.product}
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link to="/gallery" className="text-primary font-medium hover:underline">Browse Our Gallery</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
