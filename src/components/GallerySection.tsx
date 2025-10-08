import { useState } from 'react';
import { motion } from 'motion/react';
import { InteractionTile } from './InteractionTile';

// Import all interaction components
import { GlowPulse } from './interactions/GlowPulse';
import { LiftShadow } from './interactions/LiftShadow';
import { GradientWipe } from './interactions/GradientWipe';
import { BlurReveal } from './interactions/BlurReveal';
import { MorphingButton } from './interactions/MorphingButton';
import { RippleEffect } from './interactions/RippleEffect';
import { FlipButton } from './interactions/FlipButton';
import { MagneticHover } from './interactions/MagneticHover';
import { TiltCard } from './interactions/TiltCard';
import { RevealContent } from './interactions/RevealContent';
import { ParallaxDepth } from './interactions/ParallaxDepth';
import { ColorShift } from './interactions/ColorShift';
import { StaggeredEntrance } from './interactions/StaggeredEntrance';
import { RotationScroll } from './interactions/RotationScroll';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hover', 'Buttons', 'Cards', 'Scroll'];

  const interactions = [
    { id: 1, title: "Glow Pulse", category: "Hover", component: <GlowPulse /> },
    { id: 2, title: "Lift + Shadow", category: "Hover", component: <LiftShadow /> },
    { id: 3, title: "Gradient Wipe", category: "Hover", component: <GradientWipe /> },
    { id: 4, title: "Blur Reveal", category: "Hover", component: <BlurReveal /> },
    { id: 5, title: "Morphing Button", category: "Buttons", component: <MorphingButton /> },
    { id: 6, title: "Ripple Click", category: "Buttons", component: <RippleEffect /> },
    { id: 7, title: "Flip Button", category: "Buttons", component: <FlipButton /> },
    { id: 8, title: "Magnetic Hover", category: "Buttons", component: <MagneticHover /> },
    { id: 9, title: "3D Tilt", category: "Cards", component: <TiltCard /> },
    { id: 10, title: "Reveal Content", category: "Cards", component: <RevealContent /> },
    { id: 11, title: "Parallax Depth", category: "Cards", component: <ParallaxDepth /> },
    { id: 12, title: "Color Shift", category: "Cards", component: <ColorShift /> },
    { id: 13, title: "Staggered Entrance", category: "Scroll", component: <StaggeredEntrance /> },
    { id: 14, title: "Rotation on Scroll", category: "Scroll", component: <RotationScroll /> }
  ];

  const filteredInteractions = activeCategory === 'All' 
    ? interactions 
    : interactions.filter(interaction => interaction.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Interactive Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our collection of carefully crafted micro-interactions. 
            Each effect is designed to enhance user experience with smooth, elegant animations.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg'
                  : 'text-slate-600 bg-white hover:bg-slate-50 border border-slate-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
                  layoutId="activeFilter"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredInteractions.map((interaction, index) => (
            <motion.div
              key={`${activeCategory}-${interaction.id}`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              layout
            >
              <InteractionTile
                title={interaction.title}
                category={interaction.category}
                index={index}
              >
                {interaction.component}
              </InteractionTile>
            </motion.div>
          ))}
        </motion.div>

        {filteredInteractions.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-500 text-lg">No interactions found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}