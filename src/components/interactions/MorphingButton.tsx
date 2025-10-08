import { motion } from 'motion/react';
import { useState } from 'react';

export function MorphingButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.button
      className="bg-green-500 text-white px-4 py-2 cursor-pointer flex items-center justify-center"
      animate={{
        borderRadius: isExpanded ? "25px" : "8px",
        width: isExpanded ? "120px" : "80px"
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isExpanded ? "Expanded!" : "Morph"}
    </motion.button>
  );
}