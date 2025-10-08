import { motion } from 'motion/react';

export function LiftShadow() {
  return (
    <motion.div
      className="w-24 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg cursor-pointer"
      whileHover={{
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    />
  );
}