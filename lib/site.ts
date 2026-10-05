export const site = {
  name: "Potential Genie",
  title: "Potential Genie — Web and mobile developers for client orders.",
  description:
    "Potential Genie is a web and mobile development team. Clients hire the developers to design and build products across industries.",
  email: "hello@potentialgenie.com",
  supportEmail: "support@potentialgenie.com",
  url: "https://potentialgenie.com",
} as const;

export const nav = [
  { href: "/team", label: "Team" },
  { href: "/technologies", label: "Technologies" },
  { href: "/help", label: "What we can help" },
] as const;

export const footerColumns = [
  {
    title: "Work",
    links: [
      { href: "/help", label: "What we can help" },
      { href: "/help#contact", label: "Contact the team" },
      { href: "/team", label: "Developers" },
      { href: "/technologies", label: "Technologies" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: "/technologies#web-development", label: "Web development" },
      { href: "/technologies#mobile-development", label: "Mobile development" },
      { href: "/technologies#web-mobile-design", label: "Design" },
      { href: "/technologies#ecommerce-development", label: "Ecommerce" },
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

export const developers = [
  {
    title: "Front-end developers",
    body: "They build the screens people use. React, Next.js, Vue, and TypeScript are the usual tools, matched to the product rather than the other way around.",
  },
  {
    title: "Back-end developers",
    body: "They build the APIs, data, accounts, and integrations a web or mobile product depends on after the interface is no longer a picture.",
  },
  {
    title: "Full-stack developers",
    body: "They take a client order from the interface through to the server, which is how a smaller engagement stays with one responsible developer.",
  },
  {
    title: "iOS developers",
    body: "They ship native iPhone and iPad apps in Swift when the order needs the platform itself, not a shared codebase.",
  },
  {
    title: "Android developers",
    body: "They ship native Android apps in Kotlin, including the device and store constraints that cross-platform work sometimes hides.",
  },
  {
    title: "Cross-platform developers",
    body: "They build one product for iOS and Android with Flutter or React Native when that is the right trade for the client’s budget and timeline.",
  },
  {
    title: "Ecommerce developers",
    body: "They launch and change stores on Shopify, WooCommerce, and custom checkout flows, which is its own specialty on Upwork.",
  },
  {
    title: "Designers",
    body: "They do UX and UI, web design, mobile design, and prototypes, so the developers are not guessing at the product while they build it.",
  },
] as const;

export const industries = [
  {
    title: "Healthcare",
    body: "Scheduling, patient portals, and clinic tools. Healthcare is one of the industries Upwork’s own client mix and project categories name directly.",
  },
  {
    title: "Education",
    body: "Course platforms, school portals, and learning apps. Education is a regular buyer of web and mobile work on the marketplace.",
  },
  {
    title: "Finance and insurance",
    body: "Account tools, onboarding, and internal dashboards for firms that cannot put client data in a generic template.",
  },
  {
    title: "Real estate",
    body: "Listing sites, agent tools, and tenant or owner portals. Real estate and rental is a named slice of Upwork’s client base.",
  },
  {
    title: "Retail and ecommerce",
    body: "Stores, catalogs, and checkout. Ecommerce website development is its own subcategory under Upwork’s web and mobile category.",
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
    body: "Tracking, dispatch, and warehouse tools. Upwork lists supply-chain project work as its own specialty.",
  },
  {
    title: "Legal",
    body: "Client intake, document portals, and practice sites. Legal is a top-level category on Upwork, and firms there hire product work too.",
  },
  {
    title: "Manufacturing and consumer goods",
    body: "Catalogs, distributor portals, and order tools. Manufacturing and consumer goods are among the industries Upwork has reported in its largest non-tech clients.",
  },
  {
    title: "HR and recruiting",
    body: "Applicant tracking, careers sites, and internal HR tools, next to Upwork’s own recruiting and HR specialties.",
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
    upwork: "Web Development",
    summary: "Upwork’s core web subcategory. A client order here is a site or web application, split by which layer the team owns.",
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
    upwork: "Mobile Development",
    summary: "Upwork splits mobile into business apps and games. The team staffs native or cross-platform work to the order.",
    specialties: [
      { name: "Mobile App Development", body: "iPhone, iPad, and Android products, native or from one codebase.", stack: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { name: "Mobile Game Development", body: "A mobile game or interactive product rather than a business app.", stack: ["Unity", "Flutter", "Native mobile"] },
    ],
  },
  {
    id: "web-mobile-design",
    code: "03",
    upwork: "Web & Mobile Design",
    summary: "The design specialties Upwork keeps beside development, so a build has a shape before the code.",
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
    upwork: "Ecommerce Development",
    summary: "Upwork keeps stores in their own subcategory. A catalog and a checkout are not just another website.",
    specialties: [
      { name: "Ecommerce Website Development", body: "Store setup, catalog, checkout, accounts, and the changes after launch.", stack: ["Shopify", "WooCommerce", "Custom checkout"] },
    ],
  },
  {
    id: "ai-apps",
    code: "05",
    upwork: "AI Apps & Integration",
    summary: "Upwork’s subcategory for assistants and model calls inside a product, not a separate research lab.",
    specialties: [
      { name: "AI Chatbot Development", body: "A support or internal assistant with a defined job inside the product.", stack: ["Chat UI", "Retrieval", "APIs"] },
      { name: "AI Integration", body: "Model calls, document workflows, and automation wired into an existing web or mobile app.", stack: ["APIs", "RAG", "Automation"] },
    ],
  },
  {
    id: "qa-testing",
    code: "06",
    upwork: "QA Testing",
    summary: "Upwork lists testing beside the build. The team uses it to check a release, not as a standing offer with no product.",
    specialties: [
      { name: "Automation Testing", body: "Repeatable checks around the flows a client order must not break.", stack: ["End-to-end tests", "CI"] },
      { name: "Manual Testing", body: "A person walks the release on the devices and browsers the users have.", stack: ["Web", "iOS", "Android"] },
    ],
  },
  {
    id: "scripts-utilities",
    code: "07",
    upwork: "Scripts & Utilities",
    summary: "Smaller Upwork orders: a script or internal utility when a full product is the wrong size.",
    specialties: [
      { name: "Scripting & Automation", body: "Imports, reports, and the repetitive steps a team should not do by hand.", stack: ["Python", "Node.js"] },
    ],
  },
  {
    id: "desktop",
    code: "08",
    upwork: "Desktop Application Development",
    summary: "Upwork’s desktop subcategory, for software that runs on a computer rather than in a browser or app store.",
    specialties: [
      { name: "Desktop Software Development", body: "A desktop tool when the client’s work does not belong in a browser.", stack: ["Desktop app", "Local data"] },
    ],
  },
  {
    id: "games",
    code: "09",
    upwork: "Game Design & Development",
    summary: "Upwork’s game subcategory, separate from the mobile-game specialty above.",
    specialties: [
      { name: "Video Game Development", body: "A game client orders as a product, including the build and the interface around it.", stack: ["Unity", "Game UI"] },
    ],
  },
  {
    id: "blockchain",
    code: "10",
    upwork: "Blockchain, NFT & Cryptocurrency",
    summary: "Upwork groups chain products here. The team treats them as software orders with a defined user and a defined system.",
    specialties: [
      { name: "Blockchain & NFT Development", body: "A product that reads or writes chain state, including NFT flows when that is the order.", stack: ["Smart contracts", "Web clients"] },
      { name: "Crypto Coins & Tokens", body: "Token-related product work a client can specify, not an offer to issue a coin for its own sake.", stack: ["Tokens", "Wallets"] },
      { name: "Crypto Wallet Development", body: "Wallet interface and the application around holding or sending value.", stack: ["Wallet UI", "APIs"] },
    ],
  },
  {
    id: "product",
    code: "11",
    upwork: "Product Management & Scrum",
    summary: "Upwork’s delivery specialties. They sit next to a build so the order has an owner and a sequence.",
    specialties: [
      { name: "Product Management", body: "What the release is, who it is for, and what is deliberately left out.", stack: ["Scope", "Priorities"] },
      { name: "Scrum Leadership", body: "A working rhythm for a client order that runs longer than one release.", stack: ["Sprints", "Review"] },
    ],
  },
  {
    id: "other-software",
    code: "12",
    upwork: "Other — Software Development",
    summary: "The remaining specialties Upwork files under Web, Mobile & Software Dev.",
    specialties: [
      { name: "AR/VR Development", body: "An augmented or virtual experience when that is the product, not a decoration on a website.", stack: ["AR", "VR", "3D"] },
      { name: "Database Development", body: "Schema, queries, and the data model a web or mobile product depends on.", stack: ["PostgreSQL", "MySQL"] },
      { name: "Emerging Tech", body: "A newer tool only when it is the right implementation of a stated client order.", stack: ["Prototype", "Integration"] },
      { name: "Firmware Development", body: "Software on a device itself, taken only when the order is actually firmware.", stack: ["Embedded", "Device software"] },
      { name: "Coding Tutoring", body: "Teaching a client’s team the stack, when the order is instruction rather than a build.", stack: ["Web", "Mobile"] },
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
    a: "Healthcare, education, finance and insurance, real estate, retail and ecommerce, media, travel, logistics, legal, manufacturing, HR, and professional services. Those are industries where Upwork clients regularly hire this kind of development.",
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

export const requestTypes = ["A website or web application", "A mobile app", "Web and mobile together", "A question about the team"] as const;
