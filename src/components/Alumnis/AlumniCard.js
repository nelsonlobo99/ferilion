"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const AlumniCard = ({ alumnus, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the element enters view
    threshold: 0.1, // Trigger the animation when 10% of the element is in view
  });

  // Define xOffset based on index
  const xOffset = index % 2 === 0 ? -50 : 50; // Reduced xOffset for smoother effect

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : xOffset }}
      transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }} // Increased duration and eased transition
      className={`relative flex items-center max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-b from-white via-gray-100 to-gray-200`}
    >
      <div className={`w-2/5 relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <Image
          src={`/${alumnus.image}`} // Ensure images are in the public directory or adjust path
          alt={alumnus.name}
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl transform transition-transform duration-500 hover:scale-110 grayscale hover:grayscale-0"
        />
      </div>
      <div className={`w-3/5 p-10 text-center z-10 flex flex-col justify-center items-center bg-white bg-opacity-90 rounded-r-xl backdrop-blur-sm ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          {alumnus.name}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {alumnus.description}
        </p>
        <p className="text-3xl font-bold text-green-500">
          ₹{alumnus.salary} Annual CTC
        </p>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
