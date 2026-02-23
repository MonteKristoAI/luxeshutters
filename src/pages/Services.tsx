import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import serviceShutters from "@/assets/service-shutters.jpg";
import serviceBlinds from "@/assets/service-blinds.jpg";
import serviceCurtains from "@/assets/service-curtains.jpg";
import serviceZipscreens from "@/assets/service-zipscreens.jpg";
import serviceAwnings from "@/assets/service-awnings.jpg";
import serviceRollerShutters from "@/assets/service-roller-shutters.jpg";

const SERVICES = [
  {
    id: "shutters",
    title: "Premium Shutters",
    pill: "Shutters",
    image: serviceShutters,
    summary: "Our shutters combine timeless elegance with exceptional craftsmanship, adding beauty and functionality to any space.",
    intro: "At Luxe Shutters, we take pride in offering top-quality shutters that not only elevate the aesthetics of your space but also provide practical benefits such as light control, privacy, and energy efficiency. Whether you're looking to transform your windows or create a stylish room divider, our premium shutters are the perfect solution.",
    timeline: [
      "Material & Finish — Wooden shutters create a cozy, organic ambiance with timeless elegance. Synthetic materials like vinyl offer enhanced durability and moisture resistance for bathrooms and kitchens.",
      "Style & Design — Plantation shutters have wide louvers for a classic, elegant look with excellent light and privacy control. Contemporary designs with clean lines add a sleek, modern touch.",
      "Budget Considerations — High-quality shutters may require a larger initial investment but offer superior durability and longevity. Custom finishes or unique designs can affect the price — we help you find the right balance.",
    ],
    goodToKnow: ["Custom-made to fit any window shape or size", "Available in timber, PVC, and aluminium", "Increases property value and street appeal"],
  },
  {
    id: "blinds",
    title: "Roller Blinds",
    pill: "Blinds",
    image: serviceBlinds,
    summary: "Achieve privacy and light control with our wide selection of stylish and affordable blinds.",
    intro: "Luxe is your trusted partner for premium, stylish, and purpose-driven window covering solutions. We specialize in a comprehensive range of blinds, including roller blinds, venetian blinds, and vertical blinds, designed to meet your unique preferences and needs. Our goal is to transform your living spaces with blinds that seamlessly combine elegance with superior light management.",
    timeline: [
      "Light Control — Adjust the amount of natural light entering a room. 3D Shades and Dual Shades let you control solid and transparent panels for lighting and privacy.",
      "Privacy Control — Adjust visibility from outside. Dual Shades let you expose a view through transparent sections or close strips for complete privacy.",
      "Durability — High-quality fabrics designed to withstand harsh Australian conditions, making them a long-lasting investment.",
      "Energy Efficiency — Control natural light to regulate room temperature, reducing heating and cooling costs.",
      "UV Protection — Innovative translucent fabric provides UV ray protection while still allowing natural light in.",
    ],
    goodToKnow: ["Short lead time of only 2–3 weeks", "Australian made to the highest standards", "12-month limited warranty included"],
  },
  {
    id: "curtains",
    title: "Blockout & Sheer Curtains",
    pill: "Curtains",
    image: serviceCurtains,
    summary: "Add elegance and comfort to your home with our luxurious and functional blockout and sheer curtains.",
    intro: "Curtains are a classic and elegant window treatment option that can transform the look and feel of any room. They come in a range of styles, colours, and patterns to suit any interior design style.",
    timeline: [
      "Improved Sleep Quality — Blockout curtains block light and noise, creating a peaceful environment that promotes better sleep.",
      "Protection from UV Rays — Block harmful UV rays from damaging your furniture, flooring, and belongings.",
      "Enhanced Privacy & Security — An extra layer of privacy by blocking the view from outside your home.",
      "Reduced Outside Noise — Thick blockout curtains absorb sound, creating a more peaceful home environment.",
    ],
    goodToKnow: ["Easy to clean — most can be machine-washed or dry-cleaned", "Wide range of fabrics, patterns, and colours for personalized style", "Cost-effective with increased home value"],
  },
  {
    id: "zipscreens",
    title: "Zipscreens",
    pill: "Zipscreens",
    image: serviceZipscreens,
    summary: "Create a comfortable and private outdoor area with our sleek and versatile zip guide screens.",
    intro: "At Luxe Shutters, we take immense pride in being your premier destination for high-quality window solutions and innovative zipscreens. Our mission is simple yet profound: to provide you with the finest products that combine functionality and aesthetics seamlessly.",
    timeline: [
      "Privacy Control — Act as a barrier against prying eyes, allowing you to enjoy your outdoor space in peace.",
      "Climate Control — A buffer against harsh weather, providing protection against wind, rain, and excessive sunlight year-round.",
      "Energy Efficient — Regulate temperature in your outdoor space, reducing the need for air conditioning or heating.",
      "Stylish Design — Available in a variety of colours, materials, and designs that integrate seamlessly into your architecture.",
      "Versatility — Fully enclose your space, create partial enclosures, or roll up completely when not needed.",
    ],
    goodToKnow: ["Low maintenance and hassle-free", "Durable and long-lasting in harsh outdoor conditions", "Increases property value"],
  },
  {
    id: "awnings",
    title: "External Window Awnings",
    pill: "Awnings",
    image: serviceAwnings,
    summary: "Extend your living space and create an outdoor oasis with our range of stylish external window awnings.",
    intro: "External window awnings are a great way to extend your living space and create an outdoor oasis. These window awnings come in a range of styles, from retractable to fixed, and can be customized to fit any outdoor space.",
    timeline: ["On-site consultation and measurement", "Style and fabric selection", "Engineering and structural assessment", "Custom manufacturing", "Professional installation", "Operation and care guide"],
    goodToKnow: ["Retractable and fixed options available", "Reduces indoor temperatures significantly", "Weather-resistant fabrics and frames"],
  },
  {
    id: "security-roller-shutters",
    title: "Security Roller Shutters",
    pill: "Security",
    image: serviceRollerShutters,
    summary: "Designed to protect your windows and doors, our shutters offer a robust defense against intruders, while adding privacy and insulation.",
    intro: "Our security roller shutters provide peace of mind with robust protection against break-ins, storms, and extreme weather. They also offer excellent insulation, noise reduction, and complete light block-out when closed.",
    timeline: ["Security assessment and consultation", "Product and colour selection", "Precise measurement", "Custom manufacturing", "Professional installation", "Motor setup and security testing"],
    goodToKnow: ["Insurance-approved security solution", "Excellent noise and thermal insulation", "Motorised with key-switch or remote control"],
  },
];

const TRUST_POINTS = [
  { icon: MessageSquare, text: "Clear, jargon-free communication" },
  { icon: Shield, text: "Licensed and insured" },
  { icon: Zap, text: "Quality craftsmanship" },
  { icon: ClipboardList, text: "Free in-home measurements" },
];

const FAQS = [
  {
    q: "How long does installation take?",
    a: "Most standard installations take 1–3 hours per window. Larger projects like whole-home shutters or zipscreens may take 1–2 days. We provide detailed timelines during your consultation.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. In-home consultations and estimates are completely free with no obligation. We provide detailed written proposals with transparent pricing.",
  },
  {
    q: "What products do you recommend for maximum privacy?",
    a: "Shutters and security roller shutters offer the best privacy. Block-out blinds and curtains with thermal lining are also excellent options for bedrooms and living areas.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We're fully licensed and insured with experienced installers on every project.",
  },
  {
    q: "Do you offer motorised options?",
    a: "Yes! Most of our products are available with motorised operation, including smart-home integration with remotes, wall switches, or app control.",
  },
  {
    q: "What about warranty coverage?",
    a: "All our products come with manufacturer warranties. We also provide a workmanship warranty on every installation. Ask about specific coverage during your consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer flexible payment options on qualifying projects. Ask about our payment plans during your consultation.",
  },
  {
    q: "Can you match my existing decor?",
    a: "Absolutely. We offer a huge range of colours, fabrics, and finishes across all product lines. Bring in a sample or photo and we'll find the perfect match.",
  },
];

function ServiceCard({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <button
      onClick={() => { document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
      className="group text-left rounded-2xl border border-border/60 bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
      </div>
    </button>
  );
}

function ServiceDetail({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const navigate = useNavigate();
  const imageLeft = index % 2 === 0;

  return (
    <section ref={ref} id={service.id} className={`scroll-mt-36 py-16 md:py-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${index > 0 ? "border-t border-border/30" : ""}`}>
      <div className={`container mx-auto px-4 lg:px-8 grid gap-10 lg:gap-16 items-start ${imageLeft ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-[1.15fr_1fr]"}`}>
        <div className={`${imageLeft ? "" : "lg:order-2"}`}>
          <img src={service.image} alt={service.title} className="w-full rounded-2xl object-cover shadow-card aspect-[4/3]" />
        </div>
        <div className={`${imageLeft ? "" : "lg:order-1"}`}>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{service.intro}</p>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Key details</h3>
            <ol className="space-y-3">
              {service.timeline.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{i + 1}</span>
                  <span className="text-sm text-foreground pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Good to know</h3>
            <ul className="space-y-2">
              {service.goodToKnow.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/50" />{point}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a free quote</Button>
            <Link to="/contact"><Button variant="outline" size="lg">Contact us</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  useEffect(() => {
    document.title = "Our Services | Luxe Shutters";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Premium shutters, blinds, curtains, zipscreens, awnings, and security roller shutters — custom-made and professionally installed.";
    if (meta) { meta.setAttribute("content", content); } else { const tag = document.createElement("meta"); tag.name = "description"; tag.content = content; document.head.appendChild(tag); }
  }, []);

  useEffect(() => {
    const ids = SERVICES.map((s) => s.id);
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((e) => e.isIntersecting); if (visible.length > 0) setActiveId(visible[0].target.id); }, { rootMargin: "-30% 0px -60% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-cat="${activeId}"]`) as HTMLElement | null;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-secondary/50 pt-32 pb-14 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Our Services</span>
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">Premium shutters, blinds & curtains, installed right.</h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">From plantation shutters and zipscreens to curtains and security roller shutters — we'll measure your home, recommend the right products, and install everything with precision.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a free quote</Button>
              
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={serviceShutters} alt="Luxe Shutters showroom" className="rounded-2xl shadow-card object-cover w-full aspect-[4/3]" />
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-30 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div ref={navRef} className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 lg:px-8 scrollbar-none">
          {SERVICES.map((s) => (
            <button key={s.id} data-cat={s.id} onClick={() => scrollTo(s.id)} className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeId === s.id ? "bg-primary text-primary-foreground" : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{s.pill}</button>
          ))}
        </div>
      </div>

      <section className="container mx-auto px-4 lg:px-8 py-14 md:py-18">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (<ServiceCard key={s.id} service={s} />))}
        </div>
      </section>

      {SERVICES.map((s, i) => (<ServiceDetail key={s.id} service={s} index={i} />))}

      <section className="bg-secondary/40 py-14 md:py-18">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Quality craftsmanship. No surprises.</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {TRUST_POINTS.map((tp, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><tp.icon className="h-5 w-5 text-primary" /></div>
                <p className="text-sm font-medium text-foreground">{tp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={serviceShutters} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(210 20% 95% / 0.92), hsl(210 18% 97% / 0.94))' }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground sm:text-3xl mb-10">Common questions</h2>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/60 bg-card px-5 shadow-sm">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-14 md:py-18 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Ready to transform your home?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Request a free quote and we'll provide a detailed estimate before any work begins.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a free quote</Button>
            <Link to="/contact"><Button variant="outline" size="lg">Contact us</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
