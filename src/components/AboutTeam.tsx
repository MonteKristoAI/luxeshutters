import { Award, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import landscapingOffice from "@/assets/landscaping-office.jpg";

const CITIES = [
"Scottsdale", "Phoenix", "Tempe", "Mesa",
"Chandler", "Gilbert", "Peoria", "Glendale",
"Paradise Valley", "Fountain Hills", "Cave Creek", "Carefree",
"Surprise", "Goodyear", "Avondale", "Litchfield Park"];


const credentials = [
"Certified Installers",
"Fully Licensed & Insured",
"Premium Product Partners",
"BBB A+ Rated",
"Workers' Comp Coverage"];


export default function AboutTeam() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img src={landscapingOffice} alt="" className="w-full h-full object-cover blur-[2px] scale-105" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(210 20% 97% / 0.92), hsl(210 18% 95% / 0.88))' }} />
      </div>
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(210 65% 42% / 0.05), transparent 70%)' }} />
      <div className="absolute bottom-10 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(24 75% 50% / 0.04), transparent 70%)' }} />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`overflow-hidden rounded-2xl shadow-elevated scroll-fade-left ${isVisible ? "visible" : ""}`}>
            <img src={landscapingOffice} alt="Luxe Shutters showroom and office" className="w-full h-[400px] lg:h-[500px] object-cover" />
          </div>
          <div className={`scroll-fade-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-3 block">About our company</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-sans">Premium window furnishings with certified expertise</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Luxe Shutters was founded on a simple idea: your home deserves window furnishings that are beautiful, functional, and built to last. Our Scottsdale-based team brings together certified installers, experienced consultants, and skilled craftspeople who understand what homeowners actually need.</p>
              <p>From your first consultation to the final walkthrough, everything is designed to be clear, on-time, and focused on creating your dream living space. We invest in quality products, experienced crews, and detailed project planning because it means better results and zero surprises.</p>
              <p>Whether you need shutters, blinds, curtains, or outdoor screens, you'll always know exactly what's happening, what it costs, and when it'll be done.</p>
            </div>
          </div>
        </div>

        <div className={`mb-12 scroll-fade ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <div>
              <span className="text-sm font-medium text-primary tracking-widest uppercase mb-3 block">Where we work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">Areas we serve</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We're based in Scottsdale and provide window furnishing services across the Phoenix metro area and surrounding communities. Our team lives and works in these neighbourhoods — so when you call, help is close by.</p>
                <p>Most consultations are scheduled within a few days. If you're within 40 miles of Scottsdale, we can usually visit your home within the week.</p>
              </div>
              <Button variant="hero" className="mt-6" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}>Get a Free Quote</Button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-card bg-card">
              <iframe title="Service area map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d-111.9261!3d33.4942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000" className="w-full h-[300px] lg:h-[350px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {CITIES.map((city) =>
              <span key={city} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary/60" />{city}
                </span>
              )}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">And all communities within 40 miles of Scottsdale. Not sure if we cover your area? Just ask.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {credentials.map((cred) =>
          <div key={cred} className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft text-sm text-foreground/80">
              <Award className="w-3.5 h-3.5 text-accent" />{cred}
            </div>
          )}
        </div>
      </div>
    </section>);

}