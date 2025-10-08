import { motion } from 'framer-motion';
import { Sparkles, Heart, Code } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8"
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            About This Gallery
          </h2>

          <motion.div
            className="prose prose-lg max-w-none text-slate-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed mb-6">
              This gallery was built to celebrate the little details that elevate digital experiences. 
              Every hover, click, and scroll effect is carefully crafted to feel smooth, elegant, and intentional.
            </p>
            <p className="text-lg leading-relaxed">
              Micro interactions may be small — but they make interfaces unforgettable. 
              They guide users, provide feedback, and add personality to digital products. 
              When done right, they create moments of delight that transform functional interfaces into memorable experiences.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Heart,
                title: "Crafted with Care",
                description: "Each interaction is thoughtfully designed with attention to timing, easing, and visual polish."
              },
              {
                icon: Code,
                title: "Modern Technology",
                description: "Built with React, Motion, and Tailwind CSS for smooth, performant animations."
              },
              {
                icon: Sparkles,
                title: "Delightful Details",
                description: "Small touches that make big differences in user experience and interface personality."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-400 rounded-full opacity-60"
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-40"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}