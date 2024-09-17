import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white rounded-lg shadow-md p-6 max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col items-center" variants={childVariants}>
          <motion.div
            className="w-12 h-1 bg-blue-600 rounded-full mb-4"
            variants={childVariants}
          ></motion.div>
          <motion.h2
            className="text-2xl font-extrabold text-gray-900 mb-2"
            variants={childVariants}
          >
            About Us
          </motion.h2>
          <motion.p className="text-gray-500 text-center" variants={textVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi, provident sit omnis aliquam cumque et
            sunt ex vel, sed blanditiis veritatis, rerum quo iusto. Minima, illum animi?
            Deleniti, saepe ab.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
