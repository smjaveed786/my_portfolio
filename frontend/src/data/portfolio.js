export const personal = {
  name: "Shaik Mohammad Javeed Ahamed",
  shortName: "Javeed Ahamed",
  firstName: "Javeed",
  headline: "AI & Full-Stack Developer | Agentic AI | React.js | Python | TypeScript",
  heroIntro: "Hi, I'm Javeed Ahamed",
  heroLines: ["Building Intelligent", "Digital Experiences", "with AI & Code."],
  heroSupport:
    "AI & Full-Stack Developer focused on Agentic AI, intelligent applications, modern web experiences and scalable software.",
  email: "smjaveedahamed786@gmail.com",
  phoneDisplay: "+91 80192 86186",
  whatsapp: "918019286186",
  location: "Guntur, Andhra Pradesh, India",
  github: "https://github.com/smjaveed786",
  githubRepos: "https://github.com/smjaveed786?tab=repositories",
  linkedin: "https://www.linkedin.com/in/shaik-mohammad-javeed-ahamed-68415a26a/",
  resume: "/Javeed_Ahamed_Resume.pdf",
  availability: "OPEN TO OPPORTUNITIES",
};

export const heroCode = `from agentic_ai import Agent
from intelligence import ReasoningEngine

agent = Agent(
    name="Javeed",
    skills=["AI", "Python", "React", "Agentic AI"]
)

while True:
    agent.learn()
    agent.build()
    agent.solve()`;

export const bgSnippets = [
  {
    lang: "python",
    code: `def build_future():\n    learn()\n    experiment()\n    create()`,
    top: "12%", left: "4%", depth: 0.4,
  },
  {
    lang: "javascript",
    code: `const future = await build({\n    intelligence: true,\n    creativity: true,\n    technology: true\n});`,
    top: "58%", left: "76%", depth: 0.8,
  },
  {
    lang: "typescript",
    code: `interface Developer {\n    name: string;\n    skills: string[];\n    passion: string;\n}`,
    top: "78%", left: "8%", depth: 0.6,
  },
  {
    lang: "bash",
    code: `git commit -m "build something meaningful"\nnpm run create-future`,
    top: "30%", left: "70%", depth: 1,
  },
  {
    lang: "python",
    code: `model = ReasoningEngine()\nmodel.train(dataset)\nagent.deploy(model)`,
    top: "86%", left: "58%", depth: 0.5,
  },
  {
    lang: "typescript",
    code: `const agent = await createAgent({\n    tools: ["search", "reason"]\n});`,
    top: "6%", left: "60%", depth: 0.9,
  },
];

export const aboutCards = [
  {
    icon: "Bot",
    title: "AI & Agentic Systems",
    text: "Building intelligent workflows, AI-powered applications and automation systems.",
  },
  {
    icon: "Layers",
    title: "Full-Stack Development",
    text: "Building modern web applications using React, TypeScript, Node.js, Python and REST APIs.",
  },
  {
    icon: "Puzzle",
    title: "Problem Solving",
    text: "Combining software engineering, data and AI to solve practical problems.",
  },
];

export const experience = [
  {
    org: "Freelance",
    role: "React Developer",
    period: "Apr 2026 — Present",
    tech: ["React.js", "TypeScript", "Redux", "REST APIs"],
    summary:
      "Developing a responsive employment management web application with React and TypeScript — reusable components, custom hooks, Context API & Redux, REST API integration, authentication and role-based access.",
    current: true,
  },
  {
    org: "Infosys SpringBoard",
    role: "AI / ML Internship",
    period: "Sep 2025 — Apr 2026",
    tech: ["Machine Learning", "Deep Learning", "NLP"],
    summary:
      "Applied machine learning, deep learning and NLP techniques to solve real-world problems, automate tasks and build data-driven solutions.",
  },
  {
    org: "Unstop",
    role: "Campus Ambassador",
    period: "May 2025 — May 2026",
    tech: ["Marketing", "Networking", "Leadership"],
    summary:
      "Bridging Unstop and students by promoting competitions, internships and opportunities on campus.",
  },
  {
    org: "Bluestock",
    role: "SDE Intern",
    period: "Jan 2025 — Mar 2025",
    tech: ["Python", "JavaScript", "REST APIs"],
    summary:
      "Developed and optimized web-based modules. Participated in code reviews, debugging and performance testing for scalable, high-quality code.",
  },
  {
    org: "EI Systems",
    role: "Data Science Intern",
    period: "Dec 2024",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
    summary:
      "8-week internship on Data Science with Python — data cleaning, visualization, EDA and basic machine-learning concepts.",
  },
  {
    org: "AICTE × Microsoft & SAP",
    role: "AI Intern — TechSaksham",
    period: "Aug 2024",
    tech: ["AI", "Mentorship", "Innovation"],
    summary:
      "Hands-on mentorship from Microsoft & SAP professionals with exposure to real-world AI challenges.",
  },
  {
    org: "Cognifyz Technologies",
    role: "Power BI / Data Analytics Intern",
    period: "May 2024",
    tech: ["Power BI", "DAX", "Power Query"],
    summary:
      "Designed interactive dashboards in Power BI. Applied DAX, Power Query and data modeling.",
  },
];

export const projects = [
  {
    id: "image-analysis",
    num: "01",
    title: "AI-Based Image Analysis Tool",
    description:
      "Intelligent vision system for real-time image understanding and facial analytics.",
    features: ["Age Prediction", "Smile Detection", "Emotion Prediction", "AI Image Analysis"],
    tech: ["Python", "AI/ML", "TensorFlow", "Computer Vision"],
    icon: "ScanFace",
    featured: true,
    link: null,
  },
  {
    id: "evoting",
    num: "02",
    title: "Secure E-Voting System",
    description:
      "A secure voting platform combining Aadhaar-based authentication, face recognition and blockchain concepts to improve voter authentication and election security.",
    features: [],
    tech: ["Python", "Face Recognition", "Blockchain", "Authentication"],
    icon: "ShieldCheck",
    badge: "Published Research Work",
    featured: true,
    link: null,
  },
  {
    id: "land-value",
    num: "03",
    title: "Land Value Prediction",
    description:
      "AI-powered land value prediction system designed to analyze geographical and property-related information for land valuation.",
    features: [],
    tech: ["Python", "Machine Learning", "GIS", "Data Science"],
    icon: "MapPin",
    link: "https://github.com/smjaveed786/Land-Value-pred",
  },
  {
    id: "recipe-hub",
    num: "04",
    title: "Recipe Hub",
    description: "Modern recipe discovery and management web application.",
    features: [],
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    icon: "ChefHat",
    link: null,
  },
  {
    id: "stock-prediction",
    num: "05",
    title: "Stock Price Prediction System",
    description:
      "Machine-learning based stock price prediction and analysis application.",
    features: [],
    tech: ["Python", "Machine Learning", "Data Analysis", "PostgreSQL"],
    icon: "TrendingUp",
    link: null,
  },
  {
    id: "liveness",
    num: "06",
    title: "Face Liveness Detection",
    description:
      "A web-based system designed to distinguish live users from spoofing attempts during face authentication.",
    features: [],
    tech: ["Python", "Computer Vision", "AI"],
    icon: "Fingerprint",
    link: null,
  },
];

export const editorTabs = [
  {
    id: "agent-py",
    file: "agent.py",
    lang: "python",
    lines: [
      "from agentic_ai import Agent, tools",
      "",
      "agent = Agent(",
      '    name="Javeed",',
      '    skills=["AI", "Python", "React"],',
      "    reasoning=True,",
      ")",
      "",
      "@agent.task",
      "async def solve(problem):",
      "    plan = await agent.think(problem)",
      "    return await agent.execute(plan)",
    ],
  },
  {
    id: "agent-ts",
    file: "buildAgent.ts",
    lang: "typescript",
    lines: [
      "const buildAgent = async () => {",
      "  const agent = await createAgent({",
      '    model: "intelligent",',
      '    tools: ["search", "reason", "execute"],',
      "  });",
      "",
      "  return agent.run();",
      "};",
    ],
  },
  {
    id: "app-tsx",
    file: "App.tsx",
    lang: "typescript",
    lines: [
      "interface Developer {",
      "  name: string;",
      "  skills: string[];",
      "  passion: string;",
      "}",
      "",
      "const javeed: Developer = {",
      '  name: "Javeed Ahamed",',
      '  skills: ["AI", "React", "TypeScript"],',
      '  passion: "building intelligent products",',
      "};",
    ],
  },
  {
    id: "main-py",
    file: "main.py",
    lang: "python",
    lines: [
      "from fastapi import FastAPI",
      "",
      "app = FastAPI(title=" + '"Intelligence API")',
      "",
      '@app.post("/predict")',
      "async def predict(payload: Input):",
      "    result = model.infer(payload)",
      '    return {"ok": True, "data": result}',
    ],
  },
  {
    id: "server-js",
    file: "server.js",
    lang: "javascript",
    lines: [
      'import express from "express";',
      "",
      "const app = express();",
      "",
      'app.post("/api/agents", async (req, res) => {',
      "  const agent = await spawn(req.body);",
      "  res.json({ id: agent.id, status: " + '"running" });',
      "});",
      "",
      "app.listen(8001, () => boot());",
    ],
  },
];

export const skills = [
  { name: "Python", desc: "Primary language for AI, ML & backend systems", color: "#00F0FF" },
  { name: "React", desc: "Modern, component-driven user interfaces", color: "#61DAFB" },
  { name: "TypeScript", desc: "Type-safe, scalable application code", color: "#3B82F6" },
  { name: "Agentic AI", desc: "Autonomous agents that reason, plan & execute", color: "#A855F7" },
  { name: "AI / ML", desc: "Machine learning models for real problems", color: "#C084FC" },
  { name: "Node.js", desc: "Fast, event-driven backend services", color: "#4ADE80" },
  { name: "FastAPI", desc: "High-performance Python APIs", color: "#2DD4BF" },
  { name: "TensorFlow", desc: "Deep learning & neural networks", color: "#FB923C" },
  { name: "PostgreSQL", desc: "Relational data at scale", color: "#60A5FA" },
  { name: "AWS", desc: "Cloud infrastructure & deployment", color: "#FACC15" },
  { name: "Git", desc: "Version control & collaboration", color: "#F87171" },
  { name: "Power BI", desc: "Data visualization & analytics dashboards", color: "#FDE047" },
];

export const techStack = [
  "Python", "C", "C++", "React.js", "Angular.js", "Node.js", "TypeScript", "Vite",
  "FastAPI", "Flask", "TensorFlow", "ONNX", "PostgreSQL", "MySQL", "Firebase",
  "AWS", "Google Cloud", "Microsoft Azure", "Git", "GitHub", "Power BI", "REST APIs",
];

export const certifications = {
  professional: [
    { name: "Salesforce Certified AI Associate", issuer: "Salesforce" },
    { name: "Agentforce Specialist", issuer: "Salesforce" },
    { name: "Python Certification", issuer: "HackerRank" },
  ],
  training: [
    { name: "Infosys Springboard Certifications", issuer: "Infosys" },
    { name: "Google Cloud AI", issuer: "Google Cloud" },
    { name: "AWS Training", issuer: "AWS" },
    { name: "AI — TechSaksham", issuer: "Microsoft & SAP" },
    { name: "TCS iON", issuer: "TCS" },
    { name: "Gemini Certified Student", issuer: "Google" },
    { name: "AI for Beginners", issuer: "HP Life" },
    { name: "Cybersecurity", issuer: "HP Life" },
    { name: "Store Listing Requirements", issuer: "Google Play" },
  ],
  ambassador: [
    { name: "Campus Ambassador", issuer: "IIM Lucknow" },
    { name: "Campus Ambassador", issuer: "IIT Madras" },
    { name: "E-Cell Campus Ambassador", issuer: "IIT Bombay" },
  ],
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering (Data Science)",
  institute: "NRI Institute Of Technology, Agiripalli",
  graduated: "Graduated — March 2026",
};

export const publication = {
  title: "Aadhaar-Based Authentication Voting System",
  description:
    "Published research work focused on Aadhaar-based authentication for secure voting systems.",
  tag: "Published Research Work",
  note: "Publication link available on request",
};

export const marqueeWords = [
  "AGENTIC AI", "REACT.JS", "PYTHON", "TYPESCRIPT", "MACHINE LEARNING",
  "FULL-STACK", "FASTAPI", "COMPUTER VISION", "NODE.JS", "DATA SCIENCE",
];
