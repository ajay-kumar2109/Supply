import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import { BiCode, BiData, BiCloud } from 'react-icons/bi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Enhanced Social Icons */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center gap-8">
            {[
              { 
                icon: <FaGithub size={35} />, 
                url: 'https://github.com/ajay-kumar2109',
                color: 'hover:text-gray-800',
                label: 'GitHub'
              },
              { 
                icon: <FaLinkedin size={35} />, 
                url: 'https://www.linkedin.com/in/ajaykumarsurada/',
                color: 'hover:text-blue-600',
                label: 'LinkedIn'
              },
              { 
                icon: <FaMedium size={35} />, 
                url: 'https://medium.com/@ajaysurada123',
                color: 'hover:text-green-600',
                label: 'Medium'
              },
              { 
                icon: <FaEnvelope size={35} />, 
                url: 'mailto:ajaysurada21@gmail.com',
                color: 'hover:text-red-500',
                label: 'Email'
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-all duration-300 ${social.color} relative group`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 } 
                }}
              >
                <motion.div className="relative">
                  {social.icon}
                  <motion.span
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {social.label}
                  </motion.span>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Greeting and Name */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-blue-600 font-mono mb-4"
            >
              <span className="inline-block">
                {">_ Hi, I'm"}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Ajay Kumar Surada
              </span>
            </motion.h1>
          </div>

          {/* Role Title */}
          <motion.div
            className="text-3xl md:text-4xl font-bold text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span>Optimizing Supply Chains</span>
              <span>📦</span>
              <span>Driving Efficiency</span>
              <span>⚡</span>
              <span>Seamless supply chain operations</span>
              <span>🛒</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Supply Chain Analyst with a passion for leveraging data analytics and process optimization to improve operational efficiency. Experienced in demand forecasting, inventory management, logistics, and procurement, with expertise in tools like Excel, SQL, Python, and Power BI. 
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex justify-center gap-4 mb-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['🌍 Global Supply Chain', '📈 Demand Forecasting', '🗂️ ERP & Inventory Management', '📊 Data Analytics & KPI Tracking', '⏳Lead Time & Efficiency'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Updated CTA Button */}
          <motion.div className="flex justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       text-white rounded-full font-medium shadow-lg relative overflow-hidden
                       flex items-center gap-2 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(88, 80, 236, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.span
                className="text-2xl"
                animate={{ 
                  rotate: [0, 14, -14, 0],
                  scale: [1, 1.2, 1.2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                👋
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
