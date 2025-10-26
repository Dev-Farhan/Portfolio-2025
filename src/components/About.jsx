import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Lightbulb } from "lucide-react";

const AboutIcon = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center justify-center p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-purple-500 transition-all"
  >
    <Icon className="w-8 h-8 text-purple-500 mb-3" />
    <p className="text-sm text-neutral-400 text-center">{text}</p>
  </motion.div>
);

const About = () => {
  const icons = [
    { icon: Code2, text: "Clean & Modern Code" },
    { icon: Globe2, text: "Web Solutions" },
    { icon: Cpu, text: "Technical Skills" },
    { icon: Lightbulb, text: "Creative Approach" },
  ];

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        whileHover={{
          scale: 1.08,
          rotate: 1,
          borderColor: "#a855f7",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="my-20 text-center text-5xl"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-6/12 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-6">
              {icons.map((item, index) => (
                <AboutIcon key={index} {...item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-6/12 flex items-center"
          >
            <p className="text-neutral-300 leading-relaxed text-lg">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
