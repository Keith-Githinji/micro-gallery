import { motion } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navigation({ activeCategory, onCategoryChange }: NavigationProps) {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hover', label: 'Hover Effects' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'scroll', label: 'Scroll Effects' }
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center py-4">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`relative px-4 py-2 transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'text-purple-600' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}