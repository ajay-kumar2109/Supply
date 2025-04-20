import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactLinks = [
    {
      name: "Email",
      value: "ajaysurada21@gmail.com",
      href: "mailto:ajaysurada21@gmail.com",
      icon: <FaEnvelope className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ajaykumarsurada",
      href: "https://linkedin.com/in/ajaykumarsurada",
      icon: <FaLinkedin className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      value: "github.com/ajay-kumar2109",
      href: "https://github.com/ajay-kumar2109",
      icon: <FaGithub className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800"
    }
  ];

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="max-w-[980px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              Let's Connect
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Get in touch for opportunities or just to say hello! 👋
          </motion.p>
        </motion.div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex items-center gap-6 p-6 bg-white rounded-2xl
                         shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 
                           group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              {/* Icon with animation */}
              <motion.div
                className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                animate={hoveredIndex === index ? {
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1.1, 1],
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {link.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {link.name}
                </h3>
                <p className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {link.value}
                </p>
              </div>

              {/* Arrow indicator */}
              <motion.div
                className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;