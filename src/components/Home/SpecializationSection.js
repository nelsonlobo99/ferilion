'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const SpecializationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const values = [
    {
      title: 'Excellence in Education',
      description:
        'We are committed to providing our students with the highest quality education possible, ensuring that they are well-equipped to succeed in their respective fields.',
    },
    {
      title: 'Innovation and Creativity',
      description:
        'We foster a culture of innovation and creativity among our students, encouraging them to think outside the box and solve problems creatively.',
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-white text-black py-16 px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Text Section */}
        <motion.div className="col-span-2" variants={headingVariants}>
          <div className="mb-4">
            <span className="text-xl font-semibold text-red-500 mb-2">| Specialization</span>
          </div>
          <h1 className="text-4xl font-bold mb-12">Special Education Camp for Programming</h1>
          <h2 className="text-2xl font-semibold mb-4">Our values:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <motion.div key={index} variants={textVariants}>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div className="relative aspect-video" variants={videoVariants}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CxGSnA-RTsA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpecializationSection;
