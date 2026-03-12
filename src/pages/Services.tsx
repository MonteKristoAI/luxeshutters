import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  ClipboardList,
  ArrowRight } from
"lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import StructuredData, { buildBreadcrumbData } from "@/components/StructuredData";

import serviceShutters from "@/assets/service-shutters.jpg";
import serviceBlinds from "@/assets/service-blinds.jpg";
import serviceCurtains from "@/assets/service-curtains.jpg";
import serviceZipscreens from "@/assets/service-zipscreens.jpg";
import serviceAwnings from "@/assets/service-awnings.jpg";
import serviceRollerShutters from "@/assets/service-roller-shutters.jpg";

const SERVICES = [
{
  id: "shutters",
  title: "Plantation Shutters",
  pill: "Shutters",
  image: serviceShutters,
  summary: "Premium plantation shutters custom-made and professionally installed across Wagga Wagga, Griffith, Temora and Regional NSW homes.",
  intro: "Plantation shutters are one of the most popular and enduring window furnishing choices for Australian homes — and for good reason. At Luxe Shutters, we supply and install premium plantation shutters across Wagga Wagga, Griffith, Temora, Young, and all of Regional NSW.\n\nOur shutters are available in timber, PVC, and aluminium, each offering distinct advantages for different rooms and budgets. Timber shutters deliver a warm, natural aesthetic that suits heritage and modern homes alike. PVC shutters are moisture-resistant, making them ideal for bathrooms, kitchens, and laundries. Aluminium options provide maximum durability for high-traffic areas.\n\nPlantation shutters give you precise control over light, airflow, and privacy — essential for the harsh Australian sun. They also provide excellent thermal insulation, helping reduce energy costs during both hot summers and cool winters in Regional NSW.\n\nOur installation process is straightforward: we visit your home with our mobile showroom, take precise measurements, help you choose the perfect style and colour, then custom-manufacture and professionally install your shutters. Most installations are completed within 1–3 hours per window.\n\nWith over 10 years of industry experience and hundreds of homes transformed, Luxe Shutters is the trusted choice for plantation shutters in Regional NSW. Book your free in-home measure and quote today.",
  timeline: ["Free in-home consultation & measurement", "Material and style selection", "Custom manufacturing to your specs", "Professional installation", "Final adjustments and quality check", "Care and maintenance walkthrough"],
  goodToKnow: ["Custom-made to fit any window shape or size", "Available in timber, PVC, and aluminium", "Increases property value and street appeal"]
},
{
  id: "blinds",
  title: "Blinds",
  pill: "Blinds",
  image: serviceBlinds,
  summary: "Versatile roller, venetian, and vertical blinds professionally installed for homes and businesses across Regional NSW.",
  intro: "Whether you're after sleek roller blinds for a modern look or classic venetian blinds for timeless appeal, Luxe Shutters offers a comprehensive range of blinds installation services across Wagga Wagga, Griffith, Temora, and Regional NSW.\n\nOur blinds range includes roller blinds (in sunscreen, block-out, and translucent fabrics), venetian blinds (timber and aluminium), vertical blinds, and roman blinds. Each option is designed to suit different rooms, light conditions, and style preferences.\n\nBlinds are one of the most versatile window coverings available for Australian homes. Sunscreen roller blinds maintain your view while reducing UV and glare — perfect for living rooms and offices. Block-out blinds are ideal for bedrooms, providing complete darkness and excellent thermal insulation. Venetian blinds offer adjustable light control and a clean, contemporary look.\n\nAll our blinds come with motorised and smart-home compatible options, letting you control your window coverings via remote, wall switch, or smartphone app. Child-safe cordless designs are standard across our range.\n\nOur process is simple: free in-home consultation, precise measurement, fabric and style selection with samples, custom manufacturing, and professional installation. Blinds include a 12-month limited warranty.\n\nServing homes and businesses across Wagga Wagga, Griffith, Temora, Young, Cootamundra, and all of Regional NSW. Get your free measure and quote today.",
  timeline: ["In-home consultation and window assessment", "Style and fabric selection", "Precise measurement", "Custom manufacturing", "Professional installation", "Operation walkthrough"],
  goodToKnow: ["Motorised and smart-home compatible options", "Block-out and sunscreen fabrics available", "Child-safe designs as standard"]
},
{
  id: "curtains",
  title: "Custom Curtains",
  pill: "Curtains",
  image: serviceCurtains,
  summary: "From sheer voiles to luxurious block-out drapes — custom curtains tailored for Regional NSW homes.",
  intro: "Custom curtains add warmth, texture, and personality to any room. At Luxe Shutters, we offer an extensive range of curtain styles, fabrics, and heading options — all custom-tailored and professionally installed across Wagga Wagga, Griffith, Temora, and Regional NSW.\n\nOur curtain range includes S-fold (wave), pinch pleat, eyelet, and pencil pleat heading styles. Choose from hundreds of fabrics — from lightweight sheer voiles that filter natural light beautifully, to heavy block-out drapes that provide complete privacy, darkness, and thermal insulation.\n\nCurtains are particularly effective in Australian homes for managing temperature. Thermal-lined curtains can reduce heat gain in summer and heat loss in winter, making them an energy-efficient choice for Regional NSW's variable climate.\n\nWe also offer motorised curtain tracks, allowing you to open and close your curtains with a remote or smart-home system — ideal for large windows, high ceilings, or hard-to-reach areas.\n\nOur process includes a design consultation where we bring fabric samples to your home, precise measurement, custom manufacturing, professional fitting and hanging, and final styling adjustments to ensure a perfect drape.\n\nWhether you want sheer elegance in the living room or complete block-out in the bedroom, Luxe Shutters delivers premium custom curtains across Regional NSW. Book a free home consultation today.",
  timeline: ["Design consultation", "Fabric selection and sampling", "Precise window measurement", "Custom tailoring and manufacturing", "Professional fitting and hanging", "Styling and final adjustments"],
  goodToKnow: ["Huge range of fabrics and colours", "S-fold, pinch pleat, and eyelet heading styles", "Block-out and thermal lining options"]
},
{
  id: "zipscreens",
  title: "Zipscreens",
  pill: "Zipscreens",
  image: serviceZipscreens,
  summary: "Wind-rated outdoor zipscreen blinds that transform your patio — installed across Wagga Wagga, Griffith, and Regional NSW.",
  intro: "Zipscreens are the premium solution for transforming outdoor living areas into year-round usable spaces. At Luxe Shutters, we supply and install zipscreens across Wagga Wagga, Griffith, Temora, Young, and all of Regional NSW.\n\nUnlike traditional outdoor blinds, zipscreens use a patented zip-guided channel system that locks the fabric in place on both sides. This provides superior wind resistance (rated for exposed areas), complete insect protection, and up to 99% UV blocking — all while maintaining your view and natural airflow.\n\nZipscreens are ideal for patios, alfresco dining areas, pergolas, verandahs, and carports. They're particularly popular in Regional NSW where outdoor entertaining is a way of life, but summer heat and insects can be challenging.\n\nAll our zipscreens come with motorised operation as standard, with options for remote control, wall switches, or smart-home integration via app. Choose from a range of mesh densities — from near-transparent for maintaining views to block-out for maximum shade and privacy.\n\nOur installation process includes a site assessment, product and colour selection, precise measurement of openings, custom manufacturing, professional installation, and motor programming and testing.\n\nProtect your outdoor spaces while adding value to your home. Contact Luxe Shutters for a free zipscreen consultation and quote.",
  timeline: ["Site assessment and consultation", "Product and colour selection", "Precise measurement of openings", "Custom manufacturing", "Professional installation", "Motor programming and testing"],
  goodToKnow: ["Wind-rated for exposed areas", "UV protection up to 99%", "Motorised with remote or smart-home control"]
},
{
  id: "awnings",
  title: "Awnings",
  pill: "Awnings",
  image: serviceAwnings,
  summary: "Retractable and fixed awnings providing stylish shade for homes across Wagga Wagga, Griffith, Temora and Regional NSW.",
  intro: "Awnings are a practical and stylish way to extend your outdoor living space while protecting your home from the harsh Australian sun. Luxe Shutters supplies and installs retractable and fixed awnings across Wagga Wagga, Griffith, Temora, and all of Regional NSW.\n\nOur awning range includes folding arm awnings, straight drop awnings, pivot arm awnings, and fixed canopy awnings. Each type is designed for different applications — from shading large deck areas to protecting windows from direct sun.\n\nAwnings can reduce indoor temperatures by up to 15°C by blocking direct sunlight before it reaches your windows. This makes them one of the most energy-efficient external shading solutions for Regional NSW homes, reducing air conditioning costs significantly during summer.\n\nWe use weather-resistant fabrics and powder-coated aluminium frames built to withstand the harsh Australian climate. Motorised options are available for all retractable awnings, with wind sensors that automatically retract the awning in high winds.\n\nOur installation process covers on-site consultation and measurement, style and fabric selection, engineering and structural assessment where needed, custom manufacturing, professional installation, and a complete operation and care guide.\n\nAdd shade, style, and value to your home with professionally installed awnings from Luxe Shutters. Book your free consultation today.",
  timeline: ["On-site consultation and measurement", "Style and fabric selection", "Engineering and structural assessment", "Custom manufacturing", "Professional installation", "Operation and care guide"],
  goodToKnow: ["Retractable and fixed options available", "Reduces indoor temperatures significantly", "Weather-resistant fabrics and frames"]
},
{
  id: "security-roller-shutters",
  title: "Security Roller Shutters",
  pill: "Security",
  image: serviceRollerShutters,
  summary: "Robust security roller shutters providing protection, insulation, and privacy for homes across Wagga Wagga, Temora and Regional NSW.",
  intro: "Security roller shutters provide comprehensive protection for your home against break-ins, storms, extreme weather, and noise. Luxe Shutters supplies and installs security roller shutters across Wagga Wagga, Griffith, Temora, Young, and all of Regional NSW.\n\nOur roller shutters are manufactured from extruded aluminium profiles filled with polyurethane foam, providing exceptional strength while maintaining lightweight operation. When closed, they create a solid barrier that deters intruders and protects windows from storm damage, hail, and flying debris.\n\nBeyond security, roller shutters offer outstanding thermal insulation — reducing heat gain in summer and heat loss in winter by creating an insulating air pocket between the shutter and your window. Many Regional NSW homeowners report noticeable reductions in energy bills after installation.\n\nNoise reduction is another significant benefit. Roller shutters can reduce external noise by up to 50%, making them ideal for homes near busy roads or in areas with ambient noise.\n\nAll our roller shutters come with motorised operation, controllable via key switch, remote control, or smart-home integration. Manual override is included for power outage situations.\n\nOur installation includes a security assessment, product and colour selection, precise measurement, custom manufacturing, professional installation, and complete motor setup and security testing.\n\nProtect your Regional NSW home with professionally installed security roller shutters. Contact us for a free consultation and quote.",
  timeline: ["Security assessment and consultation", "Product and colour selection", "Precise measurement", "Custom manufacturing", "Professional installation", "Motor setup and security testing"],
  goodToKnow: ["Insurance-approved security solution", "Excellent noise and thermal insulation", "Motorised with key-switch or remote control"]
}];


const TRUST_POINTS = [
{ icon: MessageSquare, text: "Clear, jargon-free communication" },
{ icon: Shield, text: "Licensed and insured" },
{ icon: Zap, text: "Quality craftsmanship" },
{ icon: ClipboardList, text: "Free in-home measure & quote" }];


const FAQS = [
{
  q: "How much do plantation shutters cost in NSW?",
  a: "Plantation shutter pricing varies based on window size, material, and style. Most Regional NSW homeowners invest $300–$700 per panel installed. We provide free in-home measure and quote consultations with completely transparent pricing."
},
{
  q: "How long does installation take?",
  a: "Most standard installations take 1–3 hours per window. Larger projects like whole-home shutters or zipscreens may take 1–2 days. We provide detailed timelines during your consultation."
},
{
  q: "Do you offer free estimates?",
  a: "Yes. In-home consultations and estimates are completely free with no obligation. We bring our mobile showroom to your home so you can see and feel the products in your own space."
},
{
  q: "What products do you recommend for maximum privacy?",
  a: "Plantation shutters and security roller shutters offer the best privacy. Block-out blinds and curtains with thermal lining are also excellent options for bedrooms and living areas across Regional NSW."
},
{
  q: "Are you licensed and insured?",
  a: "Absolutely. We're fully licensed and insured with experienced installers on every project across Wagga Wagga, Griffith, Temora, and all of Regional NSW."
},
{
  q: "Do you offer motorised options?",
  a: "Yes! Most of our products are available with motorised operation, including smart-home integration with remotes, wall switches, or app control. Motorisation is available for blinds, curtains, zipscreens, awnings, and roller shutters."
},
{
  q: "What about warranty coverage?",
  a: "All our products come with manufacturer warranties. Blinds include a 12-month limited warranty. We also provide a workmanship warranty on every installation. Ask about specific coverage during your consultation."
},
{
  q: "Do you offer financing?",
  a: "Yes. We offer flexible payment options on qualifying projects. A 50% deposit is required when your order is confirmed, with the balance due upon completion. Ask about our payment plans during your consultation."
},
{
  q: "Can you match my existing decor?",
  a: "Absolutely. We offer a huge range of colours, fabrics, and finishes across all product lines. Bring in a sample or photo and we'll find the perfect match."
}];


function ServiceCard({ service }: {service: (typeof SERVICES)[0];}) {
  return (
    <button
      onClick={() => {document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth", block: "start" });}}
      className="group text-left rounded-2xl border border-border/60 bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring">

      <div className="aspect-[16/10] overflow-hidden">
        <img src={service.image} alt={`${service.title} installation in Regional NSW home`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
      </div>
    </button>);

}

function ServiceDetail({ service, index }: {service: (typeof SERVICES)[0];index: number;}) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const navigate = useNavigate();
  const imageLeft = index % 2 === 0;

  return (
    <section ref={ref} id={service.id} className={`scroll-mt-36 py-16 md:py-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${index > 0 ? "border-t border-border/30" : ""}`}>
      <div className={`container mx-auto px-4 lg:px-8 grid gap-10 lg:gap-16 items-start ${imageLeft ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-[1.15fr_1fr]"}`}>
        <div className={`${imageLeft ? "" : "lg:order-2"}`}>
          <img src={service.image} alt={`${service.title} installed in a Regional NSW home`} className="w-full rounded-2xl object-cover shadow-card aspect-[4/3]" />
        </div>
        <div className={`${imageLeft ? "" : "lg:order-1"}`}>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4">
            {service.intro.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What to expect</h3>
            <ol className="space-y-3">
              {service.timeline.map((step, i) =>
              <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{i + 1}</span>
                  <span className="text-sm text-foreground pt-0.5">{step}</span>
                </li>
              )}
            </ol>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Good to know</h3>
            <ul className="space-y-2">
              {service.goodToKnow.map((point, i) =>
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/50" />{point}</li>
              )}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a Free Measure & Quote</Button>
            <Link to="/contact"><Button variant="outline" size="lg">Speak With Our Team</Button></Link>
          </div>
        </div>
      </div>
    </section>);

}

export default function Services() {
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(SERVICES[0].id);


  useEffect(() => {
    const ids = SERVICES.map((s) => s.id);
    const observer = new IntersectionObserver((entries) => {const visible = entries.filter((e) => e.isIntersecting);if (visible.length > 0) setActiveId(visible[0].target.id);}, { rootMargin: "-30% 0px -60% 0px" });
    ids.forEach((id) => {const el = document.getElementById(id);if (el) observer.observe(el);});
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-cat="${activeId}"]`) as HTMLElement | null;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  const scrollTo = (id: string) => {document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });};

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Shutters, Blinds & Curtains Installation | Luxe Shutters Regional NSW"
        description="Premium plantation shutters, blinds, curtains, zipscreens, awnings and security roller shutters — custom-made and professionally installed across Wagga Wagga, Griffith, Temora and Regional NSW."
        canonical="/services"
      />
      <StructuredData data={buildBreadcrumbData([{ name: "Home", url: "https://luxeshutters.lovable.app/" }, { name: "Services", url: "https://luxeshutters.lovable.app/services" }])} id="ld-breadcrumb" />
      <Header />

      <section className="bg-secondary/50 pt-32 pb-14 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Our Services</span>
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">Premium shutters, blinds & curtains installed across Regional NSW.</h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">From plantation shutters and zipscreens to curtains and security roller shutters — we measure your home, recommend the right products, and install everything with precision. Serving Wagga Wagga, Griffith, Temora, Young and surrounding areas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a Free Measure & Quote</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={serviceShutters} alt="Premium plantation shutters installed in a Regional NSW living room" className="rounded-2xl shadow-card object-cover w-full aspect-[4/3]" />
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-30 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div ref={navRef} className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 lg:px-8 scrollbar-none">
          {SERVICES.map((s) =>
          <button key={s.id} data-cat={s.id} onClick={() => scrollTo(s.id)} className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeId === s.id ? "bg-primary text-primary-foreground" : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{s.pill}</button>
          )}
        </div>
      </div>

      <section className="container mx-auto px-4 lg:px-8 py-14 md:py-18">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </section>

      {SERVICES.map((s, i) => <ServiceDetail key={s.id} service={s} index={i} />)}

      <FAQSection />

      <section className="bg-primary/5 py-14 md:py-18 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Ready to transform your home?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Book a free in-home measure and quote. No obligation — we come to you across Wagga Wagga, Griffith, Temora, and Regional NSW.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get Your Free Measure & Quote</Button>
            <Link to="/contact"><Button variant="outline" size="lg">Speak With Our Team</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}
