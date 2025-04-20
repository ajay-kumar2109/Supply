import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 text-lg">
            Built with 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <FaReact className="text-blue-500" />
            </motion.span>
            React & 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <SiTailwindcss className="text-cyan-500" />
            </motion.span>
            Tailwind CSS
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Ajay Kumar Surada. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;