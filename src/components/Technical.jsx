import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Technical = () => {
  const [activeTab, setActiveTab] = useState('etl');
  const [dataFlowing, setDataFlowing] = useState(true);

  // ETL Animation Component
  const ETLAnimation = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      if (dataFlowing) {
        const interval = setInterval(() => {
          setParticles(prev => {
            const newParticle = {
              id: Date.now(),
              color: ['bg-blue-400', 'bg-green-400', 'bg-yellow-400'][
                Math.floor(Math.random() * 3)
              ]
            };
            return [...prev, newParticle].slice(-5);
          });
        }, 800);

        return () => clearInterval(interval);
      }
    }, [dataFlowing]);

    return (
      <div className="w-full h-[400px] flex items-center justify-center relative">
        <div className="flex items-center justify-between w-full max-w-3xl px-12">
          {/* Source Systems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-center space-y-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto"
              >
                <span className="text-3xl">💼</span>
              </motion.div>
              <p className="text-sm font-medium text-gray-600">CRM</p>
            </div>
            <div className="text-center space-y-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto"
              >
                <span className="text-3xl">🏢</span>
              </motion.div>
              <p className="text-sm font-medium text-gray-600">ERP</p>
            </div>
            <div className="text-center space-y-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto"
              >
                <span className="text-3xl">📄</span>
              </motion.div>
              <p className="text-sm font-medium text-gray-600">Files</p>
            </div>
          </motion.div>

          {/* ETL Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Data Particles */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              {particles.map((particle, index) => (
                <motion.div
                  key={particle.id}
                  className={`w-3 h-3 rounded-full absolute ${particle.color}`}
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 200, opacity: [0, 1, 0] }}
                  transition={{ duration: 2, ease: "linear" }}
                  style={{ top: `${index * 8}px` }}
                />
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">📤</span>
                </div>
                <p className="text-xs font-medium text-gray-600">Extract</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🔄</span>
                </div>
                <p className="text-xs font-medium text-gray-600">Transform</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">📥</span>
                </div>
                <p className="text-xs font-medium text-gray-600">Load</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Target Data Warehouse */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center mb-3"
            >
              <span className="text-4xl">💾</span>
            </motion.div>
            <p className="text-sm font-medium text-gray-600">Data Warehouse</p>
          </motion.div>
        </div>

        {/* Reset Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: dataFlowing ? 0 : 1 }}
          onClick={() => setDataFlowing(true)}
          className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg
                   hover:bg-blue-600 transition-colors duration-300"
        >
          Restart Flow
        </motion.button>
      </div>
    );
  };

  // ML Animation Component
  const MLAnimation = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [modelAccuracy, setModelAccuracy] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStage(prev => (prev + 1) % 4);
        setModelAccuracy(prev => Math.min(prev + 25, 95));
      }, 2000);

      return () => clearInterval(interval);
    }, []);

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

    return (
      <div className="w-full h-[400px] flex items-center justify-center p-8">
        <div className="w-full max-w-3xl">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 mx-auto
                    ${index <= currentStage ? stage.color : 'bg-gray-100'} 
                    ${index <= currentStage ? 'text-white' : 'text-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{stage.icon}</span>
                </motion.div>
                <p className="text-sm font-medium text-gray-600">{stage.name}</p>
                <p className="text-xs text-gray-500">{stage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Accuracy Meter */}
          <motion.div
            className="bg-gray-100 rounded-lg p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Model Accuracy</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${modelAccuracy}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-gray-600">{modelAccuracy}% Accuracy</p>
          </motion.div>
        </div>
      </div>
    );
  };

  // CICD Animation Component
  const CICDAnimation = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [buildStatus, setBuildStatus] = useState('pending');

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStage(prev => {
          if (prev === 3) {
            setBuildStatus('success');
            return prev;
          }
          return prev + 1;
        });
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    const stages = [
      {
        name: "Code Commit",
        icon: "👨‍💻",
        color: "bg-blue-500",
        description: "Developer pushes code"
      },
      {
        name: "Build",
        icon: "🏗️",
        color: "bg-purple-500",
        description: "Compile and create artifacts"
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

    return (
      <div className="w-full h-[400px] flex items-center justify-center p-8">
        <div className="w-full max-w-3xl">
          {/* Pipeline Stages */}
          <div className="flex justify-between mb-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 mx-auto
                    ${index <= currentStage ? stage.color : 'bg-gray-100'}
                    ${index <= currentStage ? 'text-white' : 'text-gray-400'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{stage.icon}</span>
                </motion.div>
                <p className="text-sm font-medium text-gray-600">{stage.name}</p>
                <p className="text-xs text-gray-500">{stage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Build Status */}
          <motion.div
            className="bg-gray-100 rounded-lg p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Pipeline Status</h3>
            <div className="flex items-center justify-center gap-2">
              <motion.div
                className={`w-4 h-4 rounded-full ${
                  buildStatus === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
                animate={{
                  scale: buildStatus === 'pending' ? [1, 1.2, 1] : 1
                }}
                transition={{
                  repeat: buildStatus === 'pending' ? Infinity : 0,
                  duration: 1
                }}
              />
              <span className="text-gray-600 capitalize">{buildStatus}</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  // Render function for animations
  const renderAnimation = () => {
    switch (activeTab) {
      case 'etl':
        return <ETLAnimation />;
      case 'ml':
        return <MLAnimation />;
      case 'cicd':
        return <CICDAnimation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('etl')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'etl' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            ETL Pipeline
          </button>
          <button
            onClick={() => setActiveTab('ml')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'ml' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveTab('cicd')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'cicd' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            CI/CD Pipeline
          </button>
        </div>

        {/* Animation Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {renderAnimation()}
        </div>
      </div>
    </div>
  );
  const ToolsDescription = () => {
    const toolsets = {
      etl: [
        { name: 'Apache Airflow', icon: '🔄' },
        { name: 'AWS Glue', icon: '☁️' },
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '📊' },
        { name: 'Snowflake', icon: '❄️' }
      ],
      ml: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Scikit-learn', icon: '🤖' },
        { name: 'Python', icon: '🐍' },
        { name: 'Jupyter', icon: '📓' }
      ],
      cicd: [
        { name: 'Jenkins', icon: '⚙️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⛵' },
        { name: 'GitHub Actions', icon: '🔄' },
        { name: 'AWS CodePipeline', icon: '☁️' }
      ]
    };

    return (
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {toolsets[activeTab].map((tool) => (
            <div
              key={tool.name}
              className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm"
            >
              <span className="mr-2">{tool.icon}</span>
              <span className="text-sm text-gray-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('etl')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'etl' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            ETL Pipeline
          </button>
          <button
            onClick={() => setActiveTab('ml')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'ml' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveTab('cicd')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'cicd' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            CI/CD Pipeline
          </button>
        </div>

        {/* Animation Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {renderAnimation()}
          <ToolsDescription />
        </div>
      </div>
    </div>
  );
};


export default Technical;