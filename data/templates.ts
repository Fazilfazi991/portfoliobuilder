export type Template = {
  id: string;
  name: string;
  category: string;
  label: string;
  tier: "Free" | "Pro";
  dark: boolean;
  accent: string;
  publicPath: string;
};

export const filters = [
  "All",
  "Job Seeker",
  "Freelancer",
  "Doctor",
  "Designer",
  "Teacher",
  "Developer",
  "Illustrator",
  "Consultant",
  "Photographer",
  "Fashion",
  "Marketer",
  "More",
];

export const templates: Template[] = [
  {
    id: "job-seeker-executive",
    name: "Executive Profile",
    category: "Job Seeker",
    label: "For experienced professionals",
    tier: "Free",
    dark: false,
    accent: "bg-brand-600",
    publicPath: "/p/templates/job-seeker-executive",
  },
  {
    id: "freelancer-client-magnet",
    name: "Client Magnet",
    category: "Freelancer",
    label: "For freelancers & service providers",
    tier: "Free",
    dark: false,
    accent: "bg-cyan-500",
    publicPath: "/p/templates/freelancer-client-magnet",
  },
  {
    id: "marketer-results-first",
    name: "Results First",
    category: "Marketer",
    label: "For performance marketers",
    tier: "Pro",
    dark: true,
    accent: "bg-emerald-500",
    publicPath: "/p/templates/marketer-results-first",
  },
  {
    id: "doctor-trust-profile",
    name: "Doctor Trust Profile",
    category: "Doctor",
    label: "For doctors & clinic professionals",
    tier: "Pro",
    dark: false,
    accent: "bg-sky-500",
    publicPath: "/p/templates/doctor-trust-profile",
  },
  {
    id: "teacher-learning-profile",
    name: "Learning Profile",
    category: "Teacher",
    label: "For teachers, tutors & trainers",
    tier: "Pro",
    dark: false,
    accent: "bg-amber-500",
    publicPath: "/p/templates/teacher-learning-profile",
  },
  {
    id: "designer-visual-showcase",
    name: "Visual Showcase",
    category: "Designer",
    label: "For designers & art directors",
    tier: "Pro",
    dark: true,
    accent: "bg-rose-500",
    publicPath: "/p/templates/designer-visual-showcase",
  },
  {
    id: "illustrator-storybook",
    name: "Storybook Illustrator",
    category: "Illustrator",
    label: "For illustrators, artists & visual storytellers",
    tier: "Pro",
    dark: false,
    accent: "bg-[#ef756b]",
    publicPath: "/p/templates/illustrator-storybook",
  },
  {
    id: "brand-strategist-elegant",
    name: "Elegant Brand Strategist",
    category: "Consultant",
    label: "For strategists, consultants & coaches",
    tier: "Pro",
    dark: true,
    accent: "bg-[#b19061]",
    publicPath: "/p/templates/brand-strategist-elegant",
  },
  {
    id: "developer-codecraft",
    name: "CodeCraft Developer",
    category: "Developer",
    label: "For developers & software engineers",
    tier: "Pro",
    dark: true,
    accent: "bg-blue-600",
    publicPath: "/p/templates/developer-codecraft",
  },
  {
    id: "photographer-cinematic",
    name: "Cinematic Photographer",
    category: "Photographer",
    label: "For photographers, videographers & visual artists",
    tier: "Pro",
    dark: true,
    accent: "bg-[#d5a45b]",
    publicPath: "/p/templates/photographer-cinematic",
  },
  {
    id: "fashion-designer-editorial",
    name: "Editorial Fashion Designer",
    category: "Fashion",
    label: "For designers, stylists & creative directors",
    tier: "Pro",
    dark: true,
    accent: "bg-[#d8b875]",
    publicPath: "/p/templates/fashion-designer-editorial",
  },
  {
    id: "graphic-designer-bold",
    name: "Bold Graphic Designer",
    category: "Designer",
    label: "For bold visual and brand designers",
    tier: "Pro",
    dark: true,
    accent: "bg-[#c7ff00]",
    publicPath: "/p/templates/graphic-designer-bold",
  },
];

export const includedSections = [
  "Hero Section",
  "About",
  "Portfolio / Work",
  "Services",
  "Testimonials",
  "Contact",
  "Blog Optional",
];
