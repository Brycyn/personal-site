import WestmontIcon from "../../assets/westmont-icon.png";
import WESTStockPhoto from "../../assets/WESTStockPhoto.png";
import SBCFoodBank from "../../assets/SBCFoodBank.png";
import FoodFinderPhoto from "../../assets/FoodFinder-photo.png";
import CSProduct from "../../assets/CSProduct.png";

export type ProjectCategory = "web" | "mobile";
export type ProjectStatus = "production" | "completed" | "development";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage?: string; // Optional hover image
  category: ProjectCategory;
  status: ProjectStatus;
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
    image: WestmontIcon,
    hoverImage: WESTStockPhoto, // Example hover image
    category: "mobile",
    status: "production",
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
    image: SBCFoodBank,
    hoverImage: FoodFinderPhoto, // Example hover image
    category: "mobile",
    status: "development",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "iOS",
      "Android",
      "Web",
      "Supabase",
    ],
    // githubUrl: "https://github.com/Brycyn/FoodFinder",
  },
  {
    id: 3,
    title: "Westmont Course Syllabi Search",
    hoverImage: CSProduct, // Example hover image
    description:
      "A Lightning Web Component that allows users to search for course syllabi for Westmont College courses",
    image: WestmontIcon,
    status: "production",
    category: "web",
    technologies: ["Salesforce", "Apex", "Lightning Web Components", "API"],
  },
];
