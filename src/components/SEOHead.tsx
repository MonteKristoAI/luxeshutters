import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

const BASE_URL = "https://luxeshutters.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc95d200-e15f-4b54-9444-99e93d853141/id-preview-0cbc8117--0b743ad7-429c-4af6-a513-6f5a28979926.lovable.app-1771424800082.png";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    el.content = content;
    document.head.appendChild(el);
  }
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (link) {
    link.href = href;
  } else {
    link = document.createElement("link");
    link.rel = "canonical";
    link.href = href;
    document.head.appendChild(link);
  }
}

export default function SEOHead({ title, description, canonical, ogType = "website" }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", url, true);
    setMeta("og:image", OG_IMAGE, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", OG_IMAGE);
    setMeta("twitter:card", "summary_large_image");
    setCanonical(url);
  }, [title, description, canonical, ogType]);

  return null;
}
