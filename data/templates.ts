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
