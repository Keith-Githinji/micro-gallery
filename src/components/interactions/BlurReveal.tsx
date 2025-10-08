import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function BlurReveal() {
  return (
    <motion.div
      className="flex items-center space-x-2 cursor-pointer"
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: { filter: "blur(0px)", scale: 1.1 }
        }}
        initial={{ filter: "blur(4px)" }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles className="w-6 h-6 text-yellow-500" />
      </motion.div>
      <motion.span
        className="text-gray-600"
        variants={{
          hover: { filter: "blur(0px)", color: "#000" }
        }}
        initial={{ filter: "blur(2px)" }}
        transition={{ duration: 0.3 }}
      >
        Reveal Me
      </motion.span>
    </motion.div>
  );
}