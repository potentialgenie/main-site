export const site = {
  name: "Make It Real",
  title: "Make It Real",
  description:
    "Make It Real is a web and mobile development team. Clients hire us to design and build products across industries.",
  email: "hello@makeit-real.world",
  supportEmail: "support@makeit-real.world",
  url: "https://makeit-real.world",
} as const;

export const nav = [
  { href: "/#about", label: "About Us" },
  { href: "/#help", label: "Services" },
  { href: "/#technologies", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
] as const;

// The side panel lists every section, including the ones left out of the header bar.
export const sideNav = [
  { href: "/#about", label: "About Us" },
  { href: "/#help", label: "Services" },
  { href: "/#technologies", label: "Work" },
  { href: "/#industries", label: "Industries" },
  { href: "/#access", label: "Collaborate" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

// Short two-row link block in the header, in the place the reference uses for social links.
export const quickLinks = [
  { href: "/#web-mobile-development", label: "Web." },
  { href: "/#ui-ux-design", label: "UX." },
  { href: "/#ai-apps", label: "AI." },
  { href: "/#ecommerce-development", label: "Shop." },
] as const;

export const footerColumns = [
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
  {
    title: "Top Links",
    links: [
      { href: "/#about", label: "About" },
      { href: "/#help", label: "Services" },
      { href: "/#industries", label: "Industries" },
      { href: "/#access", label: "Collaborate" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact Us" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/#web-mobile-development", label: "Web & Mobile" },
      { href: "/#ui-ux-design", label: "UI UX Design" },
      { href: "/#ecommerce-development", label: "Ecommerce" },
      { href: "/#ai-apps", label: "AI Apps" },
      { href: "/#team", label: "Team Member" },
    ],
  },
] as const;

export const industries = [
  {
    title: "Healthcare",
    body: "Scheduling, patient portals, and clinic tools that staff can run.",
  },
  {
    title: "Education",
    body: "Course platforms, school portals, and learning apps.",
  },
  {
    title: "Finance and insurance",
    body: "Account tools, onboarding, and internal dashboards when a template is not enough.",
  },
  {
    title: "Real estate",
    body: "Listing sites, agent tools, and portals for tenants or owners.",
  },
  {
    title: "Retail and ecommerce",
    body: "Stores, catalogs, checkout, and the account tools around them.",
  },
  {
    title: "Media and entertainment",
    body: "Publishing sites, memberships, and companion apps.",
  },
  {
    title: "Travel and hospitality",
    body: "Booking flows, property sites, and guest apps.",
  },
  {
    title: "Logistics and supply chain",
    body: "Tracking, dispatch, and warehouse tools.",
  },
  {
    title: "Legal",
    body: "Client intake, document portals, and practice sites.",
  },
  {
    title: "Manufacturing and consumer goods",
    body: "Catalogs, distributor portals, and order tools for physical goods.",
  },
  {
    title: "HR and recruiting",
    body: "Applicant tracking, careers sites, and the tools an HR team uses after someone is hired.",
  },
  {
    title: "Professional services",
    body: "Firm sites, client portals, and the software a services business needs once spreadsheets are not enough.",
  },
] as const;

export const technologyGroups = [
  {
    id: "web-mobile-development",
    code: "01",
    image: "/images/web.jpg",
    name: "Web & Mobile Development",
    summary: "Sites and apps in one practice, from the screens people use to the data behind them.",
    specialties: [
      { name: "Front-End Development", body: "The screens, states, and browser behavior people use.", stack: ["React", "Next.js", "Vue", "Angular", "TypeScript"] },
      { name: "Back-End Development", body: "APIs, accounts, data, and the integrations behind the interface.", stack: ["Node.js", "Python", "PHP", "Laravel", "Django"] },
      { name: "Full Stack Development", body: "One team for the interface, the API, and the database.", stack: ["TypeScript", "Node.js", "PostgreSQL", "Next.js"] },
      { name: "CMS Development", body: "A site you can edit without calling a developer for every change.", stack: ["WordPress", "Webflow", "Headless CMS"] },
      { name: "Mobile App Development", body: "iPhone, iPad, and Android products, native or from one shared codebase.", stack: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { name: "Mobile Game Development", body: "A game for a phone, rather than a business app.", stack: ["Unity", "Flutter", "Native mobile"] },
    ],
  },
  {
    id: "ui-ux-design",
    code: "02",
    image: "/images/design.jpg",
    name: "UI UX Design",
    summary: "Design alongside the build, so the product has a shape before the code.",
    specialties: [
      { name: "UX/UI Design", body: "Flows and an interface a developer can build.", stack: ["Figma", "Design systems"] },
      { name: "Web Design", body: "Marketing sites and product screens designed for a browser.", stack: ["Responsive layout", "Figma"] },
      { name: "Mobile Design", body: "iOS and Android layouts that follow patterns people already know.", stack: ["iOS", "Android", "Figma"] },
      { name: "Prototyping", body: "A clickable version of the product before the full build is agreed.", stack: ["Figma", "Interactive prototype"] },
    ],
  },
  {
    id: "ecommerce-development",
    code: "03",
    image: "/images/ecommerce.jpg",
    name: "Ecommerce Development",
    summary: "A store needs a catalog, a checkout, and accounts. We build that with WooCommerce, Magento, Medusa, or a custom checkout.",
    specialties: [
      {
        name: "Ecommerce Website Development",
        body: "Store setup, catalog, checkout, accounts, and the changes after launch, on WooCommerce, Magento, Medusa, or a custom checkout.",
        stack: ["WooCommerce", "Magento", "Medusa", "Custom checkout"],
      },
    ],
  },
  {
    id: "ai-apps",
    code: "04",
    image: "/images/AI.jpg",
    name: "AI Apps & Integration",
    summary: "Assistants and model features inside a product, built with the model APIs and retrieval tools below.",
    specialties: [
      {
        name: "AI Chatbot Development",
        body: "A support or internal assistant with a clear job inside the product, using OpenAI, Anthropic, LangChain, and retrieval over your own documents.",
        stack: ["OpenAI", "Anthropic", "LangChain", "RAG", "pgvector"],
      },
      {
        name: "AI Integration",
        body: "Model calls, document workflows, and automation added to a web or mobile app.",
        stack: ["OpenAI", "Gemini", "LlamaIndex", "Hugging Face", "Python", "Node.js"],
      },
    ],
  },
  {
    id: "scripts-automation",
    code: "05",
    image: "/images/automation.jpg",
    name: "Scripts & Automation",
    summary: "Automations and scripts when a full product is more than the job needs, using Make, n8n, Zapier, and custom scripts.",
    specialties: [
      {
        name: "Scripting & Automation",
        body: "Imports, reports, and the repetitive steps a team should not do by hand, connected with Make, n8n, Zapier, Pipedream, or a Python or Node script.",
        stack: ["Make", "n8n", "Zapier", "Pipedream", "Power Automate", "Python", "Node.js", "Google Apps Script"],
      },
    ],
  },
  {
    id: "desktop",
    code: "06",
    image: "/images/desktop.jpg",
    name: "Desktop Application Development",
    summary: "Software that runs on a computer, not in a browser or an app store, built with Electron, Tauri, .NET, Qt, and others.",
    specialties: [
      {
        name: "Desktop Software Development",
        body: "A desktop tool for Windows, macOS, or Linux when the work does not belong in a browser.",
        stack: ["Electron", "Tauri", ".NET", "Qt", "Flutter", "C++", "Java", "Swift"],
      },
    ],
  },
  {
    id: "games",
    code: "07",
    image: "/images/game-development.png",
    name: "Game Design & Development",
    summary: "A game designed and built as its own product, with Unity, Unreal Engine, Godot, and the tools around them.",
    specialties: [
      {
        name: "Video Game Development",
        body: "The game itself, plus the interface and art around it, for desktop, mobile, or the web.",
        stack: ["Unity", "Unreal Engine", "Godot", "C#", "C++", "Blender", "Phaser", "Flutter"],
      },
    ],
  },
] as const;

export const clientStages = [
  {
    step: "01",
    title: "Send the order",
    body: "Tell us the product, who uses it, and the industry. A finished specification is not required. The form at the bottom is enough to start.",
  },
  {
    step: "02",
    title: "We assign the team",
    body: "We match that note to the specialties further down: web and mobile, a store, UI UX, AI, automation, desktop, or a game.",
  },
  {
    step: "03",
    title: "We agree the scope",
    body: "Together we write what will be built, what will not, and how the work is paid. Nothing starts before both sides accept that.",
  },
  {
    step: "04",
    title: "We build and hand it over",
    body: "We ship the agreed release and leave you with a product you can run, plus the notes you need to keep it going.",
  },
] as const;

export const faqs = [
  {
    q: "Do you take client orders?",
    a: "Yes. Companies and individuals hire us for web and mobile work. Each order has an agreed scope and a price.",
  },
  {
    q: "Which industries do you work in?",
    a: "Healthcare, education, finance and insurance, real estate, retail and ecommerce, media, travel, logistics, legal, manufacturing, HR, and professional services.",
  },
  {
    q: "What does Web & Mobile Development include?",
    a: "Sites and apps in the same order. That can be front end, back end, a CMS, and iOS, Android, or one shared mobile codebase.",
  },
  {
    q: "Do I need a finished specification?",
    a: "No. Describe the product, who uses it, and what the first release has to do. A finished document is not required before the first conversation.",
  },
  {
    q: "When does work start?",
    a: "After both sides agree the scope and how it is paid. A message on this site is not an order by itself.",
  },
] as const;

export const collaborationRequest = "Collaboration to earn, for someone in financial difficulty";

export const requestTypes = [
  {
    label: "Web & Mobile Development",
    options: [
      "Front-end development for a website or web application",
      "Back-end development: APIs, accounts, and data",
      "Full-stack web application, from interface to database",
      "A CMS website you can update yourself",
      "Native iOS application",
      "Native Android application",
      "Cross-platform application in Flutter or React Native",
      "Mobile game",
    ],
  },
  {
    label: "UI UX Design",
    options: [
      "UX and UI design for a web or mobile product",
      "Web or mobile interface design",
      "Clickable prototype before the build",
    ],
  },
  {
    label: "Product",
    options: [
      "Ecommerce store: catalog, checkout, and accounts",
      "AI assistant or model integration inside a product",
      "Script or internal automation",
      "Desktop application",
      "Video game",
    ],
  },
  {
    label: "How to start",
    options: [
      "Help defining the scope before a build",
      collaborationRequest,
    ],
  },
] as const;

// Shown in the testimonial-style cards. These are our own commitments, not client quotes.
export const promises = [
  {
    title: "Scope Agreed First",
    tag: "Before work starts",
    image: "/images/handshake.jpg",
    body: "We write down what will be built, what will not, and how it is paid. Nothing starts before both sides accept it.",
  },
  {
    title: "One Team, Whole Build",
    tag: "During the build",
    image: "/images/web.jpg",
    body: "Design, front end, back end, and mobile stay in one order, so you never coordinate three separate vendors.",
  },
  {
    title: "A Product You Can Run",
    tag: "At handover",
    image: "/images/desktop.jpg",
    body: "We ship the agreed release with the notes you need to keep it going after launch.",
  },
  {
    title: "A Short Note Is Enough",
    tag: "First message",
    image: "/images/design.jpg",
    body: "Tell us the product and who uses it. We reply with how we would build it and what the first release needs.",
  },
] as const;

// Shown in the team-style cards: the specialist roles inside the team, not named people.
export const specialists = [
  { role: "Front-End Developers", stack: "React · Next.js · Vue", image: "/images/web.jpg" },
  { role: "Mobile Developers", stack: "Swift · Kotlin · Flutter", image: "/images/mobile.jpg" },
  { role: "UI UX Designers", stack: "Figma · Prototypes", image: "/images/design.jpg" },
  { role: "AI Engineers", stack: "OpenAI · Anthropic · RAG", image: "/images/AI.jpg" },
  { role: "Automation Engineers", stack: "Make · n8n · Python", image: "/images/automation.jpg" },
  { role: "Game Developers", stack: "Unity · Unreal · Godot", image: "/images/game-development.png" },
] as const;
