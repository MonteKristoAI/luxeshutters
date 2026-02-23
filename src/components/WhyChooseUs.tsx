import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import whyChooseBg from "@/assets/why-choose-landscaping.jpg";

const values = [
{ number: "01", title: "Outdoor aesthetics expertise", body: "Every landscaping project starts with a detailed site evaluation. We analyze your property, soil, sunlight, and goals to design an outdoor space that's both beautiful and functional." },
{ number: "02", title: "Certified professionals", body: "Our team includes certified landscape professionals, licensed contractors, and trained horticulturists who take pride in precision. Every plant, stone, and feature is placed with care." },
{ number: "03", title: "Licensed & insured", body: "We're fully licensed landscaping contractors with comprehensive liability and workers' comp coverage. Your home and investment are protected." },
{ number: "04", title: "Transparent pricing", body: "You'll know exactly what your project costs before we start. No surprises, no hidden fees — just clear communication and honest estimates." },
{ number: "05", title: "Long-term reliability", body: "Quality materials, expert craftsmanship, and a final walkthrough you'll love. We use premium plants, pavers, and materials and stand behind every project we complete." }];


export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(210 20% 95%), hsl(210 18% 97%))' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img src={whyChooseBg} alt="" className="w-full h-full object-cover opacity-[0.55]" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(210 20% 95% / 0.88), hsl(210 18% 97% / 0.90))' }} />
      </div>
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Why MonteKristo Landscaping</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-[1.15] mb-6">
            Built on expertise,<br className="hidden md:block" /> not shortcuts.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            We started MonteKristo Landscaping because we believed outdoor spaces could be more beautiful, more functional, and a whole lot more professionally maintained.
          </p>
        </div>

        <div className={`border-t border-border scroll-fade ${isVisible ? "visible" : ""}`}>
          {values.map((item) =>
          <div key={item.number} className="grid grid-cols-1 md:grid-cols-[4rem_1fr_1.5fr] gap-4 md:gap-8 py-8 md:py-10 border-b border-border items-start">
              <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground/15">{item.number}</span>
              <h3 className="text-xl md:text-2xl font-medium text-foreground font-sans">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{item.body}</p>
            </div>
          )}
        </div>

        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden scroll-fade ${isVisible ? "visible" : ""}`}>
          {[
          { value: "4.9 / 5", label: "Average customer rating" },
          { value: "15+ yrs", label: "Landscaping experience" },
          { value: "2,000+", label: "Projects completed" }].
          map((stat) =>
          <div key={stat.label} className="bg-card p-10 text-center">
              <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground tracking-wide">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}