import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MLAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const [modelAccuracy, setModelAccuracy] = useState(0);

  const stages = [
    {
      name: "Data Preprocessing",
      icon: "🔄",
      color: "bg-purple-500",
      description: "Clean and prepare training data"
    },
    {
      name: "Model Training",
      icon: "🧠",
      color: "bg-blue-500",
      description: "Train ML model with prepared dataset"
    },
    {
      name: "Model Evaluation",
      icon: "📊",
      color: "bg-yellow-500",
      description: "Validate model performance"
    },
    {
      name: "Deployment",
      icon: "🚀",
      color: "bg-green-500",
      description: "Deploy model to production"
    }
  ];

  // Animate through stages
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStage((prev) => {
          if (prev === stages.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });

        // Simulate increasing model accuracy
        setModelAccuracy((prev) => {
          if (prev < 95) {
            return prev + Math.random() * 20;
          }
          return prev;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const resetAnimation = () => {
    setCurrentStage(0);
    setModelAccuracy(0);
    setIsPlaying(true);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600" />
        <motion.div
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Pipeline Stages */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 -translate-y-1/2">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ 
              width: `${(currentStage / (stages.length - 1)) * 100}%`,
              backgroundColor: currentStage === stages.length - 1 ? '#10B981' : '#3B82F6'
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
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-8 h-8 rounded-full flex items-center justify-center 
                          text-white z-10"
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

      {/* Model Accuracy */}
      <AnimatePresence>
        {modelAccuracy > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-blue-50 rounded-lg">
              <div className="text-left">
                <p className="text-sm text-gray-600">Model Accuracy</p>
                <p className="text-2xl font-bold text-blue-600">
                  {modelAccuracy.toFixed(1)}%
                </p>
              </div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl"
              >
                🎯
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: !isPlaying ? 1 : 0 }}
        onClick={resetAnimation}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors duration-300"
      >
        Train New Model
      </motion.button>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 pt-8 border-t border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'TensorFlow',
            'PyTorch',
            'scikit-learn',
            'Docker',
            'FastAPI',
            'AWS SageMaker'
          ].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MLAnimation;