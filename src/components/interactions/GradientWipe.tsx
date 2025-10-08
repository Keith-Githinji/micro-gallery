import { motion } from 'motion/react';

export function GradientWipe() {
  return (
    <motion.button
      className="px-6 py-3 bg-gray-800 text-white rounded-lg relative overflow-hidden"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ x: "-100%" }}
        variants={{
          hover: { x: "100%" }
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <span className="relative z-10">Gradient Wipe</span>
    </motion.button>
  );
}