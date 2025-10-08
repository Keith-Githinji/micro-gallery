import { motion } from 'motion/react';

export function GlowPulse() {
  return (
    <motion.button
      className="px-6 py-3 bg-purple-600 text-white rounded-lg relative overflow-hidden"
      whileHover={{
        boxShadow: [
          "0 0 0 0 rgba(147, 51, 234, 0)",
          "0 0 0 10px rgba(147, 51, 234, 0.1)",
          "0 0 0 20px rgba(147, 51, 234, 0.05)",
          "0 0 0 10px rgba(147, 51, 234, 0.1)",
          "0 0 0 0 rgba(147, 51, 234, 0)"
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      Glow Pulse
    </motion.button>
  );
}