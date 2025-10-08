import { motion } from 'motion/react';
import { Mail, Github, ExternalLink, Heart } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "keithgithinji@gmail.com",
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-600 hover:to-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Keith-Githinji",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://keith-portfolio-v2.vercel.app",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "hover:from-indigo-600 hover:to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-8"
            whileInView={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Connect
          </h2>

          <motion.p
            className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interested in collaborating or have questions about these interactions? 
            I'd love to hear from you and discuss how micro-interactions can enhance your next project.
          </motion.p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${link.color} text-white rounded-full shadow-lg ${link.hoverColor} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">{link.label}</span>
                
                {/* Hover Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Ready to add some magic to your project?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss how thoughtful micro-interactions can elevate your user experience 
              and create memorable digital products.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:hello@microgallery.com', '_blank')}
            >
              Start a Conversation
            </motion.button>
          </motion.div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-indigo-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
                } opacity-40`}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}