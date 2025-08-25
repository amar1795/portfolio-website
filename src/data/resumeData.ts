export interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  details?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  duration: string;
  sourceCode: string;
  description: string;
  videoSrc?: string;
  detailedDescription: string[];
  technologies?: string[];
  link?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills?: {
    category: string;
    items: string[];
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Amarjeet Singh",
    phone: "7032485971",
    email: "jeetamar003@gmail.com",
    linkedin: "linkedin.com/in/amarjeet",
    github: "github.com/amarjeet",
    portfolio: "x.com/amarjeet"
  },
  education: [
    {
      institution: "Woolf University",
      degree: "MS in Computer Science",
      location: "Online",
      duration: "Jan 2025 - May 2025"
    },
    {
      institution: "Gandhi Institute of Technology and Management",
      degree: "Bachelors of computer application",
      location: "Vishakhapatnam, Andhra Pradesh",
      duration: "Aug. 2014 - May 2017"
    }
  ],
  experience: [
    {
      title: "Travel Consultant",
      company: "British Airways",
      location: "Gurgaon, Haryana",
      duration: "April 2022 - Jan 2023",
      responsibilities: [
        "Delivered premium support to high-value clients, managing complex travel requests with precision and professionalism. Trained and mentored junior consultants on effective communication and process handling, ensuring consistent service quality across the team.",
        "Recognized as a top performer for consistently exceeding customer satisfaction and performance targets."
      ]
    },
    {
      title: "Resolution Specialist",
      company: "Amazon",
      location: "Noida, UP",
      duration: "Aug. 2018 - Jan 2021",
      responsibilities: [
        "Served as Subject Matter Expert (SME) across multiple Amazon domains (Prime, Fresh, Pantry, Echo, Fire TV, and international markets). Trained and guided new team members, improving onboarding efficiency and service delivery standards.",
        "Developed strong analytical and problem-solving skills by handling escalations and resolving complex customer and operational issues."
      ]
    }
  ],
  projects: [
  {
    name: "PurchasesPal",
    duration: "May 2024 - July 2024",
    sourceCode: "https://github.com/amar1795/PROJECTS",
    videoSrc: "https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4",
    description: "Developed a comprehensive e-commerce application using Next.js, leveraging its server-side actions for seamless and efficient data fetching. Implemented advanced features including password reset, email notifications via Mailgun, and deep nested product categories to enhance application performance and organization. Optimized SEO performance for both web and mobile platforms by utilizing Next.js server-side logic. Integrated Stripe payment gateway and a built-in wallet feature to streamline and enhance the payment process.",
    detailedDescription: [
      "Developed a scalable and feature-rich e-commerce application leveraging **Next.js App Router** and server actions for efficient server-side rendering (SSR) and data fetching.",
      "Designed and implemented **deeply nested product categories** to ensure robust organization and better filtering/search experiences for users.",
      "Built a **secure authentication and authorization system** using NextAuth, including login, signup, session handling, and role-based access control.",
      "Integrated **password reset functionality** with secure token handling and email notifications using Mailgun.",
      "Implemented **email notifications and transactional emails** (order confirmation, password recovery, etc.) with Mailgun for enhanced customer experience.",
      "Optimized **SEO and performance** for both desktop and mobile platforms using Next.js server-side logic and metadata APIs.",
      "Implemented a **Stripe payment gateway** with multi-step checkout and a built-in **wallet system** for storing user credits and providing flexible payments.",
      "Applied **MongoDB with Prisma ORM** for structured, type-safe data management and smooth queries.",
      "Ensured **responsive UI/UX** across devices using Tailwind CSS and React components.",
      "Deployed the application on **Vercel**, leveraging automatic builds, caching, and Next.js optimization features for fast load times."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "MongoDB", "NextAuth", "Stripe", "Mailgun"],
    link: "https://optimzed-e-commerce-git-main-amar1795s-projects.vercel.app/"
  },
  {
    name: "Portfolio Website",
    duration: "July 2024 - July 2024",
    sourceCode: "https://github.com/amar1795/portfolio-website",
    videoSrc: "https://res.cloudinary.com/dfveswqdm/video/upload/v1722516807/Untitled_video_-_Made_with_Clipchamp_4_dwovn2.mp4",
    description: "Developed a fully functional application in a few hours using Next.js, TypeScript, and Tailwind CSS. Utilized the Next.js App-based router for efficient routing within the application. Created a mobile-responsive website to ensure optimal user experience across various devices.",
    detailedDescription: [
      "Developed a **personal portfolio website** using Next.js, TypeScript, and Tailwind CSS to showcase projects, skills, and work experience.",
      "Utilized the **Next.js App Router** for clean and optimized routing between pages and sections.",
      "Built a **dynamic projects section** where project details and links are rendered from structured data arrays.",
      "Implemented **SEO-friendly metadata** with Next.js Head/Metadata APIs for better discoverability.",
      "Created a **responsive design** ensuring seamless experience across desktop, tablet, and mobile devices.",
      "Optimized **component reusability** by building modular React components for cards, navigation, and sections.",
      "Deployed the application on **Vercel** with custom domain setup for fast, global distribution.",
      "Used **Tailwind CSS utility-first styling** for rapid UI development with consistent design patterns.",
      "Added subtle animations and transitions for an engaging user experience."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://www.amarjeetsingh.xyz/"
  },
  {
    name: "PDF-to-Excel-converter",
    duration: "May 2025 - May 2025",
    sourceCode: "https://github.com/amar1795/PDF-to-Excel-ai-converter",
    videoSrc: "https://res.cloudinary.com/dfveswqdm/video/upload/v1756104190/PDFtoExcel_dcdflq.mp4",
    description: "Developed a cross-platform desktop application for automated PDF-to-Excel conversion using Electron (JavaScript) and Python. Integrated Google Gemini AI for intelligent document parsing and data extraction. Utilized libraries such as pandas, pdf2image, and xlsx writer for efficient data processing and spreadsheet generation. Packaged and deployed the application as a standalone Windows executable for easy distribution. Implemented secure API key management and optimized the workflow for fast, accurate conversions.",
    detailedDescription: [
      "Developed a **cross-platform desktop application** using Electron (JavaScript) and Python for automated PDF-to-Excel conversion.",
      "Integrated **Google Gemini AI** for intelligent document parsing, table recognition, and accurate data extraction.",
      "Leveraged Python libraries like **pandas**, **pdfplumber**, and **xlsxwriter** for efficient data processing and Excel generation.",
      "Implemented **pdf2image** for preprocessing scanned PDFs and improving AI extraction accuracy.",
      "Designed a clean, intuitive **Electron-based UI** to upload PDFs, track conversion progress, and download outputs.",
      "Packaged and deployed the application as a **standalone Windows executable** for easy distribution without requiring Python installation.",
      "Implemented **secure API key management** to protect Gemini API credentials and prevent misuse.",
      "Optimized the workflow with **asynchronous processing**, reducing conversion time and improving responsiveness.",
      "Ensured **cross-platform compatibility** (Windows, Linux, macOS) through Electron build configuration.",
      "Documented usage, setup, and deployment process for smooth onboarding of end-users."
    ],
    technologies: ["Electron", "Python", "Gemini AI", "pandas", "pdfplumber", "pdf2image", "xlsxwriter"],
  }
]
,
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "Python", "HTML", "CSS"]
    },
    {
      category: "Frameworks",
      items: ["React", "React Native", "Next.js", "WordPress", "Material-UI", "Daisy UI", "Node.js"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Google Cloud Platform", "Visual Studio", "Cloudinary", "Mailgun", "Stripe", "Vercel", "Hostinger", "Gemini Studio"]
    },
    {
      category: "Libraries",
      items: ["Express.js", "clerk", "redux", "react-router"]
    }
  ]
};
