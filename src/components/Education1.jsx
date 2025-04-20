import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      school: "Conestoga College",
      degree: "Post Graduate Degree Certificate",
      field: "Information Technology Project Management",
      period: "Expected Aug 2024",
      location: "Waterloo, ON",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Currently pursuing advanced studies in IT Project Management, focusing on modern project methodologies and technology leadership."
    },
    {
      school: "Vignan's Institute of Information Technology",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      period: "Aug 2020",
      location: "INDIA",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Completed B.Tech in Computer Science with focus on software development and engineering principles."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-[980px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Education
          </h2>
        </motion.div>

        <div className="space-y-32">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className={`relative aspect-[4/3] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 to-transparent rounded-2xl" />
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Content Section */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-xl text-blue-600">
                        {edu.degree}
                      </p>
                      <p className="text-lg text-gray-600">
                        {edu.field}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
