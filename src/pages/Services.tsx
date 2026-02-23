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

import windowsOffice from "@/assets/windows-office.jpg";
import serviceWindowInstall from "@/assets/service-window-install.jpg";
import serviceWindowReplace from "@/assets/service-window-replace.jpg";
import serviceDoorInstall from "@/assets/service-door-install.jpg";
import serviceSlidingDoors from "@/assets/service-sliding-doors.jpg";
import serviceEnergyWindows from "@/assets/service-energy-windows.jpg";
import serviceCustomDoors from "@/assets/service-custom-doors.jpg";
import serviceWindowRepair from "@/assets/service-window-repair.jpg";
import serviceCommercialWindows from "@/assets/service-commercial-windows.jpg";

const SERVICES = [
  {
    id: "window-installation",
    title: "Window Installation",
    pill: "Installation",
    image: serviceWindowInstall,
    summary: "Professional installation of new windows — double-hung, casement, picture, bay, and specialty shapes — fitted precisely for comfort, insulation, and curb appeal.",
    intro: "We handle every aspect of new window installation — from precise measurements and product selection to expert fitting, insulation, and trim work. Our certified installers ensure every window is level, sealed, and beautiful.",
    timeline: ["Schedule a free in-home consultation", "Window measurement and product selection", "Custom order and scheduling", "Professional installation day", "Insulation, trim, and finishing", "Final walkthrough and cleanup"],
    goodToKnow: ["All major window brands and styles available", "ENERGY STAR® certified options standard", "Includes weatherstripping and proper insulation"],
  },
  {
    id: "window-replacement",
    title: "Window Replacement",
    pill: "Replacement",
    image: serviceWindowReplace,
    summary: "Upgrade outdated, drafty, or damaged windows with modern energy-efficient units. We handle removal, fitting, insulation, and trim for a seamless finish.",
    intro: "Old windows waste energy and compromise comfort. We remove your existing windows and replace them with high-performance units that reduce energy bills, block noise, and look stunning. Every replacement includes proper insulation and interior/exterior trim.",
    timeline: ["In-home assessment and energy analysis", "Product recommendation and quote", "Custom window ordering", "Old window removal and disposal", "New window installation and sealing", "Trim, caulking, and final inspection"],
    goodToKnow: ["Most replacements completed in one day", "We dispose of all old windows and materials", "Manufacturer warranties on all products"],
  },
  {
    id: "door-installation",
    title: "Door Installation",
    pill: "Doors",
    image: serviceDoorInstall,
    summary: "Entry doors, interior doors, French doors, and patio doors — expertly installed with proper alignment, weatherstripping, and hardware for security and style.",
    intro: "A new door transforms your home's entrance, security, and energy efficiency. We install entry doors, French doors, patio doors, and interior doors with precise fitting, proper weatherstripping, and quality hardware. Every door is checked for smooth operation and a perfect seal.",
    timeline: ["Consultation and door selection", "Precise opening measurement", "Door and hardware ordering", "Old door removal", "Professional installation and alignment", "Hardware, weatherstripping, and finishing"],
    goodToKnow: ["Wide selection of materials: wood, fiberglass, steel", "Smart lock and security hardware options", "All doors include proper weatherstripping"],
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors",
    pill: "Sliding",
    image: serviceSlidingDoors,
    summary: "Smooth-gliding sliding glass doors that connect your living space to the outdoors — energy-efficient glass, durable tracks, and modern frames.",
    intro: "Sliding doors bring the outdoors in with expansive glass panels and smooth operation. We install standard sliding doors, multi-panel systems, and pocket sliding doors with energy-efficient glass, durable track systems, and modern frame options.",
    timeline: ["In-home consultation and measurement", "Product selection and configuration", "Structural assessment (if needed)", "Professional installation", "Track alignment and operation testing", "Cleanup and walkthrough"],
    goodToKnow: ["Multi-panel and pocket door options available", "Low-E and tinted glass options", "Child-safe locking mechanisms included"],
  },
  {
    id: "energy-efficient-windows",
    title: "Energy-Efficient Windows",
    pill: "Energy",
    image: serviceEnergyWindows,
    summary: "Low-E glass, argon-filled panes, and insulated frames that reduce energy bills by up to 30%. ENERGY STAR® certified options available.",
    intro: "Energy-efficient windows are one of the best investments you can make in your home. We offer Low-E coatings, argon and krypton gas fills, triple-pane options, and thermally broken frames that dramatically reduce heat transfer, UV damage, and energy costs.",
    timeline: ["Energy audit and efficiency assessment", "Product comparison and recommendations", "Window ordering with efficiency specs", "Professional installation", "Performance verification", "Energy savings documentation"],
    goodToKnow: ["Up to 30% reduction in energy bills", "UV protection for furniture and flooring", "May qualify for energy tax credits"],
  },
  {
    id: "custom-doors",
    title: "Custom Doors",
    pill: "Custom",
    image: serviceCustomDoors,
    summary: "Handcrafted and custom-sized doors in wood, fiberglass, and steel — designed to match your home's architecture and personal style.",
    intro: "When standard sizes won't do, we create custom solutions. From oversized entry doors with decorative glass to unique interior doors and arched transoms, our custom door service delivers exactly what your home needs. We work with premium materials and skilled craftsmen.",
    timeline: ["Design consultation and style selection", "Precise measurement and specifications", "Custom fabrication (4–8 weeks)", "Professional installation", "Hardware and finishing", "Final inspection and care guide"],
    goodToKnow: ["Available in wood, fiberglass, steel, and iron", "Decorative glass and sidelights available", "Custom sizing for non-standard openings"],
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    pill: "Repairs",
    image: serviceWindowRepair,
    summary: "Window seal repairs, glass replacement, hardware fixes, weatherstripping, and door realignment — keeping everything working like new.",
    intro: "Not everything needs a full replacement. We repair foggy glass, failed seals, broken hardware, stuck windows, misaligned doors, and worn weatherstripping. Our repair service extends the life of your existing windows and doors at a fraction of replacement cost.",
    timeline: ["Schedule a repair assessment", "Diagnose the issue on-site", "Provide repair options and quote", "Complete the repair", "Test operation and sealing", "Provide maintenance recommendations"],
    goodToKnow: ["Same-day repairs available for simple fixes", "We service all major window and door brands", "Preventive maintenance plans available"],
  },
  {
    id: "commercial",
    title: "Commercial Installations",
    pill: "Commercial",
    image: serviceCommercialWindows,
    summary: "Storefront windows, commercial entry systems, and large-scale glazing projects — built to code with professional-grade materials.",
    intro: "From retail storefronts to office buildings, we handle commercial window and door installations with professional-grade materials and code-compliant workmanship. Our team manages projects of all sizes with minimal disruption to your business operations.",
    timeline: ["Site assessment and scope evaluation", "Product specification and engineering", "Permitting and compliance review", "Phased installation plan", "Professional installation", "Final inspection and documentation"],
    goodToKnow: ["ADA-compliant door systems", "Commercial-grade security hardware", "After-hours installation available"],
  },
];

const TRUST_POINTS = [
  { icon: MessageSquare, text: "Clear, jargon-free communication" },
  { icon: Shield, text: "Licensed and insured" },
  { icon: Zap, text: "Energy-efficiency experts" },
  { icon: ClipboardList, text: "Free in-home measurements" },
];

const FAQS = [
  {
    q: "How long does a window replacement take?",
    a: "Most single windows take 1–2 hours. A full-home replacement (10–20 windows) typically takes 2–4 days. We provide detailed timelines during your consultation.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. In-home consultations and estimates are completely free with no obligation. We provide detailed written proposals with transparent pricing.",
  },
  {
    q: "How much do new windows cost?",
    a: "Costs vary by window type, size, and glass options. Standard replacements start at $350/window, bay windows from $1,500, and full-home packages from $5,000. We provide personalized quotes during your consultation.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We're licensed contractors with full liability insurance, workers' compensation coverage, and certified installers on every crew.",
  },
  {
    q: "Will new windows really save energy?",
    a: "Yes. Energy-efficient windows with Low-E coatings and argon gas fills typically reduce energy bills by 20–30%. Many of our customers see even greater savings, especially when replacing old single-pane windows.",
  },
  {
    q: "What about warranty coverage?",
    a: "All our products come with manufacturer warranties (typically 10–25 years). We also provide a workmanship warranty on every installation. Ask about specific coverage during your consultation.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer $0-down financing options on qualifying projects over $3,000. Ask about our lending partners during your consultation.",
  },
  {
    q: "What window brands do you carry?",
    a: "We work with all major brands including Andersen, Pella, Marvin, Milgard, and more. We'll recommend the best options based on your budget, style, and performance needs.",
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
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What to expect</h3>
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
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a free estimate</Button>
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
    document.title = "Window & Door Services | MonteKristo Windows & Doors";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Window installation, replacement, door installation, sliding doors, energy-efficient windows, custom doors, repairs, and commercial installations — serving the Phoenix metro area.";
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
            <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">Premium windows & doors, installed right.</h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">From window replacement and door installation to energy-efficient upgrades — we'll measure your home, recommend the right products, and install everything with certified precision.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Get a free estimate</Button>
              <Link to="/pricing"><Button variant="outline" size="lg">View pricing</Button></Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={windowsOffice} alt="MonteKristo Windows & Doors showroom" className="rounded-2xl shadow-card object-cover w-full aspect-[4/3]" />
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
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Quality craftsmanship. Transparent pricing. No surprises.</h2>
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
          <img src={serviceWindowInstall} alt="" className="w-full h-full object-cover" />
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
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Ready to upgrade your windows & doors?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Request a free consultation and we'll provide a detailed estimate before any work begins.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Schedule consultation</Button>
            <Link to="/contact"><Button variant="outline" size="lg">Contact us</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
