import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://twitter.com/yourusername'
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:your.email@example.com'
    }
  ];

  return (
    <div className="fixed left-8 bottom-0 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, color: '#64ffda' }}
            className="text-2xl text-gray-400 hover:text-primary transition-colors"
          >
            {link.icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-24 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default SocialLinks;