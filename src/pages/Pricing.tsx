import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Phone, Clock, Info } from "lucide-react";
import pricingBg from "@/assets/pricing-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinicData";
import { PRICING_CATEGORIES, PRICING_NOTES, type PricingCategory } from "@/data/pricingData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function CategoryCard({ category }: {category: PricingCategory;}) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <div ref={ref} id={category.id} className={`scroll-mt-36 rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/40 px-6 py-5 sm:px-8">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl font-sans">{category.title}</h2>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{category.fromPrice}</span>
      </div>
      <p className="px-6 pt-4 text-sm italic text-muted-foreground sm:px-8">{category.notes}</p>
      <div className="hidden sm:block overflow-x-auto px-6 pb-6 pt-4 sm:px-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <th className="pb-2 pr-4 font-medium">Service</th><th className="pb-2 pr-4 font-medium">Estimate</th><th className="pb-2 pr-4 font-medium">Typical time</th><th className="pb-2 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, i) =>
            <tr key={i} className="border-b border-border/20 last:border-0">
                <td className="py-3 pr-4 font-medium text-foreground">{item.item}{item.includes && <span className="mt-0.5 block text-xs text-muted-foreground">Includes: {item.includes}</span>}</td>
                <td className="py-3 pr-4 whitespace-nowrap text-foreground">{item.range}</td>
                <td className="py-3 pr-4 whitespace-nowrap text-muted-foreground"><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{item.typicalTime}</span></td>
                <td className="py-3 text-muted-foreground">{item.notes || "—"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="sm:hidden space-y-4 px-5 pb-5 pt-4">
        {category.items.map((item, i) =>
        <div key={i} className="rounded-xl bg-secondary/40 p-4">
            <p className="font-medium text-foreground">{item.item}</p>
            {item.includes && <p className="mt-0.5 text-xs text-muted-foreground">Includes: {item.includes}</p>}
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span className="font-medium text-foreground">{item.range}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3.5 w-3.5" />{item.typicalTime}</span>
            </div>
            {item.notes && <p className="mt-1.5 text-xs text-muted-foreground">{item.notes}</p>}
          </div>
        )}
      </div>
      {category.financeNote &&
      <div className="mx-6 mb-6 flex items-start gap-3 rounded-xl bg-primary/5 p-4 sm:mx-8">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><p className="text-sm text-foreground">{category.financeNote}</p>
        </div>
      }
    </div>);

}

export default function Pricing() {
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(PRICING_CATEGORIES[0].id);
  const scrollTo = (id: string) => {document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });};

  useEffect(() => {
    const ids = PRICING_CATEGORIES.map((c) => c.id);
    const observer = new IntersectionObserver((entries) => {const visible = entries.filter((e) => e.isIntersecting);if (visible.length > 0) setActiveId(visible[0].target.id);}, { rootMargin: "-30% 0px -60% 0px" });
    ids.forEach((id) => {const el = document.getElementById(id);if (el) observer.observe(el);});
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-cat="${activeId}"]`) as HTMLElement | null;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: `url(${pricingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative z-10">
      <Header />
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${pricingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-white/90">Our Pricing</span>
          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">Transparent, estimate-based pricing</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Free on-site consultations before every project. No hidden fees, no surprises — just fair pricing for expert window and door installation.</p>
        </div>
      </section>

      <div className="sticky top-[72px] lg:top-[116px] z-30 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div ref={navRef} className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 lg:px-8 scrollbar-none">
          {PRICING_CATEGORIES.map((cat) =>
            <button key={cat.id} data-cat={cat.id} onClick={() => scrollTo(cat.id)} className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeId === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{cat.title}</button>
            )}
        </div>
      </div>

      <main className="container mx-auto space-y-8 px-4 py-12 lg:px-8">
        {PRICING_CATEGORIES.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
        <div className="rounded-2xl border border-border/40 bg-background px-6 py-5 sm:px-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Please note</h3>
          <ul className="space-y-2">
            {PRICING_NOTES.map((note, i) =>
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />{note}</li>
              )}
          </ul>
        </div>
        <section className="relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-8 sm:py-14">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${pricingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">Request a free consultation and we'll provide a detailed estimate before any work begins.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={() => navigate("/#booking")} className="gap-2"><Calendar className="h-4 w-4" />Schedule consultation</Button>
            <a href={`tel:${CLINIC.phone.replace(/[^\d+]/g, "")}`}><Button variant="outline" size="lg" className="w-full gap-2"><Phone className="h-4 w-4" />Call {CLINIC.phone}</Button></a>
          </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>);

}