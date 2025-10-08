import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Star } from 'lucide-react';

export function RevealContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-24 h-16 bg-gray-100 border-2 border-gray-200 rounded-lg cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Star size={20} />
          </motion.div>
        )}
      </AnimatePresence>
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span className="text-xs">Hover</span>
        </div>
      )}
    </motion.div>
  );
}