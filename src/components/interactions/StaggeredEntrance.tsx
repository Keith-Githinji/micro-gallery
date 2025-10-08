import { motion } from 'motion/react';

export function StaggeredEntrance() {
  const items = [1, 2, 3, 4];

  return (
    <div className="flex space-x-2">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="w-4 h-8 bg-gradient-to-t from-purple-500 to-pink-500 rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}