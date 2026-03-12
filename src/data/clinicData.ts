export const CLINIC = {
  name: "Luxe Shutters",
  slogan: "Where Style Meets Everyday Comfort.",
  address: "Temora, New South Wales 2666, Australia",
  phone: "1800-465-893",
  email: "admin@luxeshutters.com.au",
  hours: {
    weekday: "Monday – Friday: 9:00 am – 5:00 pm",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed",
  },
};

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  image: string;
  credentials?: string[];
}

export const TEAM: TeamMember[] = [
  {
    name: "Ryan Caldwell",
    role: "Owner & Lead Estimator",
    focus: "15+ years designing and installing premium window furnishings — from shutters and blinds to outdoor screens",
    image: "team-ryan",
    credentials: ["Certified Installer", "Licensed Contractor"],
  },
  {
    name: "Marco Vasquez",
    role: "Senior Project Manager",
    focus: "Full-scale shutter and blind installation projects, from initial measurement to final inspection",
    image: "team-marco",
    credentials: ["AAMA Certified", "OSHA Certified"],
  },
  {
    name: "Jenna Park",
    role: "Design Consultant",
    focus: "Custom window furnishing selection, style recommendations, and client collaboration on home aesthetics",
    image: "team-jenna",
  },
  {
    name: "Derek Sullivan",
    role: "Lead Installer",
    focus: "Precision shutter fitting, blind installation, zipscreen mounting, and finish detailing",
    image: "team-derek",
    credentials: ["Master Installer Certified"],
  },
  {
    name: "Lisa Nguyen",
    role: "Estimator & Project Planner",
    focus: "On-site measurements, project scoping, timelines, and detailed cost planning",
    image: "team-lisa",
    credentials: ["NFRC Certified"],
  },
];

export const SERVICES = [
  {
    title: "Shutters",
    description: "Our plantation shutters combine timeless elegance with exceptional craftsmanship, adding sophistication and value to any Regional NSW home.",
    icon: "blinds",
  },
  {
    title: "Blinds",
    description: "Versatile roller, venetian, and vertical blinds professionally installed across Wagga Wagga, Griffith, Temora and surrounding areas.",
    icon: "sliders-horizontal",
  },
  {
    title: "Curtains",
    description: "From sheer elegance to block-out drapes, our curtains are custom-tailored for homes throughout Regional NSW.",
    icon: "curtains",
  },
  {
    title: "Zipscreens",
    description: "Sleek zip-guided outdoor blinds that protect your patio from sun, wind, and insects — ideal for Australian outdoor living.",
    icon: "monitor",
  },
  {
    title: "Awnings",
    description: "Retractable and fixed awnings providing shade and style for Regional NSW homes, reducing indoor temperatures significantly.",
    icon: "umbrella",
  },
  {
    title: "Security Roller Shutters",
    description: "Robust security roller shutters offering protection, insulation, and privacy for homes across Wagga Wagga, Temora and Regional NSW.",
    icon: "shield",
  },
];

export const REVIEWS = [
  { name: "Karen Wilson", rating: 5, treatment: "Plantation Shutters", text: "Luxe Shutters installed plantation shutters throughout our home. The quality is stunning and the light control is perfect. The crew was clean, professional, and finished ahead of schedule.", location: "Wagga Wagga, NSW", timeAgo: "2 weeks ago", avatar: "KW" },
  { name: "David Ramirez", rating: 5, treatment: "Roller Blinds", text: "They installed motorised roller blinds in every room. The transformation is incredible — neighbours keep commenting. Installation was flawless and they cleaned up perfectly.", location: "Temora, NSW", timeAgo: "1 month ago", avatar: "DR" },
  { name: "Michelle Torres", rating: 5, treatment: "Zipscreens", text: "Our new zipscreens completely transformed our outdoor living area. The quality is outstanding and they operate so smoothly. Professional install from start to finish.", location: "Griffith, NSW", timeAgo: "3 weeks ago", avatar: "MT" },
  { name: "Tom Brennan", rating: 5, treatment: "Block-out Curtains", text: "We upgraded to premium block-out curtains and the difference is night and day. No more glare, perfect temperature control, and our home feels so much more luxurious.", location: "Young, NSW", timeAgo: "1 month ago", avatar: "TB" },
  { name: "Lisa Moreno", rating: 4, treatment: "Shutters", text: "Great work installing shutters in our living areas. They look amazing and the house feels so much more polished now. Only wish the lead time was a bit shorter!", location: "Cootamundra, NSW", timeAgo: "2 months ago", avatar: "LM" },
  { name: "James Park", rating: 5, treatment: "Custom Blinds", text: "From the first consultation to the final installation, Luxe Shutters was exceptional. Ryan personally measured everything. Our custom venetian blinds are absolutely stunning.", location: "West Wyalong, NSW", timeAgo: "3 weeks ago", avatar: "JP" },
  { name: "Angela Simmons", rating: 5, treatment: "Curtains & Sheers", text: "They installed S-fold curtains and sheers in our bedroom and living room. The natural light filtering is incredible now. Their crew protected our floors and furniture and left everything spotless.", location: "Junee, NSW", timeAgo: "1 month ago", avatar: "AS" },
  { name: "Robert Kim", rating: 5, treatment: "Commercial Blinds", text: "Luxe Shutters handled our office blind installation project. Professional, on-time, and the quality of work was outstanding. Highly recommend for commercial jobs.", location: "Cowra, NSW", timeAgo: "6 weeks ago", avatar: "RK" },
  { name: "Patricia Hayes", rating: 5, treatment: "Shutters", text: "Got estimates from three companies. Luxe Shutters wasn't the cheapest but they were the most thorough — detailed product comparisons, style recommendations, and a clear timeline. Worth every penny.", location: "Wagga Wagga, NSW", timeAgo: "2 months ago", avatar: "PH" },
  { name: "Steve Gonzalez", rating: 5, treatment: "Security Roller Shutters", text: "These guys actually show up on time, protect your property, and clean up every day. Our new security roller shutters are fantastic and the insulation is noticeably better. Highly recommend.", location: "Griffith, NSW", timeAgo: "3 months ago", avatar: "SG" },
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "5 Signs It's Time to Update Your Window Furnishings",
    excerpt: "Faded curtains, broken blinds, and outdated shutters can drag down your home's look and energy efficiency. Here are the telltale signs it's time for a refresh — and how Regional NSW homeowners can save.",
    category: "Tips",
    date: "12 February 2026",
    image: "blog-1",
    featured: true,
  },
  {
    id: "2",
    title: "How Plantation Shutters Add Value to Your NSW Home",
    excerpt: "Plantation shutters are one of the smartest upgrades for Regional NSW homeowners. We break down why buyers love them, how they boost resale value, and which styles suit Australian homes best.",
    category: "Value",
    date: "28 January 2026",
    image: "blog-2",
  },
  {
    id: "3",
    title: "Zipscreens for Outdoor Living: The Complete Guide",
    excerpt: "Extend your living space outdoors with zipscreens. Everything you need to know about styles, pricing, and installation for patios and alfresco areas in Wagga Wagga, Griffith, and beyond.",
    category: "Design",
    date: "15 January 2026",
    image: "blog-3",
  },
  {
    id: "4",
    title: "Motorised Blinds: Are They Worth the Investment?",
    excerpt: "Smart-home convenience at the touch of a button. Here's how motorised blinds work, what they cost, and whether they make sense for your home in Regional NSW.",
    category: "Technology",
    date: "5 January 2026",
    image: "blog-4",
  },
  {
    id: "5",
    title: "Curtain Care & Maintenance: A Seasonal Guide",
    excerpt: "Keep your curtains looking fresh all year round. Simple tips for cleaning, care, and knowing when it's time for a replacement — tailored for the Australian climate.",
    category: "Maintenance",
    date: "20 December 2025",
    image: "blog-5",
  },
  {
    id: "6",
    title: "Plantation Shutters vs Blinds: What's Best for Australian Homes?",
    excerpt: "Comparing plantation shutters and blinds on price, durability, energy efficiency, and style. Which option suits your Regional NSW home better?",
    category: "Tips",
    date: "10 December 2025",
    image: "blog-1",
  },
  {
    id: "7",
    title: "How Much Do Plantation Shutters Cost in NSW?",
    excerpt: "A transparent breakdown of plantation shutter pricing in Regional NSW — what affects cost, what to budget, and how to get the best value from your investment.",
    category: "Value",
    date: "1 December 2025",
    image: "blog-2",
  },
  {
    id: "8",
    title: "Best Window Coverings for Hot Australian Summers",
    excerpt: "Beat the heat with the right window furnishings. We compare shutters, blinds, curtains, and zipscreens for keeping your home cool during harsh NSW summers.",
    category: "Tips",
    date: "20 November 2025",
    image: "blog-3",
  },
  {
    id: "9",
    title: "Zip Screens vs Outdoor Blinds: Which Is Right for Your Patio?",
    excerpt: "Both options transform outdoor spaces, but they're not the same. Here's how zip screens and outdoor blinds compare on wind resistance, UV protection, and aesthetics.",
    category: "Design",
    date: "10 November 2025",
    image: "blog-4",
  },
  {
    id: "10",
    title: "Curtains vs Blinds for Privacy in Your Home",
    excerpt: "Privacy matters — especially in bedrooms and living areas. We compare curtains and blinds for light control, privacy, and style in Regional NSW homes.",
    category: "Tips",
    date: "1 November 2025",
    image: "blog-5",
  },
  {
    id: "11",
    title: "How to Choose the Right Shutters for Your Home",
    excerpt: "Timber, PVC, or aluminium? Hinged, sliding, or bi-fold? A practical guide to choosing plantation shutters that suit your home's style, climate, and budget.",
    category: "Design",
    date: "20 October 2025",
    image: "blog-1",
  },
  {
    id: "12",
    title: "Energy-Efficient Window Furnishings for NSW Homes",
    excerpt: "The right window coverings can cut your energy bills by up to 40%. Discover which products offer the best insulation for Regional NSW's hot summers and cool winters.",
    category: "Value",
    date: "10 October 2025",
    image: "blog-2",
  },
  {
    id: "13",
    title: "Security Roller Shutters: Protection and Insulation Guide",
    excerpt: "Security roller shutters do more than deter intruders. Learn how they insulate, reduce noise, and protect against storms — perfect for homes in Wagga Wagga and beyond.",
    category: "Tips",
    date: "1 October 2025",
    image: "blog-3",
  },
  {
    id: "14",
    title: "Window Furnishing Trends for Australian Homes in 2026",
    excerpt: "From natural timber shutters to motorised sheer curtains — the biggest window furnishing trends Australian homeowners are embracing this year.",
    category: "Design",
    date: "20 September 2025",
    image: "blog-4",
  },
  {
    id: "15",
    title: "How Shutters Increase Your Property Value",
    excerpt: "Real estate agents agree: quality shutters are one of the highest-ROI home improvements. Here's the data and what it means for Regional NSW sellers.",
    category: "Value",
    date: "10 September 2025",
    image: "blog-5",
  },
  {
    id: "16",
    title: "Outdoor Living Ideas with Zipscreens and Awnings",
    excerpt: "Transform your patio, deck, or alfresco into a year-round living space with zipscreens and awnings. Inspiration and practical advice for NSW homeowners.",
    category: "Design",
    date: "1 September 2025",
    image: "blog-1",
  },
  {
    id: "17",
    title: "Child-Safe Window Coverings: A Parent's Guide",
    excerpt: "Cordless blinds, motorised shutters, and safe curtain designs — everything parents need to know about child-safe window furnishings in Australia.",
    category: "Tips",
    date: "20 August 2025",
    image: "blog-2",
  },
  {
    id: "18",
    title: "Timber vs PVC Shutters: Which Material Is Best?",
    excerpt: "Both look great, but timber and PVC shutters perform differently in Australian conditions. We compare durability, cost, maintenance, and aesthetics.",
    category: "Tips",
    date: "10 August 2025",
    image: "blog-3",
  },
  {
    id: "19",
    title: "How to Measure Your Windows for Blinds and Shutters",
    excerpt: "Getting accurate measurements is critical for a perfect fit. Our step-by-step guide shows you how — or book a free in-home measure with our team.",
    category: "Maintenance",
    date: "1 August 2025",
    image: "blog-4",
  },
  {
    id: "20",
    title: "Preparing Your Home for Summer: Window Furnishing Checklist",
    excerpt: "A seasonal checklist for Regional NSW homeowners — from checking UV damage on blinds to upgrading to heat-reflective window coverings before summer hits.",
    category: "Maintenance",
    date: "20 July 2025",
    image: "blog-5",
  },
];
