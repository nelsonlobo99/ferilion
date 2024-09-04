'use client';

import React, { useRef, useEffect } from 'react';
import { Code, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const features = [
    {
      icon: Code,
      title: 'Industry-Relevant Curriculum',
      content: 'Our courses are designed in collaboration with industry experts.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      content: 'Learn from seasoned professionals with years of experience.',
    },
    {
      icon: Briefcase,
      title: 'Job Placement Assistance',
      content: 'Our dedicated team helps you land your dream tech job.',
    },
  ];

  return (
    <section id="about" className="pt-32 pb-8">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 md:pl-12"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold mb-12">
              Why Choose Ferilion Labs?
            </h1>
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-7"
                variants={itemVariants}
              >
                <div className="mr-4 mt-1">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <Image
              src="/History-Img.jpeg"
              alt="About TechCareer Institute"
              className="rounded-lg shadow-lg border-4 border-black"
              width={700}
              height={700}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
