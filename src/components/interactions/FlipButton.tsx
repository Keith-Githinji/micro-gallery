import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, ThumbsUp } from 'lucide-react';

export function FlipButton() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.button
      className="relative w-24 h-12 bg-red-500 text-white rounded-lg cursor-pointer preserve-3d"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      onClick={() => setIsFlipped(!isFlipped)}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-lg bg-red-500 backface-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Heart size={20} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-lg bg-green-500 backface-hidden"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <ThumbsUp size={20} />
      </motion.div>
    </motion.button>
  );
}