import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      <div className="relative min-h-48 h-auto overflow-hidden">
        <div className="group relative overflow-hidden">
          <img
            src={project.hoverImage || project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-white"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white bg-opacity-20 text-white rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between pt-2 border-t border-white border-opacity-20">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-300 hover:text-blue-200 font-medium transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-gray-200 font-medium transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 m-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.category === "web"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                : project.category === "mobile"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
            }`}
          >
            {project.category === "web"
              ? "Web"
              : project.category === "mobile"
              ? "Mobile"
              : "AI/ML"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
