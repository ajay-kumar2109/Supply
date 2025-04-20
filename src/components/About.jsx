import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaUser, FaLightbulb, FaCogs, FaRocket, FaBrain } from 'react-icons/fa';

const About = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: <FaUser className="text-2xl" />,
      content: "Hi! I'm Ajay Kumar, a data engineer and full-stack developer who loves turning data into insights and building solutions that make a difference. I have a background in designing data systems, developing machine learning models, and creating user-friendly applications."
    },
    {
      id: 'expertise',
      title: 'What I Do Best',
      icon: <FaLightbulb className="text-2xl" />,
      content: "I specialize in building efficient data pipelines, deploying machine learning models, and developing full-stack applications with tools like Python, Django, React, and cloud platforms like AWS and GCP. My goal is to solve complex challenges with straightforward, effective solutions."
    },
    {
      id: 'approach',
      title: 'How I Work',
      icon: <FaCogs className="text-2xl" />,
      content: "I approach each project with a mix of precision and creativity. I'm always thinking about how to make systems faster, more reliable, and cost-effective. For me, it's not just about the code but about creating solutions that align with the big picture and deliver real value."
    },
    {
      id: 'growth',
      title: 'Learning and Growth',
      icon: <FaRocket className="text-2xl" />,
      content: "I believe in continuous learning to stay on top of new tech and methods. Whether it's earning certifications or exploring new tools, I'm committed to growing and adapting as technology evolves."
    }
  ];

  // Background Animation Nodes
  const nodes = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  return (
    <motion.section 
      ref={containerRef}
      id="about"
      className="min-h-screen py-20 bg-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {nodes}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div style={{ y }} className="relative">
          {/* Header */}
          <motion.div className="text-center mb-16">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity 
              }}
              className="inline-block"
            >
              <FaBrain className="text-5xl text-blue-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800">
              About Me
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
              >
                {/* Icon */}
                <motion.div
                  className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500
                           rounded-xl flex items-center justify-center text-white shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  {section.icon}
                </motion.div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 
                              hover:opacity-50 rounded-xl transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;