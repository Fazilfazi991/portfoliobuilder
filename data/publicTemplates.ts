export type PublicTemplate = {
  slug: string;
  profession: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  nav: string[];
  stats: string[];
  statLabels: string[];
  servicesTitle: string;
  services: string[];
  projectsTitle: string;
  projects: string[];
  processTitle: string;
  process: string[];
  aboutTitle: string;
  about: string;
  credentialsTitle: string;
  credentials: string[];
  testimonials: string[];
  contactTitle: string;
  contactText: string;
  theme: {
    bg: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    soft: string;
    dark: string;
    hero: string;
  };
};

export const publicTemplates: PublicTemplate[] = [
  {
    slug: "job-seeker-executive",
    profession: "Executive Profile",
    name: "Daniel Carter",
    title: "Senior Operations Manager",
    headline: "Operations leader building efficient teams and measurable business growth.",
    summary:
      "Operations leader with 8+ years of experience improving processes, leading teams, and delivering measurable business growth.",
    primaryCta: "Download Resume",
    secondaryCta: "Contact Me",
    nav: ["Summary", "Experience", "Skills", "Projects", "Contact"],
    stats: ["8+", "24%", "15+"],
    statLabels: ["Years Experience", "Cost Reduction", "Teams Managed"],
    servicesTitle: "Career Highlights",
    services: ["Process Optimization", "Team Leadership", "Vendor Management", "Operational Strategy"],
    projectsTitle: "Featured Projects",
    projects: ["Regional Fulfillment Redesign", "Inventory Accuracy Program", "Executive KPI Dashboard"],
    processTitle: "Experience Timeline",
    process: ["Senior Operations Manager - Northline Group", "Operations Lead - Apex Retail", "Logistics Analyst - Metro Supply"],
    aboutTitle: "Professional Summary",
    about:
      "I help companies simplify operations, improve team performance, and build practical systems that scale across departments and locations.",
    credentialsTitle: "Education & Certifications",
    credentials: ["MBA, Operations Management", "Lean Six Sigma Green Belt", "Certified Project Management Professional"],
    testimonials: ["Daniel brings clarity to complex operations and consistently turns strategy into execution."],
    contactTitle: "Ready to discuss the next opportunity?",
    contactText: "Available for senior operations, transformation, and team leadership roles.",
    theme: {
      bg: "bg-white",
      text: "text-slate-950",
      muted: "text-slate-600",
      accent: "bg-brand-600",
      accentText: "text-brand-600",
      soft: "bg-blue-50",
      dark: "bg-slate-950",
      hero: "from-white via-blue-50 to-slate-100",
    },
  },
  {
    slug: "freelancer-client-magnet",
    profession: "Client Magnet",
    name: "Maya Fernandes",
    title: "Brand & Web Designer",
    headline: "I help small businesses look premium online.",
    summary:
      "Strategic brand and web design for founders who need a polished presence that earns trust and converts visitors into clients.",
    primaryCta: "Start a Project",
    secondaryCta: "View Work",
    nav: ["Services", "Work", "Process", "FAQ", "Contact"],
    stats: ["42", "3 wk", "96%"],
    statLabels: ["Brands Launched", "Average Timeline", "Client Satisfaction"],
    servicesTitle: "Services",
    services: ["Brand Identity", "Website Design", "Landing Pages", "Social Media Design"],
    projectsTitle: "Featured Work",
    projects: ["Cafe Rebrand & Website", "Coach Landing Page", "Boutique Social Kit"],
    processTitle: "Work Process",
    process: ["Discover the offer", "Design the premium system", "Launch and refine"],
    aboutTitle: "Why clients hire Maya",
    about:
      "I combine clear positioning, refined visuals, and conversion-focused layouts so your business feels established from the first click.",
    credentialsTitle: "FAQ",
    credentials: ["Projects start with a clear scope", "Most websites launch in 2-4 weeks", "Brand and web packages are available"],
    testimonials: ["Maya made our tiny brand feel premium overnight. The website paid for itself in the first month."],
    contactTitle: "Have a project in mind?",
    contactText: "Send a short brief and get a clear project plan within 24 hours.",
    theme: {
      bg: "bg-white",
      text: "text-slate-950",
      muted: "text-slate-600",
      accent: "bg-cyan-600",
      accentText: "text-cyan-700",
      soft: "bg-cyan-50",
      dark: "bg-slate-900",
      hero: "from-cyan-50 via-white to-blue-50",
    },
  },
  {
    slug: "marketer-results-first",
    profession: "Results First",
    name: "Arjun Nair",
    title: "Performance Marketing Strategist",
    headline: "I turn ad spend into predictable leads and sales.",
    summary:
      "Performance marketer helping growth teams scale paid acquisition with clear reporting, sharp creative testing, and disciplined funnel optimization.",
    primaryCta: "Get Free Audit",
    secondaryCta: "View Case Studies",
    nav: ["Results", "Case Studies", "Tools", "Services", "Contact"],
    stats: ["3.8x", "42K+", "AED 1.2M"],
    statLabels: ["Average ROAS", "Leads Generated", "Ad Spend Managed"],
    servicesTitle: "Growth Services",
    services: ["Paid Search", "Paid Social", "Landing Page Testing", "Analytics & Reporting"],
    projectsTitle: "Case Studies",
    projects: ["B2B Lead Funnel Scale", "E-commerce ROAS Recovery", "SaaS Trial Acquisition"],
    processTitle: "Marketing Tools Stack",
    process: ["Google Ads + Meta Ads", "GA4 + Looker Studio", "HubSpot + Hotjar"],
    aboutTitle: "Results-led marketing",
    about:
      "Every campaign starts with the economics: acquisition cost, lead quality, conversion rate, and creative testing velocity.",
    credentialsTitle: "Client Proof",
    credentials: ["Google Ads Certified", "Meta Blueprint trained", "Weekly performance dashboards"],
    testimonials: ["Arjun rebuilt our funnel and gave us the first predictable lead engine we have ever had."],
    contactTitle: "Want a clearer growth plan?",
    contactText: "Book a free audit and get three practical improvements for your funnel.",
    theme: {
      bg: "bg-slate-950",
      text: "text-white",
      muted: "text-slate-300",
      accent: "bg-emerald-500",
      accentText: "text-emerald-400",
      soft: "bg-slate-900",
      dark: "bg-black",
      hero: "from-slate-950 via-slate-900 to-emerald-950",
    },
  },
  {
    slug: "doctor-trust-profile",
    profession: "Trust Profile",
    name: "Dr. Amina Rahman",
    title: "Consultant Dermatologist",
    headline: "Evidence-based dermatology care for healthy, confident skin.",
    summary:
      "Helping patients achieve healthy, confident skin through evidence-based dermatology care.",
    primaryCta: "Book Appointment",
    secondaryCta: "Call Clinic",
    nav: ["About", "Treatments", "Clinic", "Reviews", "Contact"],
    stats: ["12+", "2K+", "15"],
    statLabels: ["Years Experience", "Patients Treated", "Research Papers"],
    servicesTitle: "Specializations",
    services: ["Acne Treatment", "Pigmentation Care", "Skin Cancer Screening", "Cosmetic Dermatology"],
    projectsTitle: "Treatments & Services",
    projects: ["Personalized Skin Plans", "Laser Consultation", "Preventive Skin Checks"],
    processTitle: "Clinic Information",
    process: ["Downtown Medical Center", "Mon-Sat Appointments", "Insurance support available"],
    aboutTitle: "About Dr. Amina",
    about:
      "Dr. Amina focuses on calm consultations, clear treatment plans, and long-term skin health for adults and teens.",
    credentialsTitle: "Education & Certifications",
    credentials: ["MD Dermatology", "Board Certified Dermatologist", "Member, International Dermatology Society"],
    testimonials: ["Dr. Amina explained every option clearly and helped me feel confident about my treatment plan."],
    contactTitle: "Start with a skin consultation",
    contactText: "Book a calm, evidence-led consultation at the clinic or online.",
    theme: {
      bg: "bg-white",
      text: "text-slate-950",
      muted: "text-slate-600",
      accent: "bg-sky-600",
      accentText: "text-sky-700",
      soft: "bg-sky-50",
      dark: "bg-slate-900",
      hero: "from-sky-50 via-white to-teal-50",
    },
  },
  {
    slug: "teacher-learning-profile",
    profession: "Learning Profile",
    name: "Sarah Thomas",
    title: "Mathematics Teacher & Online Tutor",
    headline: "Helping students understand math with confidence.",
    summary:
      "Helping students understand math with confidence through simple explanations and structured practice.",
    primaryCta: "Book Demo Class",
    secondaryCta: "View Courses",
    nav: ["Subjects", "Method", "Courses", "Results", "Contact"],
    stats: ["9+", "600+", "94%"],
    statLabels: ["Years Teaching", "Students Guided", "Exam Success"],
    servicesTitle: "Subjects Taught",
    services: ["Algebra", "Geometry", "Calculus", "Exam Preparation"],
    projectsTitle: "Courses & Classes",
    projects: ["Grade 10 Math Mastery", "SAT Math Sprint", "Calculus Foundations"],
    processTitle: "Teaching Method",
    process: ["Diagnose gaps", "Explain simply", "Practice with structure"],
    aboutTitle: "Friendly, structured learning",
    about:
      "Sarah creates a calm learning environment where students can ask questions, build habits, and see steady progress.",
    credentialsTitle: "Experience",
    credentials: ["Certified Mathematics Educator", "Online tutoring specialist", "Curriculum planning lead"],
    testimonials: ["My daughter went from fearing math to enjoying it. Sarah's structure made the difference."],
    contactTitle: "Book a demo class",
    contactText: "Try one friendly session and get a clear learning plan.",
    theme: {
      bg: "bg-white",
      text: "text-slate-950",
      muted: "text-slate-600",
      accent: "bg-amber-500",
      accentText: "text-amber-700",
      soft: "bg-amber-50",
      dark: "bg-slate-900",
      hero: "from-amber-50 via-white to-blue-50",
    },
  },
  {
    slug: "designer-visual-showcase",
    profession: "Visual Showcase",
    name: "Elena Brooks",
    title: "Visual Designer & Art Director",
    headline: "Visual identities and digital experiences for brands that want to stand out.",
    summary:
      "I create visual identities and digital experiences for brands that want to stand out.",
    primaryCta: "View Work",
    secondaryCta: "Hire Me",
    nav: ["Work", "Services", "Process", "About", "Contact"],
    stats: ["68", "14", "11"],
    statLabels: ["Projects Shipped", "Brand Systems", "Awards & Features"],
    servicesTitle: "Creative Services",
    services: ["Brand Design", "Web Design", "Creative Direction", "Campaign Visuals"],
    projectsTitle: "Selected Work",
    projects: ["Editorial Brand System", "Luxury Campaign Visuals", "Digital Product Identity"],
    processTitle: "Creative Process",
    process: ["Direction", "Visual system", "Launch assets"],
    aboutTitle: "About Elena",
    about:
      "Elena builds distinctive visual worlds for ambitious brands through identity, typography, art direction, and digital storytelling.",
    credentialsTitle: "Case Study Highlights",
    credentials: ["Identity systems with launch kits", "High-end website art direction", "Campaign visuals across channels"],
    testimonials: ["Elena gave our brand a visual language that finally matched the quality of our product."],
    contactTitle: "Ready for a stronger visual identity?",
    contactText: "Share your brand goals and Elena will suggest the best creative direction.",
    theme: {
      bg: "bg-neutral-950",
      text: "text-white",
      muted: "text-neutral-300",
      accent: "bg-rose-500",
      accentText: "text-rose-300",
      soft: "bg-neutral-900",
      dark: "bg-black",
      hero: "from-neutral-950 via-zinc-900 to-rose-950",
    },
  },
];
