import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiTable, BiData, BiCode, BiBarChartAlt2 } from "react-icons/bi"; // For tools
import { MdAnalytics, MdEventNote, MdInventory, MdLocalShipping, MdBarChart, MdSettings, MdBuild } from "react-icons/md"; // For skills

const Hero = () => {
  const skills = [
    { name: "Supply Chain Analytics", icon: <MdAnalytics size={24} /> },
    { name: "Demand Planning & Forecasting", icon: <MdEventNote size={24} /> },
    { name: "Inventory Optimization", icon: <MdInventory size={24} /> },
    { name: "Logistics & Transportation", icon: <MdLocalShipping size={24} /> },
  ];

  const tools = [
    { name: "Excel", icon: <BiTable size={32} /> },
    { name: "SQL", icon: <BiData size={32} /> },
    { name: "Python", icon: <BiCode size={32} /> },
    { name: "Power BI", icon: <BiBarChartAlt2 size={32} /> },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-8 md:py-16 flex flex-col items-center min-h-screen w-full">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Intro */}
        <div className="max-w-lg w-full text-center md:text-left mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Ajay Kumar Surada
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700">
              Supply Chain Analyst
            </span>
            <span className="block w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 mx-auto md:mx-0"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 md:mt-6"
          >
            Passionate about leveraging data analytics and process optimization to enhance operational efficiency. Expertise in demand forecasting, inventory management, logistics, and procurement.
          </motion.p>
          {/* Hire Me Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8"
          >
            <a
              href="#contact"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base"
            >
              Hire Me Now
            </a>
          </motion.div>
        </div>

        {/* Right Side - Skills Cards (Floating Effect) */}
        <div className="relative w-full md:w-1/2 h-80 sm:h-96 md:h-[500px]">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 50, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 border border-gray-100 flex items-center space-x-2 sm:space-x-3"
              style={{
                top: `${10 + (index % 4) * 25}%`, // Adjusted for better spacing on mobile
                left: `${index % 2 === 0 ? 0 : 50}%`,
                transform: `translateX(${index % 2 === 0 ? '0' : '-50%'})`,
                width: "180px", // Smaller width on mobile
                minWidth: "160px",
              }}
            >
              <span className="text-blue-600">{skill.icon}</span>
              <span className="text-xs sm:text-sm font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer - Expertise in Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 text-center w-full"
      >
        <p className="text-gray-500 text-xs sm:text-sm mb-4">
          Expertise in Tools & Technologies
        </p>
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-gray-600">{tool.icon}</span>
              <span className="text-gray-700 text-xs sm:text-sm mt-2">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
