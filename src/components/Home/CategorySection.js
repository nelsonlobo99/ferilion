'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const CategoriesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation each time it comes into view
    threshold: 0.1 // Trigger animation when 10% of the element is visible
  });

  // Number icon animation variants
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden mt-[-12rem] z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl font-bold mb-6 text-center text-white"
            variants={{
              hidden: { opacity: 0, y: -90 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Explore Now
          </motion.h1>
          <motion.h1
            className="text-2xl font-semibold text-white mb-2 text-center"
            variants={{
              hidden: { opacity: 0, y: -90 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            We empower tech careers with education, training, and placements.
          </motion.h1>
        </div>

        <div className="flex justify-center space-x-12">
          {/* Category Card 1: Register */}
          <div className="p-6 rounded-lg shadow-lg w-52 bg-lime-200">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-4 rounded-full font-black text-2xl w-16 text-center">1</div>
            </div>
            <h3 className="text-xl font-semibold text-center">Register</h3>
          </div>

          {/* Category Card 2: Learn */}
          <div className="p-6 rounded-lg shadow-lg w-52 bg-red-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-4 rounded-full font-black text-2xl w-16 text-center">2</div>
            </div>
            <h3 className="text-xl font-semibold text-center">Learn</h3>
          </div>

          {/* Category Card 3: Get Placed */}
          <div className="p-6 rounded-lg shadow-lg w-52 bg-lime-200">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-4 rounded-full font-black text-2xl w-16 text-center">3</div>
            </div>
            <h3 className="text-xl font-semibold text-center">Get Placed</h3>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/courses">
             <Button className="bg-black text-white hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-full shadow-lg">
                 Explore All
             </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CategoriesSection;
