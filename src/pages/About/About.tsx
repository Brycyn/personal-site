import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Headshot from "../../assets/Headshot.jpg";
import Resume from "../../assets/Brycyn Gossett 2025.pdf";
import ContactCTA from "../../components/ContactCTA";
import GradPhoto from "../../assets/GradPhoto.jpg";
import MidnightMadness from "../../assets/MidnightMadness.jpg";
import SBCC from "../../assets/SBCC.jpg";
import Capo from "../../assets/Capo.jpg";
import MediaDay from "../../assets/MediaDay.jpg";
import Catlab from "../../assets/catlab1.png";
import Webconnex from "../../assets/Webconnex.jpg";
import ImageCarousel from "../../components/ImageCarousel";

const About: React.FC = () => {
  // Carousel images - add more photos here
  const carouselImages = [
    {
      src: Headshot,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: GradPhoto,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: MidnightMadness,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: SBCC,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: Capo,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: MediaDay,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: Catlab,
      alt: "Brycyn Gossett - Software Engineer",
    },
    {
      src: Webconnex,
      alt: "Brycyn Gossett - Software Engineer",
    },
    // Add more images here as needed
    // Example:
    // {
    //   src: "/path/to/another/photo.jpg",
    //   alt: "Brycyn Gossett - Another photo"
    // },
  ];

  const skills = [
    {
      category: "Mobile Development",
      items: [
        "React Native",
        "Expo",
        "Expo Router",
        "TypeScript",
        "React Navigation",
        "AsyncStorage",
        "Context API",
        "Agendas & Calendars",
      ],
    },
    {
      category: "Salesforce Development",
      items: [
        "Apex",
        "Lightning Web Components (LWC)",
        "SOQL & SOSL",
        "Custom Metadata",
        "Salesforce Auth (OAuth 2.0)",
        "Salesforce REST API",
        "Experience Cloud",
        "Wrapper Classes",
        "Salesforce Flows",
      ],
    },
    {
      category: "Web Development",
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Next.js",
        "Framer Motion",
        "Responsive Design",
      ],
    },
    {
      category: "Backend & Tools",
      items: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Git & GitHub",
        "Bitbucket",
        "Bitbucket Pipelines",
        "Jest",
        "Maestro",
      ],
    },
    {
      category: "Project Management",
      items: [
        "Agile Development",
        "Sprint Planning",
        "Git Workflow",
        "Code Reviews",
        "Pull Request Management",
        "Branching Strategies",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Cross-functional Communication",
        "Problem Solving",
        "User-Centered Thinking",
        "Mentorship & Collaboration",
        "Time Management",
        "Adaptability",
      ],
    },
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
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 font-poppins">My Journey</h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with over three years of
              experience building modern web and mobile applications and
              distributed systems. I specialize in crafting clean, efficient
              solutions to complex challenges, with a focus on performance,
              scalability, and user experience. When I am not in front of a
              computer, I enjoy playing basketball, being outdoors, and spending
              time with my dog, family, and friends. I truly value community and
              collaboration, and I am always looking for new opportunities to
              make an impact, learn, and grow.
            </p>

            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Where I Come From
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I grew up in Santa Barbara, CA, and spent much of my life as a
              student-athlete. I initially played both football and basketball,
              but in high school, I chose to focus solely on basketball. I spent
              four years in the Dos Pueblos Engineering Academy, where I
              programmed with Arduino, designed in SolidWorks, and worked in the
              machine shop building project components using lathes, mills, and
              CNC machines. After graduating, I continued my academic and
              athletic journey at Santa Barbara City College (SBCC), where I
              studied Business for 2.5 years before receiving an opportunity to
              play at Westmont College. At Westmont, I re-discovered my faith
              and love for building tools to help people. This led me to change
              my major from Business and Economics to Computer Science. Although
              the coursework was rigorous, I found it far more engaging and
              fulfilling. My time at Westmont not only strengthened my faith but
              also allowed me to build meaningful relationships within the
              community—connections that have had a lasting impact on my life.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <ImageCarousel images={carouselImages} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Road to Software Engineering
            </h3>

            <div className="text-gray-700 dark:text-gray-300 space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 font-poppins">
                  The Foundation
                </h4>
                <p>
                  My journey into software development began during my freshman
                  year at the Dos Pueblos Engineering Academy (DPEA). There, I
                  was introduced to Arduino and spent four years programming
                  boards for hands-on projects like light and kinetic
                  sculptures, while also building components in the machine shop
                  for our robotics team.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  The Turning Point
                </h4>
                <p>
                  After taking a break from coding to focus on academics and
                  athletics, I rediscovered programming at Westmont College. It
                  was during a Human-Computer Interaction course with Dr. Daniel
                  Patterson that I realized I wanted to pursue a career in
                  software development—and that I could excel at both
                  programming and athletics.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  First Professional Experience
                </h4>
                <p>
                  I joined Westmont's Center for Applied Technology (CATLab) as
                  a Salesforce Developer, gaining valuable experience in agile
                  development while building projects used by students and
                  staff. Key projects included reviving an outdated mobile app
                  and contributing web components to the college's website.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Expanding My Skills
                </h4>
                <p>
                  At Tondro Consulting, I contributed to data clean-up
                  initiatives and developed custom Lightning Web Components to
                  improve faculty attendance management for higher education
                  institutions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Current Focus
                </h4>
                <p>
                  Currently at Webconnex, I collaborate with a team to enhance
                  the Account Manager UI, migrating from Angular to React while
                  significantly improving mobile responsiveness. I also
                  implement GraphQL solutions for cross-device account
                  management and develop automated tests to ensure secure,
                  reliable functionality.
                </p>
              </div>

              <p>
                I’m passionate about building intuitive, impactful software—and
                I’m continually learning and exploring new technologies to stay
                ahead in this fast-evolving industry.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
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
        </div>
      </section>

      {/* Skills */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Graduated with a Bachelor’s Degree in Computer Science while
            competing as a member of the Men’s Basketball Team. Completed an
            external internship as a Software Developer, focusing on Salesforce
            and mobile application development.
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
            Graduated on the Presidential Honor Roll and an Associates Degree in
            Business and Economics while competing as a member of the Men’s
            Basketball Team. Earned First-Team All-Conference recognition for
            athletic performance.{" "}
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
            Member of the Dos Pueblos Engineering Academy (DPEA) for four years,
            where I programmed with Arduino, designed in SolidWorks, and worked
            in the machine shop building project components using lathes, mills,
            and CNC machines.{" "}
          </p>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

export default About;
