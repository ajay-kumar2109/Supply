import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaTools, FaBrain, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa';

const Employment = () => {
  const [activeJob, setActiveJob] = useState(0);

  // Jobs data with added type property for icons
  const jobs = [
    {
      title: "Tech Support Analyst",
      company: "Dependable IT Support",
      period: "August 2023 - March 2024",
      location: "Hamilton, Ontario, Canada",
      type: "network", // Added for icon
      skills: ["Technical Support", "IT Infrastructure", "Customer Service"],
      colorClass: {
        bg: "bg-blue-500",
        text: "text-blue-500",
        light: "bg-blue-100",
        lightText: "text-blue-700"
      }
    },
    {
      title: "Data Analyst & ML Developer",
      company: "iLink Digital",
      period: "January 2022 - December 2022",
      location: "India",
      type: "ai", // Added for icon
      achievements: [
        "Architected ETL pipelines using Apache Spark and Python, achieving 40% faster data processing",
        "Built AWS S3 data lake with automated ML model deployment using SageMaker",
        "Developed customer segmentation models using scikit-learn, improving retention by 25%",
        "Implemented real-time analytics using Kafka streams, enabling 24/7 monitoring",
        "Optimized AWS Redshift queries, reducing execution times by 35%"
      ],
      skills: ["Python", "Apache Spark", "Kafka", "AWS", "TensorFlow", "React.js", "Django", "Docker"],
      colorClass: {
        bg: "bg-purple-500",
        text: "text-purple-500",
        light: "bg-purple-100",
        lightText: "text-purple-700"
      }
    },
    {
      title: "Data Analyst",
      company: "Cognizant",
      period: "November 2020 - January 2022",
      location: "Chennai, Tamil Nadu, India",
      type: "data", // Added for icon
      achievements: [
        "Engineered real-time analytics platform using Kafka and Spark Streaming",
        "Developed time-series forecasting models improving demand planning by 30%",
        "Created anomaly detection systems reducing error rates by 15%",
        "Optimized PostgreSQL queries, improving data retrieval by 25%"
      ],
      skills: ["Python", "SQL", "Kafka", "Spark", "PostgreSQL", "Angular", "Node.js", "TensorFlow", "Docker"],
      colorClass: {
        bg: "bg-green-500",
        text: "text-green-500",
        light: "bg-green-100",
        lightText: "text-green-700"
      }
    },
    {
      title: "Data Analyst",
      company: "Wipro",
      period: "December 2018 - September 2019",
      location: "India",
      type: "cloud", // Added for icon
      achievements: [
        "Developed ETL pipelines using Azure Data Factory",
        "Created responsive web interfaces using React and Bootstrap",
        "Built machine learning models for predictive maintenance",
        "Implemented automated testing achieving 85% code coverage"
      ],
      skills: ["Python", "JavaScript", "React", "Azure", "SQL", "scikit-learn", "Git", "Docker"],
      colorClass: {
        bg: "bg-orange-500",
        text: "text-orange-500",
        light: "bg-orange-100",
        lightText: "text-orange-700"
      }
    }
  ];

  const education = [
    {
      degree: "Postgraduate Degree",
      field: "Information Technology Project Management",
      school: "Conestoga College",
      period: "January 2024 - August 2024",
      location: "Kitchener, Ontario, Canada"
    },
    {
      degree: "Postgraduate Degree",
      field: "International/Global Studies",
      school: "Conestoga College",
      period: "January 2023 - November 2023",
      location: "Kitchener, Ontario, Canada"
    },
    {
      degree: "Bachelor's degree",
      field: "Computer Engineering",
      school: "Vignan Institute of Information Technology",
      period: "2016 - 2020",
      location: "India"
    }
  ];

  // Animation Components
  const NeuralNetworkAnimation = () => {
    const nodes = Array(12).fill(0);
    return (
      <div className="absolute right-0 top-0 opacity-20 pointer-events-none">
        <div className="relative w-64 h-64">
          {nodes.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-500 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
                x: Math.cos(i * Math.PI * 2 / nodes.length) * 100,
                y: Math.sin(i * Math.PI * 2 / nodes.length) * 100,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const DataFlowAnimation = () => {
    return (
      <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
        {Array(5).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            initial={{ x: -20, y: 100 }}
            animate={{
              x: [0, 100, 200],
              y: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    );
  };

  const JobTypeIcon = ({ type }) => {
    const icons = {
      ai: <FaBrain className="text-2xl" />,
      data: <FaDatabase className="text-2xl" />,
      cloud: <FaCloud className="text-2xl" />,
      network: <FaNetworkWired className="text-2xl" />
    };

    return (
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        {icons[type]}
      </motion.div>
    );
  };

  return (
    <section id="employment" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <NeuralNetworkAnimation />
      <DataFlowAnimation />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="font-mono text-blue-500 inline-block"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              03.
            </motion.span>
            {" "}Work Experience
          </motion.h2>
          <p className="text-xl text-gray-600">
            My professional journey
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Company Tabs */}
          <div className="flex flex-col space-y-2">
            <AnimatePresence>
              {jobs.map((job, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveJob(index)}
                  className={`p-4 text-left rounded-lg transition-all duration-300 border-2 relative
                    ${activeJob === index 
                      ? `${job.colorClass.bg} text-white border-transparent shadow-lg` 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <JobTypeIcon type={job.type} />
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-sm opacity-80">{job.title}</p>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Job Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJob}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="space-y-6">
                {/* Job Header */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {jobs[activeJob].title}
                  </h3>
                  <p className={`${jobs[activeJob].colorClass.text} font-semibold`}>
                    {jobs[activeJob].company}
                  </p>
                </div>

                {/* Job Meta */}
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaCalendar className={jobs[activeJob].colorClass.text} />
                    <span>{jobs[activeJob].period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBuilding className={jobs[activeJob].colorClass.text} />
                    <span>{jobs[activeJob].location}</span>
                  </div>
                </div>

                {/* Achievements */}
                {jobs[activeJob].achievements && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {jobs[activeJob].achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <FaBriefcase className={`mt-1 flex-shrink-0 ${jobs[activeJob].colorClass.text}`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobs[activeJob].skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-3 py-1 ${jobs[activeJob].colorClass.light} ${jobs[activeJob].colorClass.lightText}
                                  rounded-full text-sm flex items-center gap-1`}
                      >
                        <FaTools className="text-xs" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-blue-600">{edu.field}</p>
                <p className="text-gray-600">{edu.school}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <FaCalendar className="text-blue-500" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <FaBuilding className="text-blue-500" />
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Employment;
