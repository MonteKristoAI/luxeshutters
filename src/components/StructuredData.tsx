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
    telephone: "1800-465-893",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
  },
  sameAs: [],
};

export const LOCAL_BUSINESS_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Luxe Shutters",
  description: "Premium shutters, blinds, curtains, zipscreens, and awnings — custom-made and professionally installed.",
  url: "https://luxeshutters.lovable.app",
  telephone: "1800-465-893",
  email: "admin@luxeshutters.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Temora",
    addressRegion: "New South Wales",
    postalCode: "2666",
    addressCountry: "AU",
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
  image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc95d200-e15f-4b54-9444-99e93d853141/id-preview-0cbc8117--0b743ad7-429c-4af6-a513-6f5a28979926.lovable.app-1771424800082.png",
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
