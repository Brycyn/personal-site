import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  email?: string;
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's Connect",
  description = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  buttonText = "Get In Touch",
  email = "brycyn8@gmail.com",
  className = "",
}) => {
  return (
    <section
      className={`py-12 px-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center ${className}`}
    >
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <motion.a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText} <ArrowRight size={18} />
      </motion.a>
    </section>
  );
};

export default ContactCTA;
