export type ProjectCategory = "web" | "mobile";

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
      "Fetch",
      "iOS",
      "Android",
      "Web",
    ],
  },
  {
    id: 2,
    title: "Santa Barbara Food Finder",
    description:
      "An easy way to find local Food Banks and Bus Routes to them in the 805",
    image: "../../src/assets/SBCFoodBank.png",
    category: "mobile",
    technologies: ["React Native", "Expo", "Node.js", "iOS", "Android", "Web"],
    githubUrl: "https://github.com/Brycyn/FoodFinder",
  },
  {
    id: 3,
    title: "Westmont Course Syllabi Search",
    description:
      "A Lightning Web Component that allows users to search for course syllabi for Westmont College courses",
    image: "../../src/assets/westmont-icon.png",
    category: "web",
    technologies: ["Salesforce", "Apex", "Lightning Web Components", "API"],
  },
];
