import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactCTA from "../../components/ContactCTA";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y"
    >
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-3xl -z-10"></div>
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Software Engineer & Developer
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Building elegant solutions to complex problems with clean code and a
            focus on user experience.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
        <div className="flex justify-center gap-8">
          {[
            {
              icon: <Code className="w-12 h-12 text-blue-500" />,
              title: "Frontend Development",
              description:
                "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS frameworks.",
            },
            {
              icon: <Smartphone className="w-12 h-12 text-teal-500" />,
              title: "Mobile Development",
              description:
                "Building robust mobile apps using React Native, Expo, and Node.js with a focus on scalability and user experience while emphasizing access for both iOS and Android.",
            },
            {
              icon: <Cloud className="w-12 h-12 text-white-500" />,
              title: "Salesforce",
              description:
                "Customizing Salesforce with Apex, Lightning Web Components, and declarative tools to build scalable data-driven applications. Experience includes mobile integration, advanced data modeling, and process automation tailored to organizational needs.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 w-80"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA
        description="I'm always looking for new challenges and opportunities to collaborate on innovative projects.

"
      />
    </motion.div>
  );
};

export default Home;
