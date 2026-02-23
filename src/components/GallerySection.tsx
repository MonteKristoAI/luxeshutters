import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import serviceLawnCare from "@/assets/service-lawn-care.jpg";
import serviceGardenDesign from "@/assets/service-garden-design.jpg";
import servicePlanting from "@/assets/service-planting.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import galleryLandscapingDetail from "@/assets/gallery-landscaping-detail.jpg";
import galleryLandscapingTeam from "@/assets/gallery-landscaping-team.jpg";
import galleryLandscapingFinished from "@/assets/gallery-landscaping-finished.jpg";
import galleryLandscapingConstruction from "@/assets/gallery-landscaping-construction.jpg";
import galleryLandscapingBeforeAfter from "@/assets/gallery-landscaping-before-after.jpg";
import serviceOutdoorTransformation from "@/assets/service-outdoor-transformation.jpg";
import landscapingOffice from "@/assets/landscaping-office.jpg";
import serviceLandscapingConsultation from "@/assets/service-landscaping-consultation.jpg";

type Tab = "All" | "Completed Projects" | "In Progress" | "Before & After" | "Team";

const images = [
{ src: galleryLandscapingFinished, alt: "Completed backyard landscaping with patio and gardens", tab: "Completed Projects" as const },
{ src: galleryLandscapingBeforeAfter, alt: "Before and after yard transformation", tab: "Before & After" as const },
{ src: galleryLandscapingConstruction, alt: "Landscaping project in progress", tab: "In Progress" as const },
{ src: galleryLandscapingTeam, alt: "Our landscaping crew at work", tab: "Team" as const },
{ src: serviceGardenDesign, alt: "Custom garden design with flower beds", tab: "Completed Projects" as const },
{ src: serviceLawnCare, alt: "Perfectly manicured residential lawn", tab: "Completed Projects" as const },
{ src: galleryLandscapingDetail, alt: "Close-up of stone retaining wall craftsmanship", tab: "In Progress" as const },
{ src: landscapingOffice, alt: "MonteKristo Landscaping office and design studio", tab: "Team" as const },
{ src: serviceOutdoorTransformation, alt: "Outdoor living space with fire pit and patio", tab: "Completed Projects" as const },
{ src: serviceLandscapingConsultation, alt: "Landscaper consulting with homeowner", tab: "Before & After" as const },
{ src: servicePlanting, alt: "Professional planting in garden beds", tab: "In Progress" as const },
{ src: serviceIrrigation, alt: "Irrigation system watering a lush lawn", tab: "Completed Projects" as const }];


const tabs: Tab[] = ["All", "Completed Projects", "In Progress", "Before & After", "Team"];

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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">See our landscaping projects</h2>
          <p className="text-muted-foreground leading-relaxed">From lawn transformations to complete outdoor living spaces — take a look at the projects we're proud of.</p>
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