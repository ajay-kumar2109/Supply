import { useState } from "react";

const projectsData = [
            {
      title: "Credit Card Report Analysis",
      description: "The dashboard provides real-time insights into key performance metrics and trends, empowering stakeholders to make informed decisions.",
      tags: ["PowerBI"],
      links: {
        github: "https://github.com/ajay-kumar2109/Credit-Card-Analysis",
      },
      image: "/certificates/PowerBI-Demo.gif"
    },
      {
      title: "FMCG Mart Supply Chain Analysis",
      description: "This is end-to-end project of Supply Chain in Fast-Moving Consumer Goods(FMCG) domain, in which a real business problem is solved and provided useful insights on an interactive dashboard to the stakeholders using Power BI.",
      tags: ["PowerBI"],
      links: {
        github: "https://github.com/ajay-kumar2109/FMCG-Mart-Supply-Chain-Analysis",
      },
      image: "/certificates/mart.png"
    },
      {
      title: "Amazon Sales Analysis",
      description: "The Amazon Sales Analysis project is a Python-based data analysis endeavor aimed at exploring and understanding sales data obtained from Amazon. ",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Sales_Analysis_Amazon",
      },
      image: "/certificates/amazon.png"
    },
      {
      title: "Retail Sales",
      description: "Real-time dashboard for monitoring ETL processes with live data streaming and interactive visualizations.",
      tags: ["React", "Node.js", "Apache Kafka", "D3.js"],
      links: {
        github: "https://github.com/ajay-kumar2109/retailSales",
      },
      image: "/certificates/sales1.png"
    },
        {
      title: "Supply Chain Analysis Using PowerBI",
      description: "Conducted a comprehensive analysis of supply chain and shipment trends from 2015 to 2018, Including Customer Insights, Shipping Efficiency, Sales Composition and Geographic Analysis.",
      tags: ["PowerBI"],
      links: {
        github: "https://github.com/ajay-kumar2109/Supply_Chain_Analysis-Using-PowerBI",
      },
      image: "/certificates/supplychain.png"
    },
  {
      title: "MLOps Pipeline using Apache Airflow: Overview",
      description: "The goal of this pipeline is to streamline the process of analyzing screentime data by automating its preprocessing and utilizing machine learning to predict app usage.",
      tags: ["Apache Airflow"],
      links: {
        github: "https://github.com/ajay-kumar2109/MLOps-Pipeline-using-Apache-Airflow/tree/main?tab=readme-ov-file#overview",
      },
      image: "/certificates/airflow.png"
    },
    {
      title: "Tableau Dashboards",
      description: "I created Tableau dashboards to analyze: 1. Employee Trends 2. Automotive Sales 3. Call Center Performance",
      tags: ["Tableau"],
      links: {
        github: "https://github.com/ajay-kumar2109/Employeedashboard",
      },
      image: "/certificates/dashboard.png"
    },
        {
      title: "Movielytics Data Engineering Projects",
      description: "The aim of this project, is to perform Extract, Transform, Load, on movies data, to answer questions the business may have about its users",
      tags: ["Kaggle", "Amazon Ec2", "Apache Airflow", "Amazon Redshift"],
      links: {
        github: "https://github.com/ajay-kumar2109/movielytics_dataEngineering_Full-project",
      },
      image: "/certificates/movie.png"
    },
    {
      title: "Retail Sales",
      description: "Real-time dashboard for monitoring ETL processes with live data streaming and interactive visualizations.",
      tags: ["React", "Node.js", "Apache Kafka", "D3.js"],
      links: {
        github: "https://github.com/ajay-kumar2109/retailSales",
      },
      image: "/certificates/sales1.png"
    },
    {
      title: "healthcare-provider-fraud-detection",
      description: "Automated CI/CD pipeline tool with custom workflows and cloud integrations.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/healthcare-provider-fraud-detection",
      },
      image: "/certificates/healthcare.png"
    },
    {
      title: "8-week-sql-coding-challenge",
      description: "Advanced analytics platform with real-time data processing and visualization.",
      tags: ["PostgreSQL"],
      links: {
        github: "https://github.com/ajay-kumar2109/8-week-sql-coding-challenge",
      },
      image: "/certificates/sql.png"
    },
    {
      title: "Credit_Card_Report_Analysis",
      description: "Comprehensive blockchain explorer with transaction tracking and smart contract analysis.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Credit_Card_Report_Analysis",
      },
      image: "/certificates/cc.png"
    },
    {
      title: "Toronto-real-estate Analysis",
      description: "Intelligent code completion and suggestion system using machine learning.",
      tags: [],
      links: {
        github: "https://github.com/ajay-kumar2109/Toronto-real-estate",
      },
      image: "/certificates/toronto.png"
    }
  // Add more projects here
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-2xl shadow-md transition-transform transform hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-contain rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleProjects((prev) => prev + 4)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
