import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChartLine, FaDatabase, FaClipboardList, FaTruckLoading } from 'react-icons/fa';
import { SiPowerbi, SiTableau, SiSap, SiMicrosoftazure } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('dataAnalysis');

  const skillCategories = {
    dataAnalysis: {
      title: "SupplyChain Analysis",
      icon: "📊",
      colorClass: "bg-blue-500",
      borderClass: "border-blue-500",
      iconClass: "text-blue-500",
      skills: [
        { name: "Power BI", icon: <SiPowerbi />, level: 90 },
        { name: "Tableau", icon: <SiTableau />, level: 85 },
        { name: "SQL", icon: <FaDatabase />, level: 90 },
        { name: "Excel (Advanced)", icon: "📑", level: 95 },
        { name: "Data Visualization", icon: "📉", level: 85 }
      ]
    },
    inventoryLogistics: {
      title: "Inventory & Logistics",
      icon: "📦",
      colorClass: "bg-green-500",
      borderClass: "border-green-500",
      iconClass: "text-green-500",
      skills: [
        { name: "Inventory Management", icon: <FaClipboardList />, level: 90 },
        { name: "Warehouse Operations", icon: "🏭", level: 85 },
        { name: "Supply Chain Planning", icon: "🛒", level: 80 },
        { name: "Logistics & Distribution", icon: <FaTruckLoading />, level: 85 },
        { name: "SAP SCM", icon: <SiSap />, level: 75 }
      ]
    },
    erpProcurement: {
      title: "ERP & Procurement",
      icon: "🖥️",
      colorClass: "bg-purple-500",
      borderClass: "border-purple-500",
      iconClass: "text-purple-500",
      skills: [
        { name: "SAP ERP", icon: <SiSap />, level: 85 },
        { name: "Oracle SCM", icon: "🔗", level: 80 },
        { name: "Procurement Strategy", icon: "📜", level: 85 },
        { name: "Vendor Management", icon: "🏢", level: 80 },
        { name: "Contract Negotiation", icon: "✍️", level: 75 }
      ]
    },
    forecasting: {
      title: "Forecasting & Demand Planning",
      icon: "📈",
      colorClass: "bg-yellow-500",
      borderClass: "border-yellow-500",
      iconClass: "text-yellow-500",
      skills: [
        { name: "Demand Forecasting", icon: <FaChartLine />, level: 90 },
        { name: "Predictive Analytics", icon: "🔮", level: 85 },
        { name: "Time Series Analysis", icon: "📅", level: 80 },
        { name: "Scenario Planning", icon: "📋", level: 75 },
        { name: "Azure ML", icon: <SiMicrosoftazure />, level: 70 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-mono text-blue-500">02.</span> Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">Supply Chain Technologies I Work With</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 border-2 shadow-sm hover:shadow-md
                ${activeCategory === key ? `${category.colorClass} text-white border-transparent` : `bg-white text-gray-700 ${category.borderClass} hover:bg-gray-50`}`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-2xl ${skillCategories[activeCategory].iconClass}`}>{typeof skill.icon === 'string' ? skill.icon : skill.icon}</span>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, ease: "easeOut" }} className={`absolute h-full ${skillCategories[activeCategory].colorClass}`} />
              </div>
              <div className="mt-2 text-right">
                <span className={`text-sm font-medium ${skillCategories[activeCategory].iconClass}`}>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
