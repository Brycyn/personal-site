import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import Headshot from "../../assets/Headshot.jpg";
import Resume from "../../assets/Brycyn Gossett Resume June 2025.pdf";

const About: React.FC = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "SQL",
        "Apex",
        "HTML ",
        "SOQL",
        "React",
        "CSS",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Lightning Web Component", "React Native", "GraphQL"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Django"],
    },
    // {
    //   category: "DevOps",
    //   items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    // },
  ];

  const experiences = [
    {
      company: "Westmont College",
      role: "Software Engineer",
      period: "2023 - present",
      description:
        " Led a team of student developers at CATLab to enhance Westmont College’s mobile app by applying user-focused design principles. Developed and deployed a cross-platform mobile app for iOS and Android using React Native and Expo, supporting real-time data access for over 2,000 users. Contributed to enterprise-grade feature development and code reviews to ensure best practices and optimal performance. Additionally, created custom Lightning Web Components within an agile environment to support ongoing improvements.",
    },
    {
      company: "WebConnex",
      role: "Engineering Intern",
      period: "2025 - Present",
      description:
        "Redesigned and optimized the Account Manager UI on the Webconnex platform using React, significantly improving mobile responsiveness and usability. Implemented custom GraphQL logic for seamless cross-device account information retrieval and editing, enhancing accessibility and user satisfaction. Developed automated tests with React, Vite, and Apollo Client mocks to validate login functionality, boosting test coverage and ensuring reliable authentication.",
    },
    {
      company: "Tondro Consulting",
      role: "Salesforce Developer Intern",
      period: "2024",
      description: `Developed and deployed custom Lightning Web Components to enhance dynamic data presentation and user interaction. Built scalable backend logic and interactive frontends using Apex and JavaScript, ensuring secure, enterprise-grade solutions. Integrated complex attendance tracking systems for 500+ users with cross-platform Salesforce components, maintaining data accuracy and compliance. Skilled in managing large datasets with a strong focus on data quality.`,
    },
    {
      company: "CATLab",
      role: "Salesforce Developer",
      period: "2023 - 2024",
      description:
        "Collaborated in an agile team to build and deploy web applications in salesforce (LWC), focusing on frontend development and responsive design.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* About Hero */}
      <section className="relative py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with over three years of
              experience building modern web applications and distributed
              systems. I specialize in crafting clean, efficient solutions to
              complex challenges, with a focus on performance, scalability, and
              user experience.
            </p>

            <h3 className="text-2xl font-bold mb-4">Where I Come From</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I grew up in Santa Barbara, CA, and spent much of my life as a
              student-athlete. I initially played both football and basketball,
              but in high school, I chose to focus solely on basketball. After
              graduating, I continued my academic and athletic journey at Santa
              Barbara City College (SBCC), where I studied Business for 2.5
              years before receiving an opportunity to play at Westmont College.
              At Westmont, I discovered my faith and decided to change my major
              to Computer Science. Although the coursework was rigorous, I found
              it far more engaging and fulfilling. My time at Westmont not only
              strengthened my faith but also allowed me to build meaningful
              relationships within the community—connections that have had a
              lasting impact on my life.
            </p>
            <h3 className="text-2xl font-bold mb-4">Road to SWE</h3>

            <div className="text-gray-700 dark:text-gray-300 space-y-8">
              <p>
                My journey into software development began during my freshman
                year of high school when I joined the Dos Pueblos Engineering
                Academy. There, I was introduced to Arduino and spent four years
                programming boards for various hands-on projects. After
                graduating from the academy, I took a break from coding until I
                arrived at Westmont College.
              </p>
              <p>
                It was at Westmont, during a Human-Computer Interaction course
                with Dr. Daniel Patterson, that I realized I wanted to pursue a
                career in software development. That same year, I joined
                Westmont’s Center for Applied Technology (CATLab) as a
                Salesforce Developer. At CATLab, I gained valuable experience
                working in an agile environment, building projects used by
                students and staff—including reviving an outdated mobile app and
                contributing to the college’s website.
              </p>
              <p>
                After a year at CATLab, I interned at Tondro Consulting, where I
                contributed to data clean-up initiatives and developed custom
                Lightning Web Components (LWC) to improve faculty attendance
                management.
              </p>
              <p>
                Currently, I’m working at Webconnex, where I’ve collaborated
                with a team of interns to enhance and optimize the Account
                Manager UI using React and custom Rainbow components. Our work
                significantly improved mobile responsiveness and usability. I
                also implemented custom GraphQL logic for seamless cross-device
                account management and developed automated tests with React/Vite
                and Apollo Client mocks to ensure secure and reliable login
                functionality.
              </p>
              <p>
                I’m passionate about building intuitive, impactful software—and
                I’m continually learning and exploring new technologies to stay
                ahead in this fast-evolving industry.
              </p>
            </div>
            <br />
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Brycyn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brycyn-gossett-241a6126b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="mailto:brycyn8@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 dark:bg-teal-700 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href={Resume}
                target={"_blank"}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={Headshot}
                alt="Brycyn Gossett- Software Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-10">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
                {exp.period}
              </div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <div className="text-gray-700 dark:text-gray-300 mb-2">
                {exp.company}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-10">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
            2022 - 2024
          </div>
          <h3 className="text-xl font-semibold">
            Bachelor Degree in Computer Science
          </h3>
          <div className="text-gray-700 dark:text-gray-300 mb-4">
            Westmont College
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Graduated with honors. Specialized in software engineering and
            distributed systems. Participated in multiple hackathons and coding
            competitions.
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
            2019 - 2022
          </div>
          <h3 className="text-xl font-semibold">
            Assosiates Degree in Business & Economics
          </h3>
          <div className="text-gray-700 dark:text-gray-300 mb-4">
            Santa Barbara City College{" "}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Graduated with honors. Specialized in software engineering and
            distributed systems. Participated in multiple hackathons and coding
            competitions.
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
            2014 - 2018
          </div>
          <h3 className="text-xl font-semibold">
            Dos Pueblos Engineering Academy{" "}
          </h3>
          <div className="text-gray-700 dark:text-gray-300 mb-4">
            Dos Pueblos Senior High School{" "}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Graduated with honors. Specialized in software engineering and
            distributed systems. Participated in multiple hackathons and coding
            competitions.
          </p>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <motion.a
          href="mailto:brycyn8@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch <ArrowRight size={18} />
        </motion.a>
      </section>
    </motion.div>
  );
};

export default About;
