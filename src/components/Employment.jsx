import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaTools, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa';

const Employment = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      title: "Business Data Analyst",
      company: "Connex",
      period: "Sep 2023 – Apr 2024",
      location: "Hamilton, ON, Canada",
      type: "data",
      achievements: [
        "Automated inventory analysis systems using Python, reducing waste by 15% and improving profit margins.",
        "Built sales forecasting models with Python and statistical analysis, achieving 92% accuracy in projections.",
        "Partnered with suppliers to align replenishment schedules, ensuring 100% on-time delivery for 10+ high-priority SKUs.",
        "Designed VBA macros for financial reporting, saving 40+ hours/month in manual data preparation."
      ],
      skills: ["Python", "SQL", "VBA", "Data Analysis", "Forecasting"],
      colorClass: {
        bg: "bg-blue-500",
        text: "text-blue-500",
        light: "bg-blue-100",
        lightText: "text-blue-700"
      }
    },
    {
      title: "Data Analyst",
      company: "iLink Digital",
      period: "Feb 2022 – Dec 2022",
      location: "Chennai, India",
      type: "data",
      achievements: [
        "Automated Tableau dashboards for inventory KPIs, reducing manual reporting time by 50%.",
        "Merged 5+ data sources using Python and SQL, ensuring 98% accuracy for analytics and reporting.",
        "Conducted root cause analysis on sales fluctuations, resolving issues that boosted revenue by 5% for underperforming SKUs.",
        "Built customer segmentation models in Python, increasing targeted campaign effectiveness by 10%."
      ],
      skills: ["Python", "SQL", "Tableau", "Data Analytics", "Machine Learning"],
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
      period: "Nov 2019 – Jan 2022",
      location: "Chennai, India",
      type: "data",
      achievements: [
        "Optimized SQL queries for large datasets, reducing processing time by 30% to support real-time inventory decisions.",
        "Built Power BI dashboards to track stock levels, reducing stockouts by 12%.",
        "Automated data extraction scripts in Python, saving 50+ hours/month in manual work.",
        "Partnered with logistics teams to refine vendor performance metrics, improving compliance with contractual agreements."
      ],
      skills: ["SQL", "Power BI", "Python", "Data Optimization", "Logistics Analytics"],
      colorClass: {
        bg: "bg-green-500",
        text: "text-green-500",
        light: "bg-green-100",
        lightText: "text-green-700"
      }
    },
    {
      title: "Junior Data Analyst",
      company: "Wipro",
      period: "Dec 2018 – Sep 2019",
      location: "Bangalore, India",
      type: "data",
      achievements: [
        "Developed Excel-based reports with automated refresh functionality, reducing manual effort by 20%.",
        "Built Python scripts to validate vendor data, decreasing reporting errors by 10%.",
        "Supported A/B testing for product launches, increasing feature adoption by 15% through data-driven insights."
      ],
      skills: ["Excel", "Python", "A/B Testing", "Data Validation"],
      colorClass: {
        bg: "bg-orange-500",
        text: "text-orange-500",
        light: "bg-orange-100",
        lightText: "text-orange-700"
      }
    }
  ];

  return (
    <section id="employment" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="flex flex-col space-y-2">
            {jobs.map((job, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveJob(index)}
                className={`p-4 text-left rounded-lg border-2 relative transition-all duration-300 ${
                  activeJob === index ? `${job.colorClass.bg} text-white` : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold">{job.company}</h3>
                <p className="text-sm opacity-80">{job.title}</p>
              </motion.button>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900">{jobs[activeJob].title}</h3>
            <p className={`font-semibold ${jobs[activeJob].colorClass.text}`}>{jobs[activeJob].company}</p>
            <p className="text-gray-600 flex items-center gap-2"><FaCalendar /> {jobs[activeJob].period}</p>
            <p className="text-gray-600 flex items-center gap-2"><FaBuilding /> {jobs[activeJob].location}</p>
            <h4 className="font-semibold mt-4">Key Achievements:</h4>
            <ul className="space-y-2">
              {jobs[activeJob].achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <FaBriefcase className={`${jobs[activeJob].colorClass.text}`} /> {achievement}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {jobs[activeJob].skills.map((skill, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${jobs[activeJob].colorClass.light} ${jobs[activeJob].colorClass.lightText}`}>
                  <FaTools className="text-xs" /> {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employment;
