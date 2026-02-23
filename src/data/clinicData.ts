export const CLINIC = {
  name: "MonteKristo Windows and Doors",
  slogan: "Better windows. Better doors. Better living.",
  address: "4720 Sunset Blvd, Suite 200, Scottsdale, AZ 85251",
  phone: "1800-465-893",
  email: "hello@montekristowindows.com",
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
    focus: "15+ years designing and installing residential windows and doors — from energy audits to finished projects",
    image: "team-ryan",
    credentials: ["Certified Window Installer", "Licensed Contractor"],
  },
  {
    name: "Marco Vasquez",
    role: "Senior Project Manager",
    focus: "Full-scale window and door replacement projects, from initial measurement to final inspection",
    image: "team-marco",
    credentials: ["AAMA Certified", "OSHA Certified"],
  },
  {
    name: "Jenna Park",
    role: "Design Consultant",
    focus: "Custom window and door selection, energy-efficiency recommendations, and client collaboration on home aesthetics",
    image: "team-jenna",
  },
  {
    name: "Derek Sullivan",
    role: "Lead Installer",
    focus: "Precision window fitting, door frame construction, weatherproofing, and finish carpentry",
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
    title: "Window Installation",
    description: "Professional installation of new windows — double-hung, casement, picture, bay, and specialty shapes — fitted precisely for comfort, insulation, and curb appeal.",
    icon: "square",
  },
  {
    title: "Window Replacement",
    description: "Upgrade outdated, drafty, or damaged windows with modern energy-efficient units. We handle removal, fitting, insulation, and trim for a seamless finish.",
    icon: "replace",
  },
  {
    title: "Door Installation",
    description: "Entry doors, interior doors, French doors, and patio doors — expertly installed with proper alignment, weatherstripping, and hardware for security and style.",
    icon: "door-open",
  },
  {
    title: "Sliding Doors",
    description: "Smooth-gliding sliding glass doors that connect your living space to the outdoors — energy-efficient glass, durable tracks, and modern frames.",
    icon: "move-horizontal",
  },
  {
    title: "Energy-Efficient Windows",
    description: "Low-E glass, argon-filled panes, and insulated frames that reduce energy bills by up to 30%. ENERGY STAR® certified options available.",
    icon: "zap",
  },
  {
    title: "Custom Doors",
    description: "Handcrafted and custom-sized doors in wood, fiberglass, and steel — designed to match your home's architecture and personal style.",
    icon: "paintbrush",
  },
  {
    title: "Repairs & Maintenance",
    description: "Window seal repairs, glass replacement, hardware fixes, weatherstripping, and door realignment — keeping everything working like new.",
    icon: "wrench",
  },
  {
    title: "Commercial Installations",
    description: "Storefront windows, commercial entry systems, and large-scale glazing projects — built to code with professional-grade materials.",
    icon: "building",
  },
];

export const REVIEWS = [
  { name: "Karen Wilson", rating: 5, treatment: "Window Replacement", text: "MonteKristo replaced all 14 windows in our home. The energy savings have been incredible — our electric bill dropped by almost 30%. The crew was clean, professional, and finished ahead of schedule.", location: "Scottsdale, AZ", timeAgo: "2 weeks ago", avatar: "KW" },
  { name: "David Ramirez", rating: 5, treatment: "Door Installation", text: "They installed a beautiful craftsman-style front door with sidelights. The transformation is stunning — neighbors keep commenting. Installation was flawless and they cleaned up perfectly.", location: "Phoenix, AZ", timeAgo: "1 month ago", avatar: "DR" },
  { name: "Michelle Torres", rating: 5, treatment: "Sliding Doors", text: "Our new sliding glass doors completely opened up our living room to the patio. The quality is outstanding and they slide so smoothly. Professional install from start to finish.", location: "Tempe, AZ", timeAgo: "3 weeks ago", avatar: "MT" },
  { name: "Tom Brennan", rating: 5, treatment: "Energy-Efficient Windows", text: "We upgraded to triple-pane windows and the difference is night and day. No more drafts, no more condensation, and our home stays comfortable even in the worst Arizona heat.", location: "Paradise Valley, AZ", timeAgo: "1 month ago", avatar: "TB" },
  { name: "Lisa Moreno", rating: 4, treatment: "Window Replacement", text: "Great work replacing our old single-pane windows. The new ones look amazing and the house is so much quieter now. Only wish the lead time was a bit shorter!", location: "Mesa, AZ", timeAgo: "2 months ago", avatar: "LM" },
  { name: "James Park", rating: 5, treatment: "Custom Doors", text: "From the first consultation to the final installation, MonteKristo was exceptional. Ryan personally measured everything. Our custom mahogany door is absolutely stunning.", location: "Chandler, AZ", timeAgo: "3 weeks ago", avatar: "JP" },
  { name: "Angela Simmons", rating: 5, treatment: "Window Installation", text: "They installed bay windows in our kitchen and bedroom. The natural light is incredible now. Their crew protected our floors and furniture and left everything spotless.", location: "Gilbert, AZ", timeAgo: "1 month ago", avatar: "AS" },
  { name: "Robert Kim", rating: 5, treatment: "Commercial Installation", text: "MonteKristo handled our office storefront glazing project. Professional, on-time, and the quality of work was outstanding. Highly recommend for commercial jobs.", location: "Peoria, AZ", timeAgo: "6 weeks ago", avatar: "RK" },
  { name: "Patricia Hayes", rating: 5, treatment: "Window Replacement", text: "Got estimates from three companies. MonteKristo wasn't the cheapest but they were the most thorough — detailed energy analysis, material comparisons, and a clear timeline. Worth every penny.", location: "Scottsdale, AZ", timeAgo: "2 months ago", avatar: "PH" },
  { name: "Steve Gonzalez", rating: 5, treatment: "Door Installation", text: "These guys actually show up on time, protect your property, and clean up every day. Our new French doors are gorgeous and the insulation is noticeably better. Highly recommend.", location: "Tempe, AZ", timeAgo: "3 months ago", avatar: "SG" },
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "5 Signs It's Time to Replace Your Windows",
    excerpt: "Drafts, condensation, and rising energy bills are just the start. Here are the telltale signs your windows need professional replacement.",
    category: "Planning",
    date: "12 February 2026",
    image: "blog-windows-tips",
    featured: true,
  },
  {
    id: "2",
    title: "How New Windows Boost Your Home's Value",
    excerpt: "Studies show window replacement can recoup 70–80% of costs at resale. Here's how to maximize your return on investment.",
    category: "Value",
    date: "5 February 2026",
    image: "blog-windows-value",
  },
  {
    id: "3",
    title: "Window & Door Costs in 2026: What to Expect",
    excerpt: "From single window replacements to full-home upgrades, we break down what drives the cost of residential window and door projects.",
    category: "Budgeting",
    date: "28 January 2026",
    image: "blog-windows-seasonal",
  },
  {
    id: "4",
    title: "Double-Pane vs. Triple-Pane: Which Is Right for You?",
    excerpt: "Both have pros and cons. We compare insulation, noise reduction, cost, and energy savings to help you choose the right windows.",
    category: "Design",
    date: "20 January 2026",
    image: "blog-windows-tips",
  },
  {
    id: "5",
    title: "Energy-Efficient Windows: Are They Worth It?",
    excerpt: "Low-E coatings and argon gas fills can cut energy costs by 25–30%. Here's how to decide if upgrading makes financial sense.",
    category: "Technology",
    date: "12 January 2026",
    image: "blog-windows-value",
  },
  {
    id: "6",
    title: "What to Expect During a Window Replacement Project",
    excerpt: "Getting your windows replaced can feel overwhelming. Here's a step-by-step look at what happens from measurement to completion.",
    category: "Planning",
    date: "5 January 2026",
    image: "blog-windows-seasonal",
  },
  {
    id: "7",
    title: "The ROI of a New Front Door: Is It Worth It?",
    excerpt: "First impressions matter. Here's how a new entry door impacts curb appeal, security, and home value.",
    category: "Value",
    date: "22 December 2025",
    image: "blog-windows-value",
  },
  {
    id: "8",
    title: "Seasonal Window Maintenance Guide for Arizona",
    excerpt: "Arizona's heat takes a toll on windows and seals. Here's what to check each season to keep your windows performing year-round.",
    category: "Maintenance",
    date: "15 December 2025",
    image: "blog-windows-tips",
  },
  {
    id: "9",
    title: "How Long Does a Window Replacement Take?",
    excerpt: "Timeline expectations vary by project scope. We break down realistic schedules from single-window swaps to whole-home replacements.",
    category: "Planning",
    date: "8 December 2025",
    image: "blog-windows-seasonal",
  },
  {
    id: "10",
    title: "Sliding Doors vs. French Doors: Which to Choose?",
    excerpt: "Both open your home to the outdoors, but they differ in space requirements, style, and cost. Here's a detailed comparison.",
    category: "Design",
    date: "1 December 2025",
    image: "blog-windows-tips",
  },
  {
    id: "11",
    title: "Why You Should Never DIY Window Installation",
    excerpt: "Poor installation leads to air leaks, water damage, and voided warranties. Here's why hiring a certified installer is worth every penny.",
    category: "Tips",
    date: "24 November 2025",
    image: "blog-windows-seasonal",
  },
  {
    id: "12",
    title: "How to Choose the Right Window & Door Company",
    excerpt: "Certifications, warranties, and real reviews matter more than the lowest bid. Here's what to look for in an installation company.",
    category: "Tips",
    date: "17 November 2025",
    image: "blog-windows-value",
  },
];
