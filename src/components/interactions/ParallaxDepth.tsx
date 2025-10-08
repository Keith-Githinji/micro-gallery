import { motion, useMotionValue, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ParallaxDepth() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const xTransform1 = useTransform(x, [-100, 100], [-5, 5]);
  const yTransform1 = useTransform(y, [-100, 100], [-5, 5]);
  const xTransform2 = useTransform(x, [-100, 100], [-10, 10]);
  const yTransform2 = useTransform(y, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="w-24 h-16 bg-gray-200 rounded-lg cursor-pointer relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-2 bg-blue-400 rounded"
        style={{ x: xTransform1, y: yTransform1 }}
      />
      <motion.div
        className="absolute inset-4 bg-purple-500 rounded"
        style={{ x: xTransform2, y: yTransform2 }}
      />
    </motion.div>
  );
}