import { motion } from "framer-motion";

const certifications = [
  {
    name: "Google Data Analytics Certificate",
    image: "/certificates/image.png",
  },
  {
    name: "Azure Data Engineer Associate",
    image: "/certificates/microsoftazure.png",
  },
  {
    name: "AWS Machine Learning",
    image: "/certificates/ml.png",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Fixing PNG size using max-width & aspect ratio */}
              <div className="w-40 h-40 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
