export const site = {
  name: "Potential Genie",
  title: "Potential Genie",
  description:
    "Potential Genie is a web and mobile development team. Clients hire the developers to design and build products across industries.",
  email: "hello@potentialgenie.com",
  supportEmail: "support@potentialgenie.com",
  url: "https://potentialgenie.com",
} as const;

export const nav = [
  { href: "/#help", label: "What we can help" },
  { href: "/#technologies", label: "Technologies" },
] as const;

export const footerColumns = [
  {
    title: "Work",
    links: [
      { href: "/#help", label: "What we can help" },
      { href: "/#contact", label: "Tell us the order" },
      { href: "/#technologies", label: "Technologies" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: "/#web-development", label: "Web development" },
      { href: "/#mobile-development", label: "Mobile development" },
      { href: "/#web-mobile-design", label: "Design" },
      { href: "/#ecommerce-development", label: "Ecommerce" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
] as const;

export const industries = [
  {
    title: "Healthcare",
    body: "Scheduling, patient portals, and clinic tools for practices that need software their staff can actually run.",
  },
  {
    title: "Education",
    body: "Course platforms, school portals, and learning apps.",
  },
  {
    title: "Finance and insurance",
    body: "Account tools, onboarding, and internal dashboards for firms that cannot put client data in a generic template.",
  },
  {
    title: "Real estate",
    body: "Listing sites, agent tools, and tenant or owner portals.",
  },
  {
    title: "Retail and ecommerce",
    body: "Stores, catalogs, and checkout, including the account and order tools around them.",
  },
  {
    title: "Media and entertainment",
    body: "Publishing sites, memberships, and companion apps for companies in media, arts, and entertainment.",
  },
  {
    title: "Travel and hospitality",
    body: "Booking flows, property sites, and guest apps for operators who sell availability rather than a single product.",
  },
  {
    title: "Logistics and supply chain",
    body: "Tracking, dispatch, and warehouse tools for operators who move goods rather than pages.",
  },
  {
    title: "Legal",
    body: "Client intake, document portals, and practice sites for firms that cannot run on a shared inbox.",
  },
  {
    title: "Manufacturing and consumer goods",
    body: "Catalogs, distributor portals, and order tools for companies that sell physical goods.",
  },
  {
    title: "HR and recruiting",
    body: "Applicant tracking, careers sites, and the internal tools an HR team uses after the hire.",
  },
  {
    title: "Professional services",
    body: "Firm sites, client portals, and the internal software a services business runs on once spreadsheets stop being enough.",
  },
] as const;

export const technologyGroups = [
  {
    id: "web-development",
    code: "01",
    name: "Web Development",
    summary: "A client order here is a site or web application, split by which layer the team owns.",
    specialties: [
      { name: "Front-End Development", body: "The screens, states, and browser behavior people actually use.", stack: ["React", "Next.js", "Vue", "Angular", "TypeScript"] },
      { name: "Back-End Development", body: "APIs, accounts, data, and the integrations behind the interface.", stack: ["Node.js", "Python", "PHP", "Laravel", "Django"] },
      { name: "Full Stack Development", body: "One pod across the interface, the API, and the database.", stack: ["TypeScript", "Node.js", "PostgreSQL", "Next.js"] },
      { name: "CMS Development", body: "A site the client can edit without a developer on every change.", stack: ["WordPress", "Webflow", "Headless CMS"] },
    ],
  },
  {
    id: "mobile-development",
    code: "02",
    name: "Mobile Development",
    summary: "Business apps and games. The team staffs native or cross-platform work to the order.",
    specialties: [
      { name: "Mobile App Development", body: "iPhone, iPad, and Android products, native or from one codebase.", stack: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { name: "Mobile Game Development", body: "A mobile game or interactive product rather than a business app.", stack: ["Unity", "Flutter", "Native mobile"] },
    ],
  },
  {
    id: "web-mobile-design",
    code: "03",
    name: "Web & Mobile Design",
    summary: "Design sits beside development, so a build has a shape before the code.",
    specialties: [
      { name: "UX/UI Design", body: "Flows and an interface system a developer can implement.", stack: ["Figma", "Design systems"] },
      { name: "Web Design", body: "Marketing sites and product surfaces designed for a browser.", stack: ["Responsive layout", "Figma"] },
      { name: "Mobile Design", body: "iOS and Android layouts, using the patterns each platform already taught its users.", stack: ["iOS", "Android", "Figma"] },
      { name: "Prototyping", body: "A clickable version of the order before the full build is committed.", stack: ["Figma", "Interactive prototype"] },
    ],
  },
  {
    id: "ecommerce-development",
    code: "04",
    name: "Ecommerce Development",
    summary: "A catalog and a checkout are not just another website.",
    specialties: [
      { name: "Ecommerce Website Development", body: "Store setup, catalog, checkout, accounts, and the changes after launch.", stack: ["Shopify", "WooCommerce", "Custom checkout"] },
    ],
  },
  {
    id: "ai-apps",
    code: "05",
    name: "AI Apps & Integration",
    summary: "Assistants and model calls inside a product, not a separate research lab.",
    specialties: [
      { name: "AI Chatbot Development", body: "A support or internal assistant with a defined job inside the product.", stack: ["Chat UI", "Retrieval", "APIs"] },
      { name: "AI Integration", body: "Model calls, document workflows, and automation wired into an existing web or mobile app.", stack: ["APIs", "RAG", "Automation"] },
    ],
  },
  {
    id: "scripts-automation",
    code: "06",
    name: "Scripts & Automation",
    summary: "A script or automation when a full product is the wrong size.",
    specialties: [
      { name: "Scripting & Automation", body: "Imports, reports, and the repetitive steps a team should not do by hand.", stack: ["Python", "Node.js"] },
    ],
  },
  {
    id: "desktop",
    code: "07",
    name: "Desktop Application Development",
    summary: "Software that runs on a computer rather than in a browser or an app store.",
    specialties: [
      { name: "Desktop Software Development", body: "A desktop tool when the client’s work does not belong in a browser.", stack: ["Desktop app", "Local data"] },
    ],
  },
  {
    id: "games",
    code: "08",
    name: "Game Design & Development",
    summary: "Games, kept separate from the mobile-game specialty above.",
    specialties: [
      { name: "Video Game Development", body: "A game client orders as a product, including the build and the interface around it.", stack: ["Unity", "Game UI"] },
    ],
  },
] as const;

export const clientStages = [
  {
    step: "01",
    title: "Send the order",
    body: "What the product is, who uses it, and whether it is web, mobile, or both.",
  },
  {
    step: "02",
    title: "We staff it",
    body: "The developers whose practice matches the order: front end, mobile, ecommerce, or a full-stack pod.",
  },
  {
    step: "03",
    title: "We agree the scope",
    body: "What will be built, what will not, and how the work is paid. Nothing starts before that is clear.",
  },
  {
    step: "04",
    title: "We build and hand it over",
    body: "The team ships the agreed release and leaves you with something you can run.",
  },
] as const;

export const faqs = [
  {
    q: "Do you take client orders?",
    a: "Yes. Companies and individuals hire the developers for web and mobile work. The engagement is scoped and paid as a client order.",
  },
  {
    q: "Which industries do the developers work in?",
    a: "Healthcare, education, finance and insurance, real estate, retail and ecommerce, media, travel, logistics, legal, manufacturing, HR, and professional services.",
  },
  {
    q: "Can one order cover web and mobile?",
    a: "Yes. Say which surfaces the product needs. The team staffs front end, back end, iOS, Android, or cross-platform work to match.",
  },
  {
    q: "Do I need a finished specification?",
    a: "No. Describe the product, who uses it, and what the first release has to do. A polished document is not required before the first conversation.",
  },
  {
    q: "When does work start?",
    a: "After both sides agree the scope and how it is paid. A note on this site is not itself an order.",
  },
] as const;

export const collaborationRequest = "A collaboration to earn, for someone in financial difficulty";

export const requestTypes = [
  {
    label: "Web development",
    options: [
      "Front-end development for a website or web application",
      "Back-end development: APIs, accounts, and data",
      "Full-stack web application, from interface to database",
      "CMS website the client can update",
    ],
  },
  {
    label: "Mobile development",
    options: [
      "Native iOS application",
      "Native Android application",
      "Cross-platform application in Flutter or React Native",
      "Mobile game",
    ],
  },
  {
    label: "Design",
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
    label: "The engagement",
    options: [
      "Web and mobile together, one order",
      "Help defining the scope before a build",
      collaborationRequest,
    ],
  },
] as const;
