export type PremiumTheme =
  | "storybook"
  | "elegant"
  | "developer"
  | "photographer"
  | "fashion"
  | "bold";

export type PremiumTemplate = {
  slug: string;
  brand: string;
  subtitle: string;
  theme: PremiumTheme;
  nav: string[];
  cta: string;
  socialLinks: string[];
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    primary: string;
    secondary?: string;
    sticker?: string;
  };
  about: {
    label: string;
    heading: string;
    text: string;
    link: string;
  };
  stats: { value: string; label: string }[];
  services: { title: string; text: string }[];
  projects: { title: string; meta: string; text?: string }[];
  gallery: { title: string; meta: string }[];
  logos: string[];
  testimonials: { quote: string; name: string; role: string }[];
  contact: {
    heading: string;
    text: string;
    email: string;
    phone: string;
    location: string;
    cta: string;
  };
};

export const premiumTemplates: PremiumTemplate[] = [
  {
    slug: "illustrator-storybook",
    brand: "Lena Doodle",
    subtitle: "Illustrator",
    theme: "storybook",
    nav: ["Home", "Portfolio", "About", "Services", "Shop", "Blog", "Contact"],
    cta: "Let's Work Together",
    socialLinks: ["Instagram", "Behance", "Pinterest"],
    hero: {
      eyebrow: "Illustrator and visual storyteller",
      headline: "Turning ideas into illustrations that tell stories.",
      intro:
        "Hi, I'm Lena, an illustrator and visual storyteller who loves color, characters, and coffee.",
      primary: "View My Work",
    },
    about: {
      label: "About Me",
      heading: "Stories with color, character, and heart.",
      text:
        "I'm Lena Doodle, an illustrator based in Portland. My work is inspired by everyday moments, nature, and the magic of imagination. I create artwork for children's books, brands, editorial, and more.",
      link: "More about me",
    },
    stats: [
      { value: "42", label: "Books illustrated" },
      { value: "8+", label: "Years creating" },
      { value: "120+", label: "Happy clients" },
      { value: "15", label: "Licensing partners" },
    ],
    services: [
      { title: "Children's Book Illustration", text: "Whimsical stories brought to life." },
      { title: "Character Design", text: "Unique characters with personality." },
      { title: "Editorial Illustration", text: "Engaging visuals for articles and books." },
      { title: "Brand Packaging", text: "Illustrations that build your brand." },
      { title: "Surface Pattern Design", text: "Playful patterns for products and more." },
      { title: "Commissions", text: "Custom artwork made just for you." },
    ],
    projects: [
      { title: "The Forest Friends", meta: "Children's Book Illustration" },
      { title: "Meadow Light Branding", meta: "Branding and Packaging" },
      { title: "Editorial Illustration Series", meta: "Magazine Illustration" },
    ],
    gallery: [
      { title: "Little Fox Meadow", meta: "Characters" },
      { title: "Village Morning", meta: "Children's Books" },
      { title: "Flower Crown", meta: "Editorial" },
      { title: "River Story", meta: "Nature" },
      { title: "Cozy Bear", meta: "Characters" },
      { title: "Botanical Pattern", meta: "Patterns" },
    ],
    logos: ["All", "Characters", "Children's Books", "Editorial", "Nature", "Patterns"],
    testimonials: [
      {
        quote:
          "Lena is a dream to work with. Her illustrations are full of life, color, and heart.",
        name: "Emily Harper",
        role: "Art Director, Paper and Pine Publishing",
      },
    ],
    contact: {
      heading: "Let's Create Something Beautiful",
      text: "Have a project in mind or just want to say hello? I'd love to hear from you.",
      email: "hello@lenadoodle.com",
      phone: "@lena.doodle",
      location: "Portland, Oregon",
      cta: "Send a Message",
    },
  },
  {
    slug: "brand-strategist-elegant",
    brand: "Elevare",
    subtitle: "Brand Strategy",
    theme: "elegant",
    nav: ["Home", "About", "Services", "Work", "Insights", "Contact"],
    cta: "Let's Talk",
    socialLinks: ["LinkedIn", "Instagram"],
    hero: {
      eyebrow: "Independent brand strategist",
      headline: "Clarity is the foundation. Strategy builds the future.",
      intro:
        "I help ambitious businesses uncover their edge, craft powerful brands, and create lasting impact.",
      primary: "Discover My Approach",
      sticker: "Strategy Creates Clarity",
    },
    about: {
      label: "Hi, I'm Alex Morgan",
      heading: "Brand strategist. Problem solver. Growth partner.",
      text:
        "With 10+ years of experience, I partner with founders and leadership teams to build brands that are clear, compelling, and built to scale.",
      link: "Learn more about me",
    },
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "75+", label: "Brands Partnered With" },
      { value: "2.3x", label: "Average Increase in Brand Perception" },
      { value: "98%", label: "Client Satisfaction Rate" },
    ],
    services: [
      { title: "Brand Strategy", text: "Uncover opportunity, define positioning, and build a strategy that drives decisions and growth." },
      { title: "Brand Identity", text: "Create a distinctive visual identity that reflects your value and resonates with your audience." },
      { title: "Brand Activation", text: "Bring your brand to life across experiences, campaigns, and channels that drive impact." },
    ],
    projects: [
      { title: "Verdeo", meta: "Luxury Skincare Brand", text: "Brand Strategy, Identity, Packaging" },
      { title: "Monroe Wellness", meta: "Wellness Brand", text: "Brand Strategy, Identity, Website" },
      { title: "Northvale Capital", meta: "Private Investment Firm", text: "Brand Strategy, Identity, Collateral" },
    ],
    gallery: [
      { title: "Brand Strategy", meta: "Purpose, positioning and differentiation" },
      { title: "Brand Identity", meta: "Visual systems that communicate and connect" },
      { title: "Brand Growth", meta: "Go-to-market alignment and activation" },
    ],
    logos: ["Verdeo", "Monroe Wellness", "Northvale Capital", "Lumen Studio", "Altura Hospitality", "Ridgeline Systems"],
    testimonials: [
      { quote: "Alex brought clarity to our vision and direction every step of the way.", name: "Jessica Parker", role: "Founder, Verdeo Skincare" },
      { quote: "The new brand identity elevated our entire business.", name: "Michael Turner", role: "CEO, Northvale Capital" },
      { quote: "Professional, insightful, and incredibly strategic.", name: "Kelly Monroe", role: "Founder, Monroe Wellness" },
    ],
    contact: {
      heading: "Ready to elevate your brand?",
      text: "Tell me about your project and let's explore how strategy can drive your next stage of growth.",
      email: "hello@elevarestrategy.com",
      phone: "+1 (415) 555-0198",
      location: "San Francisco, CA",
      cta: "Schedule a Consultation",
    },
  },
  {
    slug: "developer-codecraft",
    brand: "CodeCraft",
    subtitle: "Full-Stack Developer",
    theme: "developer",
    nav: ["Home", "About", "Projects", "Services", "Process", "Testimonials", "Contact"],
    cta: "Download CV",
    socialLinks: ["GitHub", "LinkedIn", "Email"],
    hero: {
      eyebrow: "Hello, I'm",
      headline: "Alex Morgan Full-Stack Developer",
      intro: "I build fast, scalable, and beautiful web applications that deliver exceptional user experiences.",
      primary: "View My Work",
      secondary: "Get In Touch",
      sticker: "98 Lighthouse Score",
    },
    about: {
      label: "About Me",
      heading: "Building solutions through code",
      text:
        "I'm a full-stack developer with 5+ years of experience building web applications using modern technologies. I specialize in JavaScript ecosystems and cloud-native solutions.",
      link: "More About Me",
    },
    stats: [
      { value: "50+", label: "Projects Completed" },
      { value: "5+", label: "Years Experience" },
      { value: "30+", label: "Happy Clients" },
      { value: "98", label: "Performance Score" },
    ],
    services: [
      { title: "Web Application Development", text: "Custom web apps built with modern stacks and best practices." },
      { title: "API Development and Integration", text: "RESTful APIs, GraphQL, and third-party integrations." },
      { title: "Database Design and Management", text: "Scalable data solutions and query optimization." },
      { title: "Performance Optimization", text: "Speed up your applications and improve user experience." },
    ],
    projects: [
      { title: "FinDash", meta: "Full-Stack", text: "A modern financial dashboard with real-time analytics, budget tracking, and investment insights." },
      { title: "ShopSphere", meta: "Full-Stack", text: "E-commerce platform with payments, product management, and admin dashboard." },
      { title: "TaskFlow", meta: "Frontend", text: "A productivity app for team collaboration, task tracking, and real-time progress." },
    ],
    gallery: [
      { title: "JavaScript", meta: "Language" },
      { title: "TypeScript", meta: "Language" },
      { title: "React", meta: "Frontend" },
      { title: "Next.js", meta: "Framework" },
      { title: "Node.js", meta: "Runtime" },
      { title: "PostgreSQL", meta: "Database" },
      { title: "MongoDB", meta: "Database" },
      { title: "Docker", meta: "DevOps" },
      { title: "AWS", meta: "Cloud" },
    ],
    logos: ["Understand", "Plan", "Build", "Deliver"],
    testimonials: [
      { quote: "Alex delivered a high-quality platform that exceeded expectations.", name: "Sarah Johnson", role: "CEO, FinDash" },
      { quote: "Working with Alex was a game-changer. He's professional, fast, and solves problems efficiently.", name: "Michael Chen", role: "CTO, ShopSphere" },
      { quote: "Alex transformed our idea into a powerful product.", name: "Emily Davis", role: "Product Manager, TaskFlow" },
    ],
    contact: {
      heading: "Let's build something great together",
      text: "I'm currently open to new opportunities and interesting projects.",
      email: "alex@codecraft.dev",
      phone: "+1 (415) 555-0198",
      location: "San Francisco, CA",
      cta: "Send Message",
    },
  },
  {
    slug: "photographer-cinematic",
    brand: "Lucien Roux",
    subtitle: "Photography",
    theme: "photographer",
    nav: ["Home", "Portfolio", "Stories", "About", "Clients", "Contact"],
    cta: "View Portfolio",
    socialLinks: ["Instagram", "Behance", "Email"],
    hero: {
      eyebrow: "Capturing moments. Telling stories.",
      headline: "Timeless Images. Real Emotions.",
      intro:
        "I'm Lucien Roux, a visual storyteller and photographer based in the mountains. I capture the raw, the real, and the extraordinary in every frame.",
      primary: "View Portfolio",
    },
    about: {
      label: "About Lucien",
      heading: "A visual storyteller drawn to atmosphere and emotion.",
      text:
        "My work blends patient observation with cinematic framing, creating photographs that feel honest, tactile, and quietly unforgettable.",
      link: "Read the story",
    },
    stats: [
      { value: "14+", label: "Years behind the lens" },
      { value: "32", label: "Countries photographed" },
      { value: "180+", label: "Commissions" },
      { value: "24", label: "Editorial features" },
    ],
    services: [
      { title: "Landscapes", text: "Remote places, dramatic weather, and patient light." },
      { title: "Portraits", text: "Intimate editorial portraits with natural depth." },
      { title: "Weddings", text: "Emotional documentary coverage for meaningful days." },
      { title: "Travel", text: "Atmospheric stories for publications and brands." },
      { title: "Commercial", text: "Cinematic imagery for campaigns and launches." },
    ],
    projects: [
      { title: "Iceland: Land of Fire and Ice", meta: "Travel Story" },
      { title: "Emma and Julien: A Day to Remember", meta: "Wedding Story" },
      { title: "Wandering Kyoto", meta: "Street Story" },
    ],
    gallery: [
      { title: "Alpine Light", meta: "Landscape" },
      { title: "Black Shore", meta: "Ocean" },
      { title: "Forest Road", meta: "Travel" },
      { title: "Quiet Portrait", meta: "Portrait" },
      { title: "Northern Lake", meta: "Landscape" },
    ],
    logos: ["Landscapes", "Portraits", "Weddings", "Travel", "Commercial"],
    testimonials: [
      { quote: "Lucien has an incredible eye for detail and a unique way of capturing emotion.", name: "Sophia Martin", role: "Bride" },
      { quote: "Professional, creative, and so easy to work with.", name: "Alexander Hughes", role: "Marketing Director" },
      { quote: "Every shot tells a story. Lucien's work is timeless.", name: "Bella Conti", role: "Travel Blogger" },
    ],
    contact: {
      heading: "Beautiful Together.",
      text: "Available for projects worldwide.",
      email: "hello@lucienroux.com",
      phone: "+33 6 12 34 56 78",
      location: "Chamonix, France",
      cta: "Get In Touch",
    },
  },
  {
    slug: "fashion-designer-editorial",
    brand: "Audrey Marcel",
    subtitle: "Fashion Designer",
    theme: "fashion",
    nav: ["Home", "About", "Collections", "Lookbook", "Projects", "Press", "Contact"],
    cta: "Book a Consultation",
    socialLinks: ["Instagram", "Pinterest", "LinkedIn"],
    hero: {
      eyebrow: "Paris fashion designer",
      headline: "Designing Identity. Dressing Confidence.",
      intro: "Luxury fashion with a point of view. Timeless pieces. Modern stories.",
      primary: "Discover My Work",
    },
    about: {
      label: "About Audrey",
      heading: "Fashion is my language. Storytelling is my craft.",
      text:
        "I'm Audrey Marcel, a Paris-based fashion designer and stylist with a passion for creating timeless, expressive, and empowering aesthetics.",
      link: "View My Journey",
    },
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "25+", label: "Collections Designed" },
      { value: "12", label: "Countries Worldwide" },
      { value: "50+", label: "Features in Top Publications" },
    ],
    services: [
      { title: "Eclat", text: "Spring / Summer 2024" },
      { title: "Obsidian", text: "Fall / Winter 2023" },
      { title: "Lumiere", text: "Resort 2024" },
      { title: "Atelier Noir", text: "Couture Line" },
    ],
    projects: [
      { title: "La Vie En Rose", meta: "Fashion Film", text: "Creative Direction and Styling" },
      { title: "Muse", meta: "Magazine Editorial", text: "Styling and Wardrobe" },
      { title: "Equilibre", meta: "Brand Campaign", text: "Creative Direction" },
    ],
    gallery: [
      { title: "Coastal Whispers", meta: "Spring / Summer 2024" },
      { title: "Noir Elegance", meta: "Fall / Winter 2023" },
      { title: "Modern Heritage", meta: "Resort 2024" },
      { title: "Gilded Hour", meta: "Evening Edit" },
      { title: "Urban Poetry", meta: "Pre-Fall 2024" },
    ],
    logos: ["Vogue", "Bazaar", "Elle", "Numero", "L'Officiel", "Harper's Bazaar", "Grazia"],
    testimonials: [
      { quote: "Audrey has an extraordinary eye for detail and a rare ability to translate emotion into fashion.", name: "Sophie Delacour", role: "Editor-in-Chief, L'Officiel" },
      { quote: "Her designs empower women to feel strong, beautiful, and unapologetically themselves.", name: "Clara Moreau", role: "Creative Director, Maison Elan" },
    ],
    contact: {
      heading: "Get in Touch",
      text: "I'm always open to new collaborations, styling opportunities, and inspiring conversations.",
      email: "hello@audreymarcel.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      cta: "Send Message",
    },
  },
  {
    slug: "graphic-designer-bold",
    brand: "Nova Studio",
    subtitle: "Graphic Designer and Visual Storyteller",
    theme: "bold",
    nav: ["Home", "About", "Work", "Services", "Blog", "Contact"],
    cta: "Let's Talk",
    socialLinks: ["Behance", "Instagram", "LinkedIn"],
    hero: {
      eyebrow: "Graphic designer and visual storyteller",
      headline: "Design that connects.",
      intro:
        "I create bold visual identities and stunning designs that speak, inspire, and leave a lasting impact.",
      primary: "View My Work",
      secondary: "About Me",
      sticker: "Creative minds shape brands",
    },
    about: {
      label: "About Nova",
      heading: "Hi, I'm Nova",
      text:
        "I'm a passionate graphic designer with 6+ years of experience helping brands stand out through strategic design and visual storytelling.",
      link: "Available for projects",
    },
    stats: [
      { value: "6+", label: "Years Experience" },
      { value: "90+", label: "Projects Shipped" },
      { value: "28", label: "Brand Systems" },
      { value: "14", label: "Awards and Mentions" },
    ],
    services: [
      { title: "Brand Identity", text: "Logo design, brand guidelines, and visual identity systems." },
      { title: "Print Design", text: "Brochures, posters, magazines, and other print materials." },
      { title: "UI/UX Design", text: "User-centered designs for websites and mobile apps." },
      { title: "Packaging Design", text: "Creative packaging that stands out on the shelf." },
      { title: "Social Media Design", text: "Scroll-stopping visuals for your social media presence." },
    ],
    projects: [
      { title: "Future Starts Now", meta: "Branding" },
      { title: "Verda", meta: "Packaging" },
      { title: "Track. Plan. Achieve.", meta: "UI/UX Design" },
      { title: "KOR Magazine", meta: "Editorial Design" },
    ],
    gallery: [
      { title: "Disrupt the Ordinary", meta: "Poster" },
      { title: "Think Beyond", meta: "Poster" },
      { title: "Good Design Matters", meta: "Mockup" },
      { title: "Creative Energy", meta: "Poster" },
      { title: "Focus Create Repeat", meta: "Poster" },
    ],
    logos: ["Verda", "KOR", "Lumen", "Aurora", "Wildhorn"],
    testimonials: [
      { quote: "Nova transformed our brand into something truly remarkable.", name: "Sarah Mitchell", role: "Founder, Lumen Agency" },
      { quote: "Professional, creative, and incredibly easy to work with.", name: "James Carter", role: "CEO, Wildhorn Coffee" },
      { quote: "Exceptional attention to detail and a unique creative touch.", name: "Olivia Bennett", role: "Marketing Manager, KOR" },
    ],
    contact: {
      heading: "Let's create something great!",
      text: "Have a project in mind? I'd love to hear about it.",
      email: "hello@novastudio.com",
      phone: "+1 (555) 123-4567",
      location: "Los Angeles, CA",
      cta: "Get In Touch",
    },
  },
];
