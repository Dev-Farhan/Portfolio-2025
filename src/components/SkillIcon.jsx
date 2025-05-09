import { motion } from "framer-motion";

const SkillIcon = ({ icon: Icon, label, colorClass, duration }) => {
  const iconVariants = (duration) => ({
    initial: { y: 10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity, // Corrected this line
        repeatType: "reverse",
      },
    },
  });
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 1,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        borderColor: "#a855f7", // Tailwind's purple-500
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-28 h-28 md:w-52 md:h-52 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-400"
    >
      <Icon className={`text-5xl md:text-9xl ${colorClass}`} />
      <span className="mt-2 text-xs md:text-sm font-medium">{label}</span>
    </motion.div>
  );
};

export default SkillIcon;
