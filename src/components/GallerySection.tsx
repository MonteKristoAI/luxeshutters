import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import galleryWork1 from "@/assets/gallery-work-1.jpg";
import galleryWork2 from "@/assets/gallery-work-2.jpg";
import galleryWork3 from "@/assets/gallery-work-3.jpg";
import galleryWork4 from "@/assets/gallery-work-4.jpg";
import galleryWork5 from "@/assets/gallery-work-5.jpg";
import galleryWork6 from "@/assets/gallery-work-6.jpg";
import galleryWork7 from "@/assets/gallery-work-7.jpg";
import galleryWork8 from "@/assets/gallery-work-8.jpg";
import galleryWork9 from "@/assets/gallery-work-9.jpg";
import galleryWork10 from "@/assets/gallery-work-10.jpg";
import galleryWork11 from "@/assets/gallery-work-11.jpg";
import galleryWork12 from "@/assets/gallery-work-12.jpg";
import galleryWork13 from "@/assets/gallery-work-13.jpg";
import galleryWork14 from "@/assets/gallery-work-14.jpg";
import galleryWork15 from "@/assets/gallery-work-15.jpg";
import galleryWork16 from "@/assets/gallery-work-16.jpg";
import galleryWork17 from "@/assets/gallery-work-17.jpg";
import galleryWork18 from "@/assets/gallery-work-18.jpg";
import galleryWork19 from "@/assets/gallery-work-19.jpg";
import galleryWork20 from "@/assets/gallery-work-20.jpg";
import galleryWork21 from "@/assets/gallery-work-21.jpg";
import galleryWork22 from "@/assets/gallery-work-22.jpg";
import galleryWork23 from "@/assets/gallery-work-23.jpg";
import galleryWork24 from "@/assets/gallery-work-24.jpg";
import galleryWork25 from "@/assets/gallery-work-25.jpg";
import galleryWork26 from "@/assets/gallery-work-26.jpg";
import galleryWork27 from "@/assets/gallery-work-27.jpg";
import galleryWork28 from "@/assets/gallery-work-28.jpg";
import galleryWork29 from "@/assets/gallery-work-29.jpg";
import galleryWork30 from "@/assets/gallery-work-30.jpg";
import galleryWork31 from "@/assets/gallery-work-31.jpg";
import galleryWork32 from "@/assets/gallery-work-32.jpg";

type Tab = "All" | "Zipscreens" | "Outdoor Blinds" | "Shutters" | "Installations";
const images = [
  { src: galleryWork1, alt: "Modern home with full-width zipscreens at dusk", tab: "Zipscreens" as const },
  { src: galleryWork2, alt: "Contemporary house with zipscreen installation and outdoor area", tab: "Zipscreens" as const },
  { src: galleryWork3, alt: "Verandah zipscreens on traditional weatherboard home", tab: "Outdoor Blinds" as const },
  { src: galleryWork4, alt: "Outdoor entertaining area with zipscreens and timber posts", tab: "Zipscreens" as const },
  { src: galleryWork5, alt: "Gable-roof outdoor area with zipscreen blinds", tab: "Zipscreens" as const },
  { src: galleryWork6, alt: "Deck zipscreen providing shade and privacy", tab: "Outdoor Blinds" as const },
  { src: galleryWork7, alt: "Pergola with outdoor blind installation on timber deck", tab: "Outdoor Blinds" as const },
  { src: galleryWork8, alt: "See-through mesh zipscreen on covered patio", tab: "Installations" as const },
  { src: galleryWork9, alt: "Side view of zipscreen guide rail detail", tab: "Installations" as const },
  { src: galleryWork10, alt: "Large format zipscreens on brick home exterior", tab: "Installations" as const },
  { src: galleryWork11, alt: "Black zipscreen installation on brick house patio", tab: "Zipscreens" as const },
  { src: galleryWork12, alt: "View from inside a patio with zipscreens lowered", tab: "Installations" as const },
  { src: galleryWork13, alt: "Wide span zipscreens on modern white patio structure", tab: "Zipscreens" as const },
  { src: galleryWork14, alt: "Full backyard view showing integrated zipscreen system", tab: "Outdoor Blinds" as const },
  { src: galleryWork15, alt: "Side angle of zipscreen installation showing sleek profile", tab: "Installations" as const },
  { src: galleryWork16, alt: "Side view of long patio enclosure with grey blinds", tab: "Outdoor Blinds" as const },
  { src: galleryWork17, alt: "Complete patio enclosure with multiple grey blinds", tab: "Zipscreens" as const },
  { src: galleryWork18, alt: "Grey outdoor blinds protecting a carport area", tab: "Outdoor Blinds" as const },
  { src: galleryWork19, alt: "Interior view of enclosed deck area with blinds", tab: "Installations" as const },
  { src: galleryWork20, alt: "Cozy outdoor living space protected by zipscreens", tab: "Zipscreens" as const },
  { src: galleryWork21, alt: "White plantation shutters in modern bathroom with subway tiles", tab: "Shutters" as const },
  { src: galleryWork22, alt: "Plantation shutters in hallway with decorative tiled floor", tab: "Shutters" as const },
  { src: galleryWork23, alt: "Wide plantation shutters in living room with timber floors", tab: "Shutters" as const },
  { src: galleryWork24, alt: "White shutters in dining room with rustic timber table", tab: "Shutters" as const },
  { src: galleryWork25, alt: "Plantation shutters in bedroom with garden views", tab: "Shutters" as const },
  { src: galleryWork26, alt: "Triple window shutters in cozy bedroom setting", tab: "Shutters" as const },
  { src: galleryWork27, alt: "Large format outdoor zipscreens on brick home exterior", tab: "Zipscreens" as const },
  { src: galleryWork28, alt: "Roller blinds in laundry room for privacy and light control", tab: "Outdoor Blinds" as const },
  { src: galleryWork29, alt: "Roman blind in bedroom with warm timber flooring", tab: "Outdoor Blinds" as const },
  { src: galleryWork30, alt: "Roller blind above kitchen sink with clean white finish", tab: "Outdoor Blinds" as const },
  { src: galleryWork31, alt: "Zipscreens on dark brick home exterior providing sun protection", tab: "Zipscreens" as const },
  { src: galleryWork32, alt: "Inside view of enclosed alfresco with zipscreens and outdoor dining", tab: "Zipscreens" as const },
];

const tabs: Tab[] = ["All", "Zipscreens", "Outdoor Blinds", "Shutters", "Installations"];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filtered = activeTab === "All" ? images : images.filter((img) => img.tab === activeTab);

  return (
    <section id="gallery" ref={ref} className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-medium text-primary tracking-widest uppercase mb-3 block font-sans text-3xl">Our work</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">See our completed projects</h2>
          <p className="text-muted-foreground leading-relaxed">From zipscreens to outdoor blinds — take a look at the installations we're proud of.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab) =>
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>{tab}</button>
          )}
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 scroll-fade ${isVisible ? "visible" : ""}`}>
          {filtered.map((img, i) =>
          <button key={i} onClick={() => setLightbox(i)} className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/50 backdrop-blur-sm px-2 py-1 rounded-md">{img.alt}</span>
            </button>
          )}
        </div>
      </div>

      {lightbox !== null &&
      <div className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" onClick={() => setLightbox(null)}><X className="w-8 h-8" /></button>
          <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="max-w-full max-h-[85vh] rounded-2xl shadow-elevated object-contain animate-scale-in" onClick={(e) => e.stopPropagation()} />
        </div>
      }
    </section>);
}
