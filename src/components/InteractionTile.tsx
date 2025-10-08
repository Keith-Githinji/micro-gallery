import React from 'react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { CodeReveal } from './CodeReveal';

interface InteractionTileProps {
  title: string;
  category: string;
  children: ReactNode;
  index: number;
  code?: string;
}

export function InteractionTile({ title, category, children, index, code }: InteractionTileProps) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" 
      }}
    >
      {code && (
        <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <CodeReveal title={title} code={code} />
        </div>
      )}
      {/* Category Badge */}
      <motion.div
        className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full mb-3"
        whileHover={{ scale: 1.05 }}
      >
        {category}
      </motion.div>

      {/* Title */}
      <h3 className="text-slate-800 font-semibold mb-4 group-hover:text-indigo-700 transition-colors duration-300">
        {title}
      </h3>

      {/* Interaction Preview */}
      <div className="relative flex items-center justify-center h-36 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
        {children}
        
        {/* Subtle Border Glow on Hover */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hover Indicator */}
      <motion.div
        className="mt-3 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        Hover or click to interact
      </motion.div>
    </motion.div>
  );
}