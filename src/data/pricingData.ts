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
    fromPrice: "Free – $150",
    notes: "Most in-home window and door consultations are free. Complex commercial or multi-story assessments may include a measurement fee, applied toward the project if you hire us.",
    items: [
      { item: "In-home consultation & measurement", range: "Free", typicalTime: "60–90 min", notes: "Includes window/door assessment, energy analysis, and written estimate." },
      { item: "Detailed project proposal with specs", range: "$100–$250", typicalTime: "3–5 days", includes: "Product specifications, energy ratings, and material options" },
      { item: "Energy efficiency audit", range: "$100–$150", typicalTime: "1–2 hours", notes: "Thermal imaging assessment with detailed efficiency report and upgrade recommendations." },
    ],
  },
  {
    id: "window-replacement",
    title: "Window Replacement Packages",
    fromPrice: "From $350/window",
    notes: "Window replacement pricing depends on window size, type, glass options, and accessibility. All prices include removal, installation, insulation, and trim.",
    items: [
      { item: "Standard double-hung window", range: "$350–$700/window", typicalTime: "1–2 hours each", notes: "Includes vinyl or aluminum frame, double-pane glass." },
      { item: "Casement or awning window", range: "$400–$900/window", typicalTime: "1–2 hours each", notes: "Energy-efficient crank-operated design." },
      { item: "Bay or bow window", range: "$1,500–$4,000", typicalTime: "4–6 hours", notes: "Structural support and finishing included." },
      { item: "Whole-home window replacement (10–20 windows)", range: "$5,000–$15,000", typicalTime: "2–4 days", notes: "Volume discounts available. Includes all trim and cleanup." },
    ],
    financeNote: "Financing available — $0 down options on qualifying projects over $3,000.",
  },
  {
    id: "door-installation",
    title: "Door Installation Estimates",
    fromPrice: "From $500",
    notes: "Door installation pricing varies by door type, material, hardware, and frame modifications. All projects include removal, fitting, weatherstripping, and hardware installation.",
    items: [
      { item: "Entry door replacement", range: "$800–$3,000", typicalTime: "3–5 hours", notes: "Includes door, frame, hardware, and weatherstripping." },
      { item: "Sliding glass door installation", range: "$1,200–$4,000", typicalTime: "4–6 hours", notes: "Track, frame, and glass included." },
      { item: "French door installation", range: "$1,500–$5,000", typicalTime: "4–8 hours", notes: "Price varies by material and configuration." },
      { item: "Interior door replacement", range: "$300–$800/door", typicalTime: "1–2 hours each", notes: "Includes door, hinges, and hardware." },
    ],
  },
  {
    id: "full-home",
    title: "Full Home Upgrades",
    fromPrice: "From $8,000",
    notes: "Complete home window and door upgrade pricing depends on scope, materials, and energy-efficiency level. All projects include detailed proposals with product specifications.",
    items: [
      { item: "Complete window upgrade (average home)", range: "$8,000–$20,000", typicalTime: "3–5 days", notes: "All windows replaced with energy-efficient units." },
      { item: "Windows + entry door package", range: "$10,000–$25,000", typicalTime: "4–7 days", includes: "All windows, front entry door, and optional storm door" },
      { item: "Premium whole-home package", range: "$20,000–$50,000+", typicalTime: "1–2 weeks", notes: "Triple-pane windows, custom doors, and premium hardware throughout." },
    ],
    financeNote: "Flexible financing available — $0 down options on qualifying projects over $5,000.",
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    fromPrice: "From $75",
    notes: "Repair costs vary based on issue type, window/door age, and parts availability. We service all major brands.",
    items: [
      { item: "Window glass replacement (single pane)", range: "$75–$300", typicalTime: "1–2 hours", notes: "Includes glass, glazing, and cleanup." },
      { item: "Foggy/failed seal repair (IGU replacement)", range: "$150–$400", typicalTime: "1–2 hours", notes: "Insulated glass unit replacement." },
      { item: "Door hardware replacement", range: "$100–$350", typicalTime: "1–2 hours", includes: "New lockset, hinges, or closer as needed" },
      { item: "Weatherstripping & seal replacement", range: "$75–$250", typicalTime: "1–2 hours", notes: "Per window or door. Improves insulation and reduces drafts." },
    ],
  },
];

export const PRICING_NOTES = [
  "All prices are estimates; final cost confirmed after in-home consultation and measurement.",
  "Seasonal discounts available for projects booked in advance.",
  "Financing available on qualifying projects (subject to credit approval).",
];
