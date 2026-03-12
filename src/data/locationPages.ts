export interface LocationPageData {
  slug: string;
  city: string;
  product: string;
  productSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  intro: string;
  benefits: string[];
  installationProcess: string;
  localTrust: string;
  ctaText: string;
}

const LOCATION_PAGES: LocationPageData[] = [
  {
    slug: "shutters-wagga-wagga",
    city: "Wagga Wagga",
    product: "Plantation Shutters",
    productSlug: "shutters",
    title: "Plantation Shutters Wagga Wagga",
    metaTitle: "Plantation Shutters Wagga Wagga | Luxe Shutters NSW",
    metaDescription: "Premium plantation shutters supplied and installed in Wagga Wagga NSW. Custom-made timber and PVC shutters with free in-home measure and quote. Call 1800 465 893.",
    heroHeading: "Premium Plantation Shutters in Wagga Wagga",
    intro: "Looking for premium plantation shutters in Wagga Wagga? Luxe Shutters supplies and installs custom-made plantation shutters for homes and businesses across Wagga Wagga and the wider Riverina region. Our shutters are designed to handle the harsh Australian climate while adding timeless elegance and value to your property.",
    benefits: [
      "Superior light control and privacy for Wagga Wagga homes",
      "Excellent thermal insulation — keeps your home cool in summer and warm in winter",
      "Available in timber, PVC, and aluminium to suit any room and budget",
      "Increases property value and street appeal",
      "Custom-made to fit any window shape or size",
      "Low maintenance and built to last in Australian conditions"
    ],
    installationProcess: "Our process is simple and stress-free. We visit your Wagga Wagga home with our mobile showroom so you can see and feel the quality of our products in your own space. We take precise measurements, help you choose the perfect style and colour, then custom-manufacture your shutters to exact specifications. Professional installation typically takes 1–3 hours per window, and we leave your home spotless.",
    localTrust: "As a trusted window furnishing company serving Regional NSW, we've installed plantation shutters in hundreds of Wagga Wagga homes. Our team understands the local climate and architectural styles, ensuring every installation is perfectly suited to your home. We're fully licensed, insured, and committed to exceptional customer service.",
    ctaText: "Get a Free Measure & Quote in Wagga Wagga"
  },
  {
    slug: "blinds-wagga-wagga",
    city: "Wagga Wagga",
    product: "Blinds",
    productSlug: "blinds",
    title: "Blinds Installation Wagga Wagga",
    metaTitle: "Blinds Installation Wagga Wagga | Roller, Venetian & Vertical | Luxe Shutters",
    metaDescription: "Professional blinds installation in Wagga Wagga NSW. Roller, venetian, vertical and motorised blinds. Free in-home measure and quote. Call 1800 465 893.",
    heroHeading: "Professional Blinds Installation in Wagga Wagga",
    intro: "Searching for quality blinds in Wagga Wagga? Luxe Shutters offers a comprehensive range of roller blinds, venetian blinds, vertical blinds, and roman blinds — all professionally installed across Wagga Wagga and the Riverina. Whether you need block-out blinds for bedrooms or sunscreen rollers for living areas, we have the perfect solution.",
    benefits: [
      "Wide range of styles: roller, venetian, vertical, and roman blinds",
      "Block-out and sunscreen fabric options for every room",
      "Motorised and smart-home compatible for added convenience",
      "Child-safe cordless designs as standard",
      "Huge range of colours and fabrics to match your decor",
      "12-month limited warranty on all blinds"
    ],
    installationProcess: "We start with a free in-home consultation at your Wagga Wagga property, bringing fabric samples and style guides. After precise measurement, your blinds are custom-manufactured and professionally installed. We walk you through operation and care, ensuring you're completely satisfied.",
    localTrust: "Wagga Wagga homeowners trust Luxe Shutters for reliable, professional blinds installation. We understand the needs of Regional NSW homes — from managing intense summer heat to creating cosy, private spaces in winter. Our experienced installers treat every home with care.",
    ctaText: "Get a Free Blinds Quote in Wagga Wagga"
  },
  {
    slug: "curtains-wagga-wagga",
    city: "Wagga Wagga",
    product: "Custom Curtains",
    productSlug: "curtains",
    title: "Custom Curtains Wagga Wagga",
    metaTitle: "Custom Curtains Wagga Wagga | Sheer & Block-out | Luxe Shutters",
    metaDescription: "Custom curtains supplied and installed in Wagga Wagga NSW. S-fold, pinch pleat, sheer and block-out curtains. Free in-home consultation. Call 1800 465 893.",
    heroHeading: "Custom Curtains for Wagga Wagga Homes",
    intro: "Add warmth, texture, and personality to your Wagga Wagga home with custom curtains from Luxe Shutters. We offer an extensive range of fabrics, heading styles, and lining options — all custom-tailored and professionally installed to transform your living spaces.",
    benefits: [
      "S-fold, pinch pleat, eyelet, and pencil pleat heading styles",
      "Sheer, translucent, and block-out fabric options",
      "Thermal lining for energy efficiency in Wagga Wagga's variable climate",
      "Motorised curtain tracks available for convenience",
      "Hundreds of fabrics and colours to choose from",
      "Custom-tailored for a perfect fit and elegant drape"
    ],
    installationProcess: "Our design consultant visits your Wagga Wagga home with fabric samples, helping you choose the perfect combination of style, colour, and functionality. After precise measurement, your curtains are custom-manufactured, professionally fitted, and styled to perfection.",
    localTrust: "Wagga Wagga homeowners love our curtains for their quality, style, and the personal service we provide. From the initial consultation to the final styling, we ensure every detail is perfect for your home.",
    ctaText: "Get a Free Curtain Consultation in Wagga Wagga"
  },
  {
    slug: "zipscreens-wagga-wagga",
    city: "Wagga Wagga",
    product: "Zipscreens",
    productSlug: "zipscreens",
    title: "Zipscreens Wagga Wagga",
    metaTitle: "Zipscreens Wagga Wagga | Outdoor Blinds | Luxe Shutters NSW",
    metaDescription: "Zipscreen outdoor blinds installed in Wagga Wagga NSW. Wind-rated, UV protection up to 99%, motorised control. Free consultation. Call 1800 465 893.",
    heroHeading: "Zipscreen Outdoor Blinds for Wagga Wagga Homes",
    intro: "Transform your Wagga Wagga patio, alfresco, or pergola into a year-round living space with zipscreens from Luxe Shutters. Our zip-guided outdoor blinds provide superior wind resistance, UV protection, and insect control while maintaining your view and airflow.",
    benefits: [
      "Wind-rated for Wagga Wagga's exposed outdoor areas",
      "UV protection up to 99% — essential for Australian summers",
      "Complete insect protection for comfortable outdoor living",
      "Motorised with remote or smart-home control as standard",
      "Range of mesh densities from transparent to block-out",
      "Sleek design that blends into your home's architecture"
    ],
    installationProcess: "We assess your Wagga Wagga outdoor area, recommend the best zipscreen configuration, take precise measurements, and custom-manufacture your screens. Professional installation includes motor programming and testing to ensure smooth operation.",
    localTrust: "Wagga Wagga residents love outdoor entertaining, and our zipscreens make it possible year-round. We've transformed dozens of outdoor spaces across the Riverina, and our wind-rated products are built to handle the region's conditions.",
    ctaText: "Get a Free Zipscreen Quote in Wagga Wagga"
  },
  {
    slug: "shutters-griffith",
    city: "Griffith",
    product: "Plantation Shutters",
    productSlug: "shutters",
    title: "Plantation Shutters Griffith",
    metaTitle: "Plantation Shutters Griffith NSW | Luxe Shutters",
    metaDescription: "Premium plantation shutters supplied and installed in Griffith NSW. Custom timber and PVC shutters with free in-home measure and quote. Call 1800 465 893.",
    heroHeading: "Premium Plantation Shutters in Griffith",
    intro: "Luxe Shutters supplies and installs premium plantation shutters for homes across Griffith and the Murrumbidgee Irrigation Area. Our custom-made shutters are designed to handle Griffith's hot summers while adding timeless style and value to your home.",
    benefits: [
      "Perfect for Griffith's hot climate — excellent heat reflection and insulation",
      "Available in timber, PVC, and aluminium materials",
      "Custom-made to fit any window shape including arched and bay windows",
      "Superior light control and privacy",
      "Increases property value and kerb appeal",
      "Low maintenance and built for Australian conditions"
    ],
    installationProcess: "We travel to your Griffith home with our mobile showroom, take precise measurements, and help you select the ideal material and finish. Your shutters are custom-manufactured and professionally installed, with every window checked for perfect operation.",
    localTrust: "Griffith homeowners trust Luxe Shutters for quality plantation shutters that perform in the region's harsh summer conditions. We understand that effective heat management and UV protection are essential, and our shutters deliver on both while looking stunning.",
    ctaText: "Get a Free Measure & Quote in Griffith"
  },
  {
    slug: "blinds-griffith",
    city: "Griffith",
    product: "Blinds",
    productSlug: "blinds",
    title: "Blinds Installation Griffith",
    metaTitle: "Blinds Installation Griffith NSW | Roller & Venetian | Luxe Shutters",
    metaDescription: "Professional blinds installation in Griffith NSW. Roller, venetian, and motorised blinds. Free in-home consultation. Call 1800 465 893.",
    heroHeading: "Professional Blinds Installation in Griffith",
    intro: "Looking for quality blinds in Griffith? Luxe Shutters offers roller blinds, venetian blinds, vertical blinds, and roman blinds — all custom-made and professionally installed. Our blinds are designed to manage Griffith's intense heat while complementing your home's interior.",
    benefits: [
      "Block-out and sunscreen fabrics ideal for Griffith's hot climate",
      "Motorised and smart-home compatible options",
      "Wide range of styles, colours, and fabrics",
      "Child-safe cordless designs as standard",
      "Energy-efficient options to reduce cooling costs",
      "12-month limited warranty on all blinds"
    ],
    installationProcess: "We visit your Griffith home for a free consultation, bringing samples so you can choose in your own space. After precise measurement, your blinds are custom-manufactured and installed by our professional team.",
    localTrust: "Griffith homeowners choose Luxe Shutters for our reliable service, quality products, and understanding of the local climate. We know that effective sun management is essential in the Riverina, and our blinds deliver.",
    ctaText: "Get a Free Blinds Quote in Griffith"
  },
  {
    slug: "curtains-griffith",
    city: "Griffith",
    product: "Custom Curtains",
    productSlug: "curtains",
    title: "Custom Curtains Griffith",
    metaTitle: "Custom Curtains Griffith NSW | Sheer & Block-out | Luxe Shutters",
    metaDescription: "Custom curtains installed in Griffith NSW. S-fold, pinch pleat, sheer and block-out options. Free in-home consultation. Call 1800 465 893.",
    heroHeading: "Custom Curtains for Griffith Homes",
    intro: "Transform your Griffith home with custom curtains from Luxe Shutters. From lightweight sheers that filter harsh summer light to heavy block-out drapes for bedrooms, we offer an extensive range of fabrics and styles tailored to Griffith's climate and your personal taste.",
    benefits: [
      "Thermal-lined options to manage Griffith's extreme temperatures",
      "S-fold, pinch pleat, eyelet, and pencil pleat heading styles",
      "Sheer, translucent, and block-out fabric choices",
      "Motorised curtain tracks for large windows",
      "Hundreds of fabrics, colours, and textures",
      "Custom-tailored for a perfect fit"
    ],
    installationProcess: "Our designer brings fabric samples to your Griffith home, measures precisely, and helps you create the perfect curtain design. Custom manufacturing and professional installation ensure a beautiful result every time.",
    localTrust: "Griffith homeowners appreciate the warmth and style that quality curtains bring to their homes. Our team understands the local aesthetic and climate needs, delivering curtains that look and perform beautifully.",
    ctaText: "Get a Free Curtain Consultation in Griffith"
  },
  {
    slug: "zipscreens-griffith",
    city: "Griffith",
    product: "Zipscreens",
    productSlug: "zipscreens",
    title: "Zipscreens Griffith",
    metaTitle: "Zipscreens Griffith NSW | Outdoor Blinds | Luxe Shutters",
    metaDescription: "Zipscreen outdoor blinds installed in Griffith NSW. Wind-rated, UV protection, motorised control. Free consultation. Call 1800 465 893.",
    heroHeading: "Zipscreen Outdoor Blinds for Griffith Homes",
    intro: "Make the most of your Griffith outdoor area with zipscreens from Luxe Shutters. Our zip-guided outdoor blinds provide exceptional UV protection, wind resistance, and insect control — essential for comfortable outdoor living in the Riverina's hot climate.",
    benefits: [
      "UV protection up to 99% — critical for Griffith's intense sun",
      "Wind-rated for exposed outdoor areas",
      "Complete insect protection for alfresco dining",
      "Motorised with remote or smart-home integration",
      "Multiple mesh densities for views or privacy",
      "Durable construction built for harsh conditions"
    ],
    installationProcess: "We assess your Griffith outdoor space, recommend the ideal zipscreen solution, measure precisely, and custom-manufacture your screens. Professional installation includes full motor programming and testing.",
    localTrust: "Griffith's outdoor lifestyle deserves quality protection. Our zipscreens let you enjoy your patio, pergola, or alfresco area year-round — blocking the harsh summer sun while keeping insects out and breezes in.",
    ctaText: "Get a Free Zipscreen Quote in Griffith"
  },
];

export default LOCATION_PAGES;
