import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export default function StructuredData({ data, id = "structured-data" }: StructuredDataProps) {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => { script?.remove(); };
  }, [data, id]);

  return null;
}

export const ORGANIZATION_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luxe Shutters",
  url: "https://luxeshutters.lovable.app",
  logo: "https://luxeshutters.lovable.app/logo-widget.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61-1800-465-893",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/Luxeshutters",
    "https://www.instagram.com/luxe_shutters"
  ],
};

export const LOCAL_BUSINESS_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Luxe Shutters",
  description: "Premium plantation shutters, blinds, curtains, zipscreens, awnings, and security roller shutters — custom-made and professionally installed across Regional NSW.",
  url: "https://luxeshutters.lovable.app",
  telephone: "+61-1800-465-893",
  email: "admin@luxeshutters.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Temora",
    addressRegion: "New South Wales",
    postalCode: "2666",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.4468,
    longitude: 147.5344,
  },
  areaServed: [
    { "@type": "City", name: "Temora" },
    { "@type": "City", name: "Wagga Wagga" },
    { "@type": "City", name: "Griffith" },
    { "@type": "City", name: "Young" },
    { "@type": "City", name: "West Wyalong" },
    { "@type": "City", name: "Cootamundra" },
    { "@type": "City", name: "Junee" },
    { "@type": "City", name: "Cowra" },
    { "@type": "City", name: "Coolamon" },
    { "@type": "City", name: "Leeton" },
    { "@type": "City", name: "Forbes" },
    { "@type": "City", name: "Condobolin" },
    { "@type": "City", name: "Lake Cargelligo" },
    { "@type": "City", name: "Grenfell" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Window Furnishing Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plantation Shutters Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roller Blinds Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Curtains Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zipscreen Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Awning Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Roller Shutter Installation" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "183",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: "https://luxeshutters.lovable.app/logo-widget.png",
  sameAs: [
    "https://www.facebook.com/Luxeshutters",
    "https://www.instagram.com/luxe_shutters"
  ],
};

export function buildFAQData(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildBreadcrumbData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
