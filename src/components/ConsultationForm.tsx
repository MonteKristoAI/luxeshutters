import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
{ icon: Phone, text: "Free phone consultation" },
{ icon: Clock, text: "On-site evaluations available" },
{ icon: Shield, text: "No obligation — just honest advice" }];


const ConsultationForm = ({ showMap = true }: {showMap?: boolean;}) => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request received",
        description: "We'll call you back within one business day."
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="py-20 lg:py-[40px]" style={{ background: 'hsl(215 25% 12%)' }}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container max-w-6xl scroll-fade ${isVisible ? "visible" : ""}`}>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase mb-4 block" style={{ color: 'hsl(210 65% 65%)' }}>Get in Touch</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 leading-tight" style={{ color: 'hsl(210 20% 95%)' }}>Your Dream Windows and Doors Are Just One Call 
              <br />One Call Away
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'hsl(215 10% 60%)' }}>
              Whether you're planning a new garden, need regular lawn care, or want a complete outdoor transformation, our team is ready to help. Request a consultation and we'll be in touch to discuss your vision.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) =>
              <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: 'hsl(210 65% 42% / 0.15)' }}>
                    <b.icon className="h-4 w-4" style={{ color: 'hsl(210 65% 65%)' }} />
                  </span>
                  <span className="text-sm font-medium leading-snug pt-1" style={{ color: 'hsl(210 20% 85%)' }}>{b.text}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-2xl p-7 sm:p-9" style={{ background: 'hsl(215 20% 22%)', border: '1px solid hsl(215 18% 30%)' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="cf-name" className="text-white/80">Full Name</Label>
                <Input id="cf-name" name="name" required maxLength={100} placeholder="e.g. John Smith" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-email" className="text-white/80">Email Address</Label>
                <Input id="cf-email" name="email" type="email" required maxLength={255} placeholder="you@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-phone" className="text-white/80">Phone Number</Label>
                <Input id="cf-phone" name="phone" type="tel" required maxLength={20} placeholder="(480) 555-0000" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-message" className="text-white/80">Message{" "}<span className="text-white/40 font-normal">(optional)</span></Label>
                <Textarea id="cf-message" name="message" maxLength={1000} rows={3} placeholder="Tell us about your landscaping project…" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>{loading ? "Sending…" : "Request a Free Landscaping Consultation"}</Button>
              <p className="text-xs text-white/40 text-center">We respect your privacy and will never share your details.</p>
            </form>
          </div>
        </div>

        {showMap &&
        <div className="mt-10 rounded-2xl overflow-hidden border border-border/60 shadow-sm opacity-80">
            <iframe title="MonteKristo Landscaping location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000!2d-111.9261!3d33.4942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d0ac17c001%3A0x1fce4d2c63c0c4c5!2sScottsdale%2C+AZ!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="210" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full grayscale-[30%] hover:grayscale-0 transition-all duration-500" />
          </div>
        }
      </div>
    </section>);

};

export default ConsultationForm;