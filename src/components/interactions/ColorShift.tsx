import { motion } from 'motion/react';

export function ColorShift() {
  return (
    <motion.div
      className="w-24 h-16 rounded-lg cursor-pointer"
      style={{
        background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)"
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    />
  );
}