"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AlumniCard = ({ alumnus, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group max-w-xs mx-auto cursor-pointer transform transition-all duration-500 hover:scale-105"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {/* Card Structure */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
        {/* Image */}
        <div className="relative h-36 w-full">
          <Image
            src={`/${alumnus.image}`} // Ensure images are correctly linked (e.g., "/images/filename.jpg")
            alt={alumnus.name}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold text-gray-800">{alumnus.name}</h2>
          <p className="text-md font-bold text-green-500">
            ₹{alumnus.salary} Annual CTC
          </p>
        </div>

        {/* Hover Overlay Full Description */}
        {hovered && (
          <div
            className="absolute top-0 left-0 w-full h-auto bg-white bg-opacity-95 p-4 z-10 flex flex-col justify-start items-center shadow-2xl overflow-hidden"
            style={{
              maxHeight: "250px",  // Set a maximum height for the overlay
              overflowY: "auto",    // Enable vertical scrolling
              scrollbarWidth: "thin", // For Firefox, make scrollbar thinner
              WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar for webkit browsers
              },
            }}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {alumnus.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{alumnus.description}</p>
            <p className="text-md font-bold text-green-500">
              ₹{alumnus.salary} LPA Annual CTC
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AlumniCard;
