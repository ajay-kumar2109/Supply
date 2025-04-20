import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import CICDAnimation from './CICDAnimation';
import ETLAnimation from './ETLAnimation';

const Combined = () => {
  return (
    <section id="tech-animations" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="font-mono text-gray-600">04.</span> Technical Experience
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Deep dive into my technical implementations
          </p>
        </motion.div>

        {/* CICD Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                CI/CD Pipeline Implementation
              </h3>
              <p className="text-gray-600 mb-8">
                Automated deployment pipeline with integrated testing and monitoring
              </p>
              <CICDAnimation />
            </div>
          </div>
        </motion.div>

        {/* ETL Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ETL Process Architecture
              </h3>
              <p className="text-gray-600 mb-8">
                Data pipeline design and implementation for large-scale systems
              </p>
              <ETLAnimation />
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center gap-4"
        >
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-300 cursor-pointer"
          >
            View Skills
          </Link>
          
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg
                     hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Combined;