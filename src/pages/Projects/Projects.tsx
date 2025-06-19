import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, ProjectCategory } from './projectsData';
import { Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterCategories: { value: ProjectCategory | 'all', label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
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
          A collection of my recent work across various technologies and domains.
          Each project represents a unique challenge and solution.
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
                ? 'bg-blue-600 dark:bg-blue-700 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-700 dark:to-teal-600 rounded-2xl text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I'm always looking for new challenges and opportunities to collaborate on innovative projects.
        </p>
        <motion.a
          href="mailto:brycyn8@gmail.com"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Conversation
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Projects;