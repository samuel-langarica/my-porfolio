export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Interest {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Samuel Langarica",
  title: "Software Developer",
  email: "samuel.langarica.m@gmail.com",
  phone: "+52 33 1487 3611",
  location: "Guadalajara, México",
  bio: "I am a passionate software developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
  imageUrl: "/images/profile.jpeg",
};

export const interests: Interest[] = [
  {
    category: "Technology",
    items: [
      "Artificial Intelligence",
      "Web Development",
      "Mobile Apps",
      "Game Development",
    ]
  },
  {
    category: "Personal",
    items: [
      "Chess",
      "Sim Racing",
      "Outdoor Running",
      "Science Fiction Novels",
    ]
  },
  {
    category: "Professional",
    items: [
      "Business Solutions",
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Roii Tech",
    position: "Full Stack Developer",
    period: "Jan 2024 - Feb 2025",
    description: [
      "Led the development of two web applications optimizing business administration and operations",
      "Developed reusable components and systems for future projects",
      "Led the frontend development team"
    ],
    technologies: ["PostgreSQL", "Flutter", "Drizzle ORM"
    ]
  },
];

export const projects: Project[] = [
  {
    title: "Internal Business Tool",
    description: "Development and maintenance of web applications for internal business operations and management.",
    technologies: ["Flutter", "PostgreSQL", "Drizzle ORM"],
    // githubUrl: "https://github.com/yourusername/project",
    // liveUrl: "https://project-demo.com",
    // imageUrl: "/images/project1.jpg" 
  },
  {
    title: "Java Raytracer",
    description: "Built from scratch achieving realistic rendering of 3D scenes",
    technologies: ["Java"],
    // githubUrl: "https://github.com/yourusername/project",
    // liveUrl: "https://project-demo.com",
    // imageUrl: "/images/project1.jpg" 
  },
  {
    title: "VR Tire Change Simulator",
    description: "Interactive simulator to guide users through the step-by-step process of changing a flat tire. Developed with Unity.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Weather Chatbot Pydantic AI",
    description: "Developed a chatbot using Pydantic AI to provide weather information and forecasts using an open weather API.",
    technologies: ["Python", "Pydantic AI"],
  },
  {
    title: "Research Notifier Agent",
    description: "Web application to schedule web scraping reports over certain topic or websites",
    technologies: ["Python", "Pydantic AI"],
  },
];

export const education: Education[] = [
  {
    institution: "Universidad Panamericana",
    degree: "Systems Engineering and Computer Graphics",
    period: "2021 - 2025",
  },
  {
    institution: "Instituto Tecnológico de Monterrey",
    degree: "High School",
    period: "2016 - 2019",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD"]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/samuel-langarica",
    icon: "FaGithub"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/samuel-langarica",
    icon: "FaLinkedin"
  }
]; 