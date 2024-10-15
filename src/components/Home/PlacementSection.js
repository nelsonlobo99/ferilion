'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Counter component for faster animation
const Counter = ({ end, duration, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const endVal = parseInt(end, 10);
      const totalDuration = duration;
      const increment = endVal / totalDuration;

      const updateCounter = () => {
        start += increment;
        if (start >= endVal) {
          setCount(endVal);
        } else {
          setCount(Math.round(start));
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    } else {
      // Reset count when not visible
      setCount(0);
    }
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

// Circular progress component for percentage indicators
const CircularProgress = ({ percentage, duration, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const endVal = percentage;
      const totalDuration = duration;
      const increment = endVal / totalDuration;

      const updateProgress = () => {
        start += increment;
        if (start >= endVal) {
          setProgress(endVal);
        } else {
          setProgress(start);
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    } else {
      // Reset progress when not visible
      setProgress(0);
    }
  }, [percentage, duration, isVisible]);

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#e5e7eb" // gray-200 background
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#10b981" // green-500 for progress
          strokeWidth="8"
          fill="transparent"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * progress) / 100}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <span className="absolute text-lg font-bold text-white">{Math.round(progress)}%</span>
    </div>
  );
};

// Define motion variants for animations
const titleVariants = {
  hidden: { opacity: 0, y: -90 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PlacementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="placement" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Animated Titles */}
        <motion.h2
          className="text-3xl font-bold text-white mb-4 text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          We are proud of...
        </motion.h2>
        <motion.h2
          className="text-4xl font-bold text-white mb-4 text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Our Placement Record
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: 3125865, description: 'Learners' },
            { stat: 194, description: 'Mentors' },
            { stat: 37461349, description: 'Lines of Code Submission' },
            { stat: 1673, description: 'Videos' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg bg-black"
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              <h3 className="text-4xl font-bold text-red-500 mb-2 animate-pulse">
                <Counter end={item.stat} duration={300} isVisible={isVisible} />
              </h3>
              <p className="text-xl text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <section id="placement" className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: 95, description: 'Placement Rate', suffix: '%' },
                { stat: 500, description: 'Partner Companies', suffix: '+' },
                { stat: 8, description: 'Average Starting Salary', suffix: ' LPA' },
                { stat: 200, description: 'Top Companies Hiring', suffix: '+' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-lg shadow-lg bg-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  <h3 className="text-4xl font-bold text-red-600 mb-2 animate-pulse">
                    <Counter end={item.stat} duration={300} isVisible={isVisible} />{item.suffix}
                  </h3>
                  <p className="text-xl text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { percentage: 72, description: 'of Learners complete their courses within 3 months' },
            { percentage: 78, description: 'of Learners could recollect the concepts faster' },
            { percentage: 84, description: 'of Learners have better understanding over complex topics' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg flex flex-col items-center bg-black"
              variants={itemVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              <CircularProgress percentage={item.percentage} duration={200} isVisible={isVisible} />
              <p className="text-xl text-gray-300 mt-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
