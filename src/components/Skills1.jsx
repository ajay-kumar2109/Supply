import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAws, FaPython, FaReact, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiTensorflow, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('dataEngineering');

  const skillCategories = {
    dataEngineering: {
      title: "Data Engineering",
      icon: "🔄",
      colorClass: "bg-blue-500",
      borderClass: "border-blue-500",
      iconClass: "text-blue-500",
      skills: [
        { name: "Apache Spark", icon: <SiApachespark />, level: 90 },
        { name: "Apache Kafka", icon: <SiApachekafka />, level: 85 },
        { name: "AWS Glue", icon: <FaAws />, level: 80 },
        { name: "Airflow", icon: "🔄", level: 85 },
        { name: "ETL Pipeline", icon: "⚡", level: 90 }
      ]
    },
    cloudPlatforms: {
      title: "Cloud & DevOps",
      icon: "☁️",
      colorClass: "bg-purple-500",
      borderClass: "border-purple-500",
      iconClass: "text-purple-500",
      skills: [
        { name: "AWS", icon: <FaAws />, level: 85 },
        { name: "Docker", icon: <FaDocker />, level: 80 },
        { name: "CI/CD", icon: "🔄", level: 75 },
        { name: "Kubernetes", icon: "⚓", level: 70 },
        { name: "GCP", icon: "☁️", level: 75 }
      ]
    },
    machineLearning: {
      title: "Machine Learning",
      icon: "🧠",
      colorClass: "bg-green-500",
      borderClass: "border-green-500",
      iconClass: "text-green-500",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, level: 80 },
        { name: "Scikit-Learn", icon: "🔬", level: 85 },
        { name: "NLP", icon: "📝", level: 75 },
        { name: "Deep Learning", icon: "🤖", level: 75 },
        { name: "ML Ops", icon: "⚙️", level: 70 }
      ]
    },
    databases: {
      title: "Databases",
      icon: "💾",
      colorClass: "bg-yellow-500",
      borderClass: "border-yellow-500",
      iconClass: "text-yellow-500",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "Redis", icon: "📊", level: 80 },
        { name: "Cassandra", icon: "🗄️", level: 75 },
        { name: "SQL", icon: <FaDatabase />, level: 90 }
      ]
    },
    fullStack: {
      title: "Full Stack",
      icon: "💻",
      colorClass: "bg-red-500",
      borderClass: "border-red-500",
      iconClass: "text-red-500",
      skills: [
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "React", icon: <FaReact />, level: 85 },
        { name: "Node.js", icon: "⚡", level: 80 },
        { name: "Django", icon: "🎯", level: 85 },
        { name: "REST APIs", icon: "🔌", level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-mono text-blue-500">02.</span> Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies I work with
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                border-2 shadow-sm hover:shadow-md
                ${activeCategory === key 
                  ? `${category.colorClass} text-white border-transparent` 
                  : `bg-white text-gray-700 ${category.borderClass} hover:bg-gray-50`}`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-2xl ${skillCategories[activeCategory].iconClass}`}>
                  {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </span>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute h-full ${skillCategories[activeCategory].colorClass}`}
                />
              </div>
              
              {/* Skill Level */}
              <div className="mt-2 text-right">
                <span className={`text-sm font-medium ${skillCategories[activeCategory].iconClass}`}>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic">
            And many more technologies I work with...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills1;
