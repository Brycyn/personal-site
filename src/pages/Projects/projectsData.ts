export type ProjectCategory = "web" | "mobile" | "ai";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Westmont App",
    description:
      "The Westmont College mobile app provides students and visitors with quick access to campus maps, events, dining menus, directories, shuttle tracking, and livestreams of chapel and athletic events.It integrates key campus services into one user-friendly platform.",
    image: "../../src/assets/westmont-icon.png",
    category: "mobile",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Saleforce",
      "Fetch/Axios API",
    ],
    githubUrl: "https://github.com",
  },
];
