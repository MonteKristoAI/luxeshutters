import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQS = [
  {
    q: "How much do plantation shutters cost in NSW?",
    a: "Plantation shutter pricing depends on window size, material choice (timber or PVC), and configuration. Most Regional NSW homeowners invest $300–$700 per panel installed. We provide free in-home measure and quote consultations with transparent pricing — no hidden fees.",
  },
  {
    q: "Are plantation shutters better than blinds?",
    a: "Both are excellent options depending on your needs. Plantation shutters offer superior durability, increase property value, and provide a timeless look. Blinds are more budget-friendly and come in a wider variety of styles. Many of our Wagga Wagga and Griffith clients combine both for different rooms.",
  },
  {
    q: "What window coverings work best in hot Australian climates?",
    a: "For maximum heat reduction in Regional NSW, we recommend plantation shutters, block-out roller blinds, or zipscreens for outdoor areas. These products reflect UV rays and reduce indoor temperatures significantly, lowering energy bills throughout summer.",
  },
  {
    q: "Do you install shutters in Wagga Wagga?",
    a: "Yes! We supply and install plantation shutters, blinds, curtains, zipscreens, and awnings across Wagga Wagga, Griffith, Temora, Young, Cootamundra, West Wyalong, Junee, Cowra, and all surrounding Regional NSW areas.",
  },
  {
    q: "Do you offer free in-home quotes?",
    a: "Absolutely. We bring our mobile showroom to your home so you can see and feel the quality of our products in your own space. There's no obligation — just honest advice and a detailed quote delivered within 48 hours.",
  },
  {
    q: "How long does shutter installation take?",
    a: "Most standard installations take 1–3 hours per window. Larger projects like whole-home shutters or zipscreens may take 1–2 days. We provide detailed timelines during your consultation and keep you informed every step of the way.",
  },
  {
    q: "Are motorised blinds worth it?",
    a: "Motorised blinds offer excellent convenience, improved child safety, and smart-home integration. They're ideal for hard-to-reach windows and large living spaces. Most of our blind and curtain products are available with motorisation.",
  },
  {
    q: "What about warranty coverage?",
    a: "All our products come with manufacturer warranties. We also provide a workmanship warranty on every installation. Window blinds include a 12-month limited warranty, and shutters carry extended coverage. Ask about specific details during your consultation.",
  },
  {
    q: "Which areas do you service?",
    a: "We service all of Regional NSW including Wagga Wagga, Griffith, Temora, Young, West Wyalong, Cootamundra, Junee, Cowra, Coolamon, Leeton, Forbes, Condobolin, Lake Cargelligo, Grenfell, and surrounding areas. Contact us to confirm we cover your location.",
  },
  {
    q: "Can you match my existing decor?",
    a: "Absolutely. We offer a huge range of colours, fabrics, and finishes across all product lines. During your free in-home consultation, we bring samples so you can match everything perfectly in your own space.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Common Questions
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Everything you need to know about our window furnishing products, installation process, and services across Regional NSW.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/60 bg-card px-5 sm:px-6 shadow-sm data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-[15px] sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-[15px]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Have more questions? <Link to="/contact" className="text-primary font-medium hover:underline">Speak with our team</Link> or explore our <Link to="/services" className="text-primary font-medium hover:underline">full range of services</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
