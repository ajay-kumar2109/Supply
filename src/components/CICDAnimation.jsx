import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CICDAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const [buildStatus, setBuildStatus] = useState('pending');

  const stages = [
    {
      name: "Code Commit",
      icon: "👨‍💻",
      color: "bg-blue-500",
      description: "Developer pushes code to repository"
    },
    {
      name: "Build",
      icon: "🏗️",
      color: "bg-purple-500",
      description: "Compile code and create artifacts"
    },
    {
      name: "Test",
      icon: "🧪",
      color: "bg-yellow-500",
      description: "Run automated tests"
    },
    {
      name: "Deploy",
      icon: "🚀",
      color: "bg-green-500",
      description: "Deploy to production"
    }
  ];

  // Animate through stages
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStage((prev) => {
          if (prev === stages.length - 1) {
            setBuildStatus('success');
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const resetAnimation = () => {
    setCurrentStage(0);
    setBuildStatus('pending');
    setIsPlaying(true);
  };

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
            CI/CD Pipeline
          </h2>
          <p className="text-xl text-gray-600">
            Continuous Integration & Continuous Deployment
          </p>
        </motion.div>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
          {/* Pipeline Stages */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 -translate-y-1/2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ 
                  width: `${(currentStage / (stages.length - 1)) * 100}%`,
                  backgroundColor: buildStatus === 'success' ? '#10B981' : '#3B82F6'
                }}
                className="absolute top-0 left-0 h-full"
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4 relative">
              {stages.map((stage, index) => (
                <div key={index} className="relative pt-8 pb-4">
                  {/* Stage Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: currentStage >= index ? 1 : 0,
                      backgroundColor: currentStage > index 
                        ? '#10B981' 
                        : currentStage === index 
                        ? '#3B82F6' 
                        : '#E5E7EB'
                    }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-8 h-8 rounded-full flex items-center justify-center 
                              text-white z-10`}
                    transition={{ delay: index * 0.2 }}
                  >
                    {currentStage > index && (
                      <motion.svg 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                  </motion.div>

                  {/* Stage Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentStage >= index ? 1 : 0.5,
                      y: 0
                    }}
                    className={`text-center p-6 rounded-lg ${
                      currentStage === index ? stage.color + '/10' : 'bg-gray-50'
                    }`}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="text-3xl mb-2 block">{stage.icon}</span>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {stage.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {stage.description}
                    </p>

                    {/* Active Stage Indicator */}
                    {currentStage === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-4"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Build Status */}
          <AnimatePresence>
            {buildStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pipeline Completed Successfully
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reset Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: buildStatus === 'success' ? 1 : 0 }}
            onClick={resetAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-300"
          >
            Run Pipeline Again
          </motion.button>
        </div>

        {/* Pipeline Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Pipeline Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automated Build Process
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive Testing Suite
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automated Deployment
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'AWS'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CICDAnimation;