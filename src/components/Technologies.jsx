import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaNodeJs, FaGithub, FaSquareJs, FaFigma } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileHover={{
          scale: 1.08,
          rotate: 1,
          borderColor: "#a855f7",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="my-20 pl-20 text-start text-4xl"
      >
        Skills & <span className="text-purple-500">Tools</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          <SkillIcon
            icon={DiHtml5}
            label="HTML"
            colorClass="text-orange-500"
            duration={3}
          />
          <SkillIcon
            icon={DiCss3}
            label="CSS"
            colorClass="text-blue-600"
            duration={5}
          />
          <SkillIcon
            icon={RiTailwindCssFill}
            label="Tailwind CSS"
            colorClass="text-blue-500"
            duration={4}
          />
          <SkillIcon
            icon={FaSquareJs}
            label="JavaScript"
            colorClass="text-yellow-500"
            duration={5}
          />
          <SkillIcon
            icon={TbBrandReactNative}
            label="React"
            colorClass="text-blue-500"
            duration={3}
          />
          <SkillIcon
            icon={TbBrandNextjs}
            label="Next.js"
            colorClass="text-gray-200"
            duration={4}
          />
          <SkillIcon
            icon={SiMongodb}
            label="MongoDB"
            colorClass="text-green-600"
            duration={5}
          />
          <SkillIcon
            icon={FaNodeJs}
            label="Node.js"
            colorClass="text-green-500"
            duration={3}
          />
          <SkillIcon
            icon={FaGithub}
            label="Git & GitHub"
            colorClass="text-gray-300"
            duration={4}
          />
          <SkillIcon
            icon={VscVscode}
            label="VS Code"
            colorClass="text-blue-500"
            duration={3}
          />
          <SkillIcon
            icon={SiPostman}
            label="Postman"
            colorClass="text-orange-500"
            duration={5}
          />
          <SkillIcon
            icon={FaFigma}
            label="Figma"
            colorClass="text-gray-300"
            duration={4}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
