import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, ProjectCategory, ProjectStatus } from "./projectsData";
import { Filter } from "lucide-react";
import ContactCTA from "../../components/ContactCTA";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    ProjectCategory | "all" | ProjectStatus
  >("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter || project.status === activeFilter
        );

  const filterCategories: {
    value: ProjectCategory | "all" | ProjectStatus;
    label: string;
  }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "production", label: "In Production" },
    { value: "completed", label: "Development Complete" },
    { value: "development", label: "In Development" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Projects Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of apps and tools I’ve built—highlighting my work in mobile
          development, Salesforce, and full-stack projects.
        </p>
      </section>

      {/* Filter Controls */}
      <section className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Filter size={20} className="text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">Filter:</span>
        </div>
        {filterCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveFilter(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category.value
                ? "bg-blue-600 dark:bg-blue-700 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.section>

      {/* Contact CTA */}
      <ContactCTA description="Let's collaborate on your next project and bring your ideas to life." />
    </motion.div>
  );
};

export default Projects;
