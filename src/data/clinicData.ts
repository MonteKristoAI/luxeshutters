export const CLINIC = {
  name: "Luxe Shutters",
  slogan: "Where Style Meets Everyday Comfort.",
  address: "Temora, New South Wales 2666, Australia",
  phone: "1800-465-893",
  email: "hello@luxeshutters.com",
  hours: {
    weekday: "Monday – Friday: 7:00am – 6:00pm",
    saturday: "Saturday: 8:00am – 2:00pm",
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
    description: "Our shutters combine timeless elegance with exceptional craftsmanship, adding a touch of sophistication to any space.",
    icon: "blinds",
  },
  {
    title: "Blinds",
    description: "With their versatility and functionality, our blinds are the perfect blend of fashion and practicality.",
    icon: "sliders-horizontal",
  },
  {
    title: "Curtains",
    description: "From sheer elegance to opulent drapes, our curtains offer a wide range of options to suit your personal taste and interior decor.",
    icon: "curtains",
  },
  {
    title: "Zipscreens",
    description: "Sleek design, smooth operation, and customizable options, our zip screens seamlessly blend into your existing architecture.",
    icon: "monitor",
  },
  {
    title: "Awnings",
    description: "Our awnings provide the perfect shade solution, protecting you from the scorching sun while adding a touch of elegance.",
    icon: "umbrella",
  },
  {
    title: "Security Roller Shutters",
    description: "Designed to protect your home, our roller shutters offer a robust defense against intruders, while adding a layer of privacy and insulation.",
    icon: "shield",
  },
];

export const REVIEWS = [
  { name: "Karen Wilson", rating: 5, treatment: "Plantation Shutters", text: "Luxe Shutters installed plantation shutters throughout our home. The quality is stunning and the light control is perfect. The crew was clean, professional, and finished ahead of schedule.", location: "Scottsdale, AZ", timeAgo: "2 weeks ago", avatar: "KW" },
  { name: "David Ramirez", rating: 5, treatment: "Roller Blinds", text: "They installed motorised roller blinds in every room. The transformation is incredible — neighbours keep commenting. Installation was flawless and they cleaned up perfectly.", location: "Phoenix, AZ", timeAgo: "1 month ago", avatar: "DR" },
  { name: "Michelle Torres", rating: 5, treatment: "Zipscreens", text: "Our new zipscreens completely transformed our outdoor living area. The quality is outstanding and they operate so smoothly. Professional install from start to finish.", location: "Tempe, AZ", timeAgo: "3 weeks ago", avatar: "MT" },
  { name: "Tom Brennan", rating: 5, treatment: "Block-out Curtains", text: "We upgraded to premium block-out curtains and the difference is night and day. No more glare, perfect temperature control, and our home feels so much more luxurious.", location: "Paradise Valley, AZ", timeAgo: "1 month ago", avatar: "TB" },
  { name: "Lisa Moreno", rating: 4, treatment: "Shutters", text: "Great work installing shutters in our living areas. They look amazing and the house feels so much more polished now. Only wish the lead time was a bit shorter!", location: "Mesa, AZ", timeAgo: "2 months ago", avatar: "LM" },
  { name: "James Park", rating: 5, treatment: "Custom Blinds", text: "From the first consultation to the final installation, Luxe Shutters was exceptional. Ryan personally measured everything. Our custom venetian blinds are absolutely stunning.", location: "Chandler, AZ", timeAgo: "3 weeks ago", avatar: "JP" },
  { name: "Angela Simmons", rating: 5, treatment: "Curtains & Sheers", text: "They installed S-fold curtains and sheers in our bedroom and living room. The natural light filtering is incredible now. Their crew protected our floors and furniture and left everything spotless.", location: "Gilbert, AZ", timeAgo: "1 month ago", avatar: "AS" },
  { name: "Robert Kim", rating: 5, treatment: "Commercial Blinds", text: "Luxe Shutters handled our office blind installation project. Professional, on-time, and the quality of work was outstanding. Highly recommend for commercial jobs.", location: "Peoria, AZ", timeAgo: "6 weeks ago", avatar: "RK" },
  { name: "Patricia Hayes", rating: 5, treatment: "Shutters", text: "Got estimates from three companies. Luxe Shutters wasn't the cheapest but they were the most thorough — detailed product comparisons, style recommendations, and a clear timeline. Worth every penny.", location: "Scottsdale, AZ", timeAgo: "2 months ago", avatar: "PH" },
  { name: "Steve Gonzalez", rating: 5, treatment: "Security Roller Shutters", text: "These guys actually show up on time, protect your property, and clean up every day. Our new security roller shutters are fantastic and the insulation is noticeably better. Highly recommend.", location: "Tempe, AZ", timeAgo: "3 months ago", avatar: "SG" },
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "5 Signs It's Time to Update Your Window Furnishings",
    excerpt: "Faded curtains, broken blinds, and outdated shutters are just the start. Here are the telltale signs your window furnishings need a refresh.",
    category: "Planning",
    date: "12 February 2026",
    image: "blog-windows-tips",
    featured: true,
  },
  {
    id: "2",
    title: "How New Shutters Boost Your Home's Value",
    excerpt: "Studies show quality window furnishings can significantly increase property value. Here's how to maximize your return on investment.",
    category: "Value",
    date: "5 February 2026",
    image: "blog-windows-value",
  },
  {
    id: "3",
    title: "Shutters, Blinds & Curtains: Cost Guide for 2026",
    excerpt: "From single-room blinds to whole-home shutter installations, we break down what drives the cost of premium window furnishings.",
    category: "Budgeting",
    date: "28 January 2026",
    image: "blog-windows-seasonal",
  },
  {
    id: "4",
    title: "Plantation Shutters vs. Roller Blinds: Which Is Right?",
    excerpt: "Both have pros and cons. We compare aesthetics, light control, cost, and durability to help you choose the right option.",
    category: "Design",
    date: "20 January 2026",
    image: "blog-windows-tips",
  },
  {
    id: "5",
    title: "Motorised Blinds: Are They Worth It?",
    excerpt: "Smart-home integration and convenience at the touch of a button. Here's how to decide if motorised blinds make sense for your home.",
    category: "Technology",
    date: "12 January 2026",
    image: "blog-windows-value",
  },
  {
    id: "6",
    title: "What to Expect During a Shutter Installation",
    excerpt: "Getting shutters installed can feel overwhelming. Here's a step-by-step look at what happens from measurement to completion.",
    category: "Planning",
    date: "5 January 2026",
    image: "blog-windows-seasonal",
  },
  {
    id: "7",
    title: "Zipscreens for Outdoor Living: The Complete Guide",
    excerpt: "Extend your living space outdoors. Here's everything you need to know about zipscreens for patios, alfresco areas, and balconies.",
    category: "Value",
    date: "22 December 2025",
    image: "blog-windows-value",
  },
  {
    id: "8",
    title: "Curtain Care & Maintenance: A Seasonal Guide",
    excerpt: "Keep your curtains looking fresh year-round. Here's what to check each season to maintain their appearance and performance.",
    category: "Maintenance",
    date: "15 December 2025",
    image: "blog-windows-tips",
  },
  {
    id: "9",
    title: "How Long Does a Shutter Installation Take?",
    excerpt: "Timeline expectations vary by project scope. We break down realistic schedules from single-room to whole-home installations.",
    category: "Planning",
    date: "8 December 2025",
    image: "blog-windows-seasonal",
  },
  {
    id: "10",
    title: "Roller Blinds vs. Curtains: Which to Choose?",
    excerpt: "Both offer style and function, but they differ in light control, maintenance, and cost. Here's a detailed comparison.",
    category: "Design",
    date: "1 December 2025",
    image: "blog-windows-tips",
  },
  {
    id: "11",
    title: "Why Professional Installation Matters for Shutters",
    excerpt: "Poor installation leads to misalignment, gaps, and voided warranties. Here's why hiring a certified installer is worth every penny.",
    category: "Tips",
    date: "24 November 2025",
    image: "blog-windows-seasonal",
  },
  {
    id: "12",
    title: "How to Choose the Right Window Furnishing Company",
    excerpt: "Experience, warranties, and real reviews matter more than the lowest price. Here's what to look for in an installation company.",
    category: "Tips",
    date: "17 November 2025",
    image: "blog-windows-value",
  },
];