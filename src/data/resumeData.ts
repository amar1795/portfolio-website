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
      institution: "Scaler Academy",
      degree: "Software Engineering",
      location: "Online",
      duration: "Oct. 2022 - April 2024"
    },
    {
      institution: "Gandhi Institute of Technology and Management",
      degree: "Bachelors of computer application",
      location: "Vishakhapatnam, Andhra Pradesh",
      duration: "Aug. 2014 - May 2017"
    },
    {
      institution: "Narayan Junior College",
      degree: "HSC/Intermediate",
      location: "Vishakhapatnam, Andhra Pradesh",
      duration: "Aug. 2012 - May 2014"
    }
  ],
  experience: [
    {
      title: "Travel Consultant",
      company: "British Airways",
      location: "Gurgaon, Haryana",
      duration: "April 2022 - Jan 2023",
      responsibilities: [
        "Specialized in curating and managing bespoke holiday packages for high-value clients, including Gold Guest List Members, to enhance their travel experiences and drive revenue growth.",
        "Delivered comprehensive training to junior consultants on advanced call handling and customer service techniques for both premium and standard clients, ensuring consistent service excellence.",
        "Recognized as a top performer on a monthly and quarterly basis for exceptional quality and sales achievements through online bookings."
      ]
    },
    {
      title: "Resolution Specialist",
      company: "Amazon",
      location: "Noida, UP",
      duration: "Aug. 2018 - Jan 2021",
      responsibilities: [
        "Worked as a Subject Matter Expert (SME) to provide advanced support and training to newly joined agents, enhancing their proficiency in handling customer inquiries efficiently.",
        "Developed expertise across various Amazon customer service departments, including Amazon Prime, Fresh, Pantry, and international markets such as Amazon India, UK, US, and Japan, as well as products like Echo and Fire TV.",
        "Conducted comprehensive training for new teams on Amazon's domestic and international phone, chat, and email support, ensuring high standards of customer service delivery."
      ]
    }
  ],
  projects: [
    {
      name: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS featuring a matrix-style green theme",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
    },
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"]
    },
    {
      category: "Frontend Technologies",
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Material-UI"]
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
    }
  ]
};
