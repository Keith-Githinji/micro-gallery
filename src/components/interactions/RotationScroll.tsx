import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function RotationScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"
      style={{ rotate }}
    />
  );
}