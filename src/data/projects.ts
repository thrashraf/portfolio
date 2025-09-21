import type { Props as ProjectProp } from "../components/project/props";

export const PROJECTS: ProjectProp[] = [
  {
    title: "Razz Dental Clinic Website",
    description: "Developed a modern, responsive website for Razz Dental Clinic featuring appointment booking system, service showcase, and patient information portal. Built with focus on user experience and mobile optimization for healthcare accessibility.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://razzdental.com.my/",
    image: "/projects/rezzdental.webp",
    featured: true,
  },
  {
    title: "Nak Viral - Social Media Platform",
    description: "Built a modern social media platform focused on viral content sharing and community engagement. Features include real-time posting, content discovery algorithms, user interactions, and responsive design for optimal mobile experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Firebase"],
    liveUrl: "https://www.nakviral.com/",
    image: "/projects/nak-viral.webp",
    featured: true,
  },
];
