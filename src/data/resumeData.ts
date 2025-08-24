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
  description: string;
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
      description: "Developed a comprehensive e-commerce application using Next.js, leveraging its server-side actions for seamless and efficient data fetching. Implemented advanced features including password reset, email notifications via Mailgun, and deep nested product categories to enhance application performance and organization. Optimized SEO performance for both web and mobile platforms by utilizing Next.js server-side logic. Integrated Stripe payment gateway and a built-in wallet feature to streamline and enhance the payment process.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "MongoDB", "NextAuth", "Stripe", "Mailgun"],
      link: "https://github.com/amar1795/PROJECTS- | https://optimzed-e-commerce-git-main-amar1795s-projects.vercel.app/"
    },
    {
      name: "Portfolio Website",
      description: "Developed a fully functional application in a few hours using Next.js, TypeScript, and Tailwind CSS. Utilized the Next.js App-based router for efficient routing within the application. Created a mobile-responsive website to ensure optimal user experience across various devices.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://github.com/amar1795/portfolio-website | https://www.amarjeetsingh.xyz/"
    },
    {
      name: "PDF-to-Excel-converter",
      description: "Developed a cross-platform desktop application for automated PDF-to-Excel conversion using Electron (JavaScript) and Python. Integrated Google Gemini AI for intelligent document parsing and data extraction. Utilized libraries such as pandas, pdf2image, and xlsx writer for efficient data processing and spreadsheet generation. Packaged and deployed the application as a standalone Windows executable for easy distribution. Implemented secure API key management and optimized the workflow for fast, accurate conversions.",
      technologies: ["Electron", "Python", "Gemini AI", "pandas", "pdfplumber"],
      link: "https://github.com/amar1795/PDF-to-Excel-ai-converter"
    }
  ],
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
