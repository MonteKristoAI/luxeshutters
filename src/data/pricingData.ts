export interface PricingItem {
  item: string;
  range: string;
  typicalTime: string;
  includes?: string;
  notes?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  fromPrice: string;
  notes: string;
  items: PricingItem[];
  financeNote?: string;
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "consultations",
    title: "Consultations & Measurements",
    fromPrice: "Free",
    notes: "All in-home consultations and measurements are free with no obligation.",
    items: [
      { item: "In-home consultation & measurement", range: "Free", typicalTime: "45–60 min", notes: "Includes window assessment, product recommendations, and written quote." },
      { item: "Detailed project proposal with samples", range: "Free", typicalTime: "2–3 days", includes: "Fabric/material samples, colour matching, and detailed quote" },
    ],
  },
  {
    id: "shutters",
    title: "Shutters",
    fromPrice: "From $450/panel",
    notes: "Shutter pricing depends on material, size, and configuration. All prices include measurement, manufacturing, installation, and finishing.",
    items: [
      { item: "PVC plantation shutters", range: "$450–$700/panel", typicalTime: "1–2 hours per window", notes: "Durable, moisture-resistant, ideal for bathrooms and kitchens." },
      { item: "Timber plantation shutters", range: "$600–$1,000/panel", typicalTime: "1–2 hours per window", notes: "Premium hardwood with custom stain or paint finish." },
      { item: "Aluminium shutters", range: "$500–$900/panel", typicalTime: "1–2 hours per window", notes: "Perfect for outdoor and high-exposure areas." },
    ],
    financeNote: "Flexible payment plans available on qualifying projects.",
  },
  {
    id: "blinds",
    title: "Blinds",
    fromPrice: "From $150/blind",
    notes: "Blind pricing varies by type, fabric, and motorisation. All prices include measurement, manufacturing, and professional installation.",
    items: [
      { item: "Roller blinds", range: "$150–$400/blind", typicalTime: "30–60 min each", notes: "Sunscreen, block-out, or translucent fabrics." },
      { item: "Venetian blinds", range: "$200–$500/blind", typicalTime: "30–60 min each", notes: "Timber, aluminium, or PVC options." },
      { item: "Vertical blinds", range: "$180–$450/blind", typicalTime: "30–60 min each", notes: "Ideal for sliding doors and large windows." },
      { item: "Motorised upgrade", range: "+$150–$300/blind", typicalTime: "Included in install", notes: "Remote or smart-home control." },
    ],
  },
  {
    id: "curtains",
    title: "Curtains",
    fromPrice: "From $300/window",
    notes: "Curtain pricing depends on fabric, heading style, lining, and window size. All prices include measurement, tailoring, and professional fitting.",
    items: [
      { item: "Sheer curtains", range: "$300–$600/window", typicalTime: "30–45 min each", notes: "Light-filtering, elegant draping." },
      { item: "Block-out curtains", range: "$400–$800/window", typicalTime: "30–45 min each", notes: "Full light block and thermal insulation." },
      { item: "S-fold or pinch pleat curtains", range: "$500–$1,000/window", typicalTime: "30–45 min each", notes: "Premium heading styles with custom fabric." },
    ],
  },
  {
    id: "zipscreens",
    title: "Zipscreens",
    fromPrice: "From $800/screen",
    notes: "Zipscreen pricing varies by size, fabric, and motor type. All prices include measurement, manufacturing, installation, and motor programming.",
    items: [
      { item: "Standard zipscreen (up to 3m wide)", range: "$800–$1,500/screen", typicalTime: "1–2 hours each", notes: "Motorised with remote control." },
      { item: "Large zipscreen (3m–5m wide)", range: "$1,500–$2,500/screen", typicalTime: "2–3 hours each", notes: "Heavy-duty tracks and motor." },
      { item: "Smart-home integration", range: "+$100–$200/screen", typicalTime: "Included in install", notes: "WiFi module for app/voice control." },
    ],
  },
  {
    id: "awnings",
    title: "Awnings",
    fromPrice: "From $600",
    notes: "Awning pricing depends on type, size, and fabric. All prices include measurement, manufacturing, and professional installation.",
    items: [
      { item: "Fixed window awnings", range: "$600–$1,200/awning", typicalTime: "1–2 hours each", notes: "Auto-lock arm or fixed guide." },
      { item: "Retractable folding arm awning", range: "$1,500–$4,000", typicalTime: "3–4 hours", notes: "Motorised with wind sensor option." },
      { item: "Outdoor patio awning", range: "$2,000–$5,000", typicalTime: "4–6 hours", notes: "Large span coverage for entertaining areas." },
    ],
  },
  {
    id: "security-roller-shutters",
    title: "Security Roller Shutters",
    fromPrice: "From $700/shutter",
    notes: "Security roller shutter pricing depends on size, material, and motor type. All prices include measurement, manufacturing, and installation.",
    items: [
      { item: "Standard window roller shutter", range: "$700–$1,200/shutter", typicalTime: "1–2 hours each", notes: "Aluminium slats with key-switch or remote." },
      { item: "Large door/window roller shutter", range: "$1,200–$2,500/shutter", typicalTime: "2–3 hours each", notes: "Heavy-duty for sliding doors and wide openings." },
      { item: "Battery backup system", range: "+$200–$400/shutter", typicalTime: "Included in install", notes: "Operates during power outages." },
    ],
  },
];

export const PRICING_NOTES = [
  "All prices are estimates; final cost confirmed after free in-home consultation and measurement.",
  "Seasonal promotions and package deals available — ask during your consultation.",
  "Flexible payment plans available on qualifying projects.",
];
