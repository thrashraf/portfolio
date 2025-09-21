export interface Props {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string | null;
  image?: string;
  featured?: boolean;
}