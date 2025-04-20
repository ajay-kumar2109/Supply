import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-bold text-primary"
        >
          404
        </motion.h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link 
          to="/"
          className="px-8 py-3 bg-primary text-dark-300 rounded-full inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;