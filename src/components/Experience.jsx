// import { EXPERIENCES } from "../constants";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-4">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Experience
//       </motion.h1>
//       <div className="">
//         {EXPERIENCES.map((experience, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <p className="mb-2 text-ssm  text-neutral-400">
//                 {experience.year}
//               </p>
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold">
//                 {experience.role} -{" "}
//                 <span className="text-sm text-purple-10">
//                   {experience.company}
//                 </span>
//               </h6>
//               <p className="mb-4 text-neutral-400">{experience.description}</p>
//               {experience.technologies.map((tect, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-sm text-purple-800"
//                 >
//                   {tect}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer (MERN)",
    company: "Aliema Infotech",
    duration: "2025 - Present",
    description:
      "Building dynamic, responsive, and scalable web applications using the MERN stack. Collaborating with cross-functional teams to deliver user-centric solutions and optimize performance across frontend and backend.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "Vercel"],
  },
  {
    role: "Frontend Developer",
    company: "BookMyAI",
    duration: "2024 - 2025",
    description:
      "Worked on developing and maintaining the admin panel and website. Focused on creating clean, reusable UI components and improving UX using modern frontend tools.",
    tech: ["React", "JavaScript", "CSS3", "REST API"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 relative">
      {/* Section Title */}
      <motion.h1
        whileHover={{ scale: 1.08, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="my-20 text-center text-5xl"
      >
        Work <span className="text-purple-500">Experience</span>
      </motion.h1>

      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-purple-700 -translate-x-1/2 z-0" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className={`relative mb-20 flex flex-col ${
              index % 2 === 0
                ? "lg:flex-row lg:pr-[50%] lg:mr-10"
                : "lg:flex-row-reverse lg:pl-[50%] lg:ml-10"
            } items-center gap-10`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              />
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative z-20 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-6 w-full max-w-lg hover:border-purple-500 transition-all duration-300 mt-8 sm:mt-0"
            >
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-lg text-purple-400 font-medium mt-1">
                {exp.company}
              </p>

              <div className="flex items-center gap-2 mt-2 text-sm text-neutral-400">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>

              <p className="mt-4 text-neutral-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
