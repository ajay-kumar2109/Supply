import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBriefcase, FaTimes, FaRocket, FaEnvelope } from 'react-icons/fa';

const HireMePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      // Hide after 5 seconds
      setTimeout(() => setIsVisible(false), 2000);
    };

    // Initial delay of 20 seconds
    const initialTimeout = setTimeout(() => {
      showPopup();
    }, 20000);

    // Repeat every 20 seconds
    const interval = setInterval(showPopup, 100000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleHireClick = () => {
    window.location.href = '#contact';
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center"
          >
            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                rotate: [0, 5, -5, 0],
              }}
              exit={{ opacity: 0, scale: 0.5, y: 100 }}
              transition={{ 
                duration: 0.5,
                rotate: {
                  duration: 0.5,
                  repeat: 3
                }
              }}
              className="relative w-[90%] max-w-[400px] bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
              >
                <FaTimes size={20} />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Animated Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <FaRocket className="text-3xl text-white" />
                </motion.div>

                {/* Text Content */}
                <div className="text-center mb-6">
                  <motion.h3
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl font-bold text-gray-900 mb-3"
                  >
                    Ready to Innovate Together?
                  </motion.h3>
                  <p className="text-gray-600 text-lg">
                    Let's create something amazing! I'm available for new opportunities.
                  </p>
                </div>

                {/* Hire Me Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleHireClick}
                  className="w-full py-4 px-6 bg-blue-500 text-white rounded-lg font-medium
                            flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors
                            text-lg shadow-lg"
                >
                  <FaBriefcase />
                  Hire Me Now
                </motion.button>

                {/* Contact Info */}
                <div className="mt-6 text-center text-gray-500 flex items-center justify-center gap-2">
                  <FaEnvelope />
                  <span>ajaysurada21@gmail.com</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireMePopup;
