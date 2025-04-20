import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ETLAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [dataParticles, setDataParticles] = useState([]);

  // Data particle animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setDataParticles(prev => {
          // Add new particle
          const newParticle = {
            id: Date.now(),
            color: ['bg-blue-500', 'bg-green-500', 'bg-yellow-500'][Math.floor(Math.random() * 3)]
          };
          return [...prev, newParticle].slice(-5); // Keep last 5 particles
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Reset animation
  useEffect(() => {
    if (!isPlaying) {
      const timer = setTimeout(() => setIsPlaying(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const databases = [
    { name: "CRM", color: "bg-blue-500", icon: "💼" },
    { name: "ERP", color: "bg-green-500", icon: "🏢" },
    { name: "CSV", color: "bg-yellow-500", icon: "📄" }
  ];

  const transformSteps = [
    { name: "Clean Data", icon: "🧹" },
    { name: "Format", icon: "🔄" },
    { name: "Validate", icon: "✅" },
    { name: "Aggregate", icon: "📊" }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-[980px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            ETL Process
          </h2>
          <p className="text-xl text-gray-600">
            Extract, Transform, and Load Data Pipeline
          </p>
        </motion.div>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden min-h-[400px]">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
            <motion.div
              initial={{ backgroundPosition: '0% 0%' }}
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}
            />
          </div>

          <div className="relative grid grid-cols-3 gap-8">
            {/* Extract Section */}
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold text-gray-900 text-center mb-8"
              >
                Extract
              </motion.h3>
              <div className="space-y-4">
                {databases.map((db, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={isPlaying ? { 
                      x: 0, 
                      opacity: 1,
                      transition: { delay: index * 0.2 }
                    } : {}}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className={`${db.color} p-4 rounded-lg text-white text-center 
                                   shadow-lg transform transition-transform duration-300`}>
                      <span className="text-2xl mr-2">{db.icon}</span>
                      {db.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transform Section with Floating Particles */}
            <div className="relative">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold text-gray-900 text-center mb-8"
              >
                Transform
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isPlaying ? {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 1.5 }
                } : {}}
                className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg"
              >
                <AnimatePresence>
                  {dataParticles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      initial={{ x: -100, y: 0, opacity: 0 }}
                      animate={{ x: 100, y: [-20, 20, -20], opacity: [0, 1, 0] }}
                      exit={{ x: 200, opacity: 0 }}
                      transition={{ duration: 2, ease: "linear" }}
                      className={`absolute left-0 top-1/2 w-3 h-3 ${particle.color} rounded-full`}
                    />
                  ))}
                </AnimatePresence>

                <div className="space-y-4">
                  {transformSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isPlaying ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.8 + (index * 0.2) }
                      } : {}}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 text-gray-700 p-2 rounded-lg
                               hover:bg-blue-100 transition-colors duration-300"
                    >
                      <span className="text-xl">{step.icon}</span>
                      {step.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Load Section */}
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold text-gray-900 text-center mb-8"
              >
                Load
              </motion.h3>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isPlaying ? {
                  x: 0,
                  opacity: 1,
                  transition: { delay: 3.5 }
                } : {}}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white
                          shadow-lg transform transition-transform duration-300"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <span className="text-4xl">💾</span>
                  </motion.div>
                  <p className="font-medium">Data Warehouse</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Reset Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={isPlaying ? { opacity: 0 } : { opacity: 1 }}
            onClick={() => setIsPlaying(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Replay Animation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ETLAnimation;