'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Procedure = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const commonFadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const commonSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={sectionRef} className="container mx-auto py-12 px-4">
      <motion.h2
        className="text-xl font-semibold text-red-500 mb-2"
        variants={commonFadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.9 }}
      >
        | Why choose us
      </motion.h2>
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={commonFadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.9 }}
      >
        Where learning meets innovation
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="relative"
          variants={commonSlide}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/History-Img.jpeg"
            alt="Students working on a project"
            width={800}
            height={450}
            className="rounded-lg"
          />
          <motion.div
            className="absolute bottom-4 left-4 bg-white p-4 shadow-lg rounded-lg flex space-x-8 w-full justify-around"
            variants={zoomIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold">15</h3>
              <p>Years of experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">375</h3>
              <p>Expert team</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">20</h3>
              <p>Global awards</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {[
            { title: '1/ Programming Courses', description: 'Our programming courses are designed to help students develop the skills they need to succeed in today’s digital economy.' },
            { title: '2/ Placements after Course', description: 'We help our students secure placements in top companies after they complete our courses, ensuring their success.' },
            { title: '3/ Good Support for Students', description: 'We provide comprehensive support to our students, including mentorship, career counseling, and more.' },
            { title: '4/ Interactive Learning', description: 'Our interactive learning approach ensures that our students are engaged and motivated to learn, leading to better outcomes.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black text-white p-4 rounded-lg"
              variants={staggerChild}
              transition={{ delay: 0.9 + index * 0.2 }}
            >
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Procedure;
