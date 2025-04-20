import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TechStackAnimation = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const categories = [
    {
      name: "Languages & Core",
      icon: "💻",
      color: "bg-blue-500",
      skills: ["SQL", "Python", "Java"],
      description: "Foundation programming languages"
    },
    {
      name: "Big Data Processing",
      icon: "⚡",
      color: "bg-green-500",
      skills: ["Apache Spark", "Hadoop", "Kafka", "Flume", "Sqoop"],
      description: "Distributed data processing systems"
    },
    {
      name: "Databases",
      icon: "🗄️",
      color: "bg-purple-500",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Cassandra", "AWS Redshift"],
      description: "Database management systems"
    },
    {
      name: "ETL & Data Pipeline",
      icon: "🔄",
      color: "bg-yellow-500",
      skills: ["Apache Airflow", "AWS Glue", "Talend", "Informatica"],
      description: "Data integration and workflow"
    },
    {
      name: "Cloud & Infrastructure",
      icon: "☁️",
      color: "bg-indigo-500",
      skills: ["AWS (S3, EMR, Lambda)", "Google Cloud Platform"],
      description: "Cloud computing platforms"
    },
    {
      name: "Machine Learning",
      icon: "🧠",
      color: "bg-red-500",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn"],
      description: "AI and machine learning frameworks"
    },
    {
      name: "Visualization",
      icon: "📊",
      color: "bg-orange-500",
      skills: ["Tableau", "Power BI", "Looker"],
      description: "Data visualization tools"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => {
          if (prev === categories.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-[1200px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive technology stack for data engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Categories List */}
          <div className="space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: activeCategory === index ? 1.05 : 1
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300
                          ${activeCategory === index 
                            ? `${category.color} bg-opacity-10 shadow-lg` 
                            : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Category Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">
                    {categories[activeCategory].icon}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {categories[activeCategory].name}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {categories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill}</span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className={`h-1 ${categories[activeCategory].color} rounded-full`}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`w-16 h-16 ${categories[activeCategory].color} 
                            rounded-full flex items-center justify-center mx-auto`}
                >
                  <span className="text-2xl text-white">
                    {categories[activeCategory].icon}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Reset Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: !isPlaying ? 1 : 0 }}
          onClick={() => {
            setActiveCategory(0);
            setIsPlaying(true);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg
                   hover:bg-blue-700 transition-colors duration-300 block"
        >
          Replay Animation
        </motion.button>
      </div>
    </section>
  );
};

export default TechStackAnimation;