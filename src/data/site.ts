export const site = {
  name: "VEXBRIK",
  tagline: "Engineering the Future of Software",
  description:
    "VEXBRIK is an IT software engineering innovation startup building web platforms, mobile apps, AI solutions and cloud infrastructure for ambitious businesses.",
  email: "hello@vexbrik.com",
  phone: "+94 77 123 4567",
  address: "Colombo, Sri Lanka",
  socials: {
    github: "https://github.com/vexbrik",
    linkedin: "https://linkedin.com/company/vexbrik",
    twitter: "https://x.com/vexbrik",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Team Members" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const services = [
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Application Development",
    short: "High-performance web platforms built with Next.js, React and modern edge infrastructure.",
    points: [
      "Server-side rendered & static sites with Next.js",
      "Progressive Web Apps (PWA)",
      "E-commerce & SaaS platforms",
      "Headless CMS integrations",
    ],
  },
  {
    slug: "mobile-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    short: "Native-quality iOS and Android apps from a single codebase with React Native and Flutter.",
    points: [
      "Cross-platform apps with React Native & Flutter",
      "App Store / Play Store deployment",
      "Offline-first architectures",
      "Push notifications & real-time sync",
    ],
  },
  {
    slug: "ai-ml",
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    short: "Intelligent products powered by LLMs, computer vision and predictive analytics.",
    points: [
      "LLM-powered assistants & RAG pipelines",
      "Computer vision & OCR solutions",
      "Predictive analytics & forecasting",
      "MLOps & model deployment",
    ],
  },
  {
    slug: "cloud-devops",
    icon: "CloudCog",
    title: "Cloud & DevOps",
    short: "Scalable, secure cloud infrastructure with automated CI/CD pipelines on AWS, Azure and GCP.",
    points: [
      "Cloud architecture & migration",
      "Kubernetes & container orchestration",
      "CI/CD automation with GitHub Actions",
      "Infrastructure as Code (Terraform)",
    ],
  },
  {
    slug: "ui-ux",
    icon: "Palette",
    title: "UI/UX Design",
    short: "Human-centred product design that turns complex workflows into delightful experiences.",
    points: [
      "Product discovery & user research",
      "Wireframing & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
  },
  {
    slug: "consulting",
    icon: "LineChart",
    title: "Software Consulting",
    short: "Technical strategy, architecture reviews and dedicated engineering teams for scaling companies.",
    points: [
      "Architecture & code audits",
      "Digital transformation strategy",
      "Dedicated development teams",
      "Legacy system modernization",
    ],
  },
];

export const projects = [
  {
    title: "NovaPay",
    category: "FinTech",
    description:
      "A digital wallet and payment gateway processing thousands of daily transactions with real-time fraud detection.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    title: "MediTrack",
    category: "HealthTech",
    description:
      "Hospital management platform with patient records, appointment scheduling and telemedicine video consultations.",
    tech: ["React", "NestJS", "MongoDB", "WebRTC", "Docker"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "CargoLink",
    category: "Logistics",
    description:
      "Fleet tracking and logistics optimization system with live GPS maps, route planning and delivery analytics.",
    tech: ["Next.js", "Go", "Kafka", "PostGIS", "Kubernetes"],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "LearnSphere",
    category: "EdTech",
    description:
      "AI-powered e-learning platform with adaptive quizzes, video courses and an LLM tutor for personalised study plans.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI", "Supabase"],
    gradient: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "ShopVerse",
    category: "E-Commerce",
    description:
      "Headless multi-vendor marketplace with real-time inventory, Stripe payments and a personalised recommendation engine.",
    tech: ["Next.js", "GraphQL", "Stripe", "Redis", "Vercel"],
    gradient: "from-sky-500 to-blue-400",
  },
  {
    title: "AgroSense",
    category: "AgriTech / IoT",
    description:
      "IoT dashboard for smart farming — soil sensors, weather forecasting and ML-driven irrigation recommendations.",
    tech: ["React", "MQTT", "TimescaleDB", "TensorFlow", "Azure"],
    gradient: "from-lime-500 to-green-400",
  },
];

export const techStack = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Python", "FastAPI", "Go", "GraphQL"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Flutter", "Expo", "Swift", "Kotlin"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL", "TimescaleDB"],
  },
  {
    group: "AI / ML",
    items: ["OpenAI", "Anthropic Claude", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel"],
  },
];

export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes",
  "Tailwind CSS", "GraphQL", "TensorFlow", "Flutter",
];

export const values = [
  {
    icon: "Lightbulb",
    title: "Innovation First",
    text: "We experiment early with emerging technology so our clients ship products ahead of the market.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality & Security",
    text: "Every line of code is reviewed, tested and security-audited before it reaches production.",
  },
  {
    icon: "Users",
    title: "Client Partnership",
    text: "We work as an extension of your team — transparent roadmaps, weekly demos, no surprises.",
  },
  {
    icon: "Rocket",
    title: "Ship Fast, Iterate",
    text: "Agile sprints and continuous delivery mean value lands in users' hands every week.",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "VEXBRIK Founded",
    text: "Started in Colombo by a team of engineers with a vision to build world-class software from Sri Lanka.",
  },
  {
    year: "2024",
    title: "First Enterprise Client",
    text: "Delivered our first large-scale fintech platform, processing payments for thousands of users.",
  },
  {
    year: "2025",
    title: "AI Practice Launched",
    text: "Formed a dedicated AI/ML team building LLM-powered products and RAG pipelines for clients.",
  },
  {
    year: "2026",
    title: "Going Global",
    text: "Expanding to serve clients across Asia-Pacific, Europe and North America with 40+ projects shipped.",
  },
];

export const team = [
  {
    name: "Sanjana Abeysiri",
    role: "Founder & CEO",
    initials: "SA",
    bio: "Product visionary and full-stack engineer leading VEXBRIK's strategy and client partnerships.",
  },
  {
    name: "Dinuka Perera",
    role: "CTO",
    initials: "DP",
    bio: "Cloud architect with a decade of experience designing distributed systems at scale.",
  },
  {
    name: "Ishara Fernando",
    role: "Head of Engineering",
    initials: "IF",
    bio: "Leads delivery across web and mobile squads with a focus on code quality and velocity.",
  },
  {
    name: "Nethmi Silva",
    role: "Head of Design",
    initials: "NS",
    bio: "Crafts human-centred interfaces and owns the VEXBRIK design system.",
  },
];

export const testimonials = [
  {
    quote:
      "VEXBRIK rebuilt our platform on Next.js and cut page load times by 70%. They feel like part of our own team.",
    name: "James Carter",
    role: "CTO, NovaPay",
  },
  {
    quote:
      "From the first workshop to launch day, the process was transparent and fast. Our app shipped two weeks early.",
    name: "Amara De Silva",
    role: "Founder, LearnSphere",
  },
  {
    quote:
      "Their AI team turned a vague idea into a production RAG assistant in six weeks. Exceptional engineering.",
    name: "Michael Tan",
    role: "VP Product, CargoLink",
  },
];
