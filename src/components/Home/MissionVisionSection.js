"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1.5, ease: "easeInOut" },
    }),
  };

  return (
    <section className="bg-black text-white p-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative flex flex-col md:flex-row justify-center items-center"
      >
        {/* Top Image */}
        <motion.div
          className="relative  md:w-6/12 w-full lg:w-2/6 px-8"
          variants={imageVariants}
        >
          <Image
            src="/our-mission.jpg"
            alt="Mission Vision Image"
            className="w-full h-auto object-cover rounded border-4 border-white"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="py-12 px-8 w-full md:max-w-8xl md:w-8/12 max-w-4xl text-center md:text-left"
          variants={headingVariants}
        >
          <motion.h1 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </motion.h1>
          <div className="space-y-6 md:space-y-8 text-lg py-4">
            {[
              { label: "Expert faculty with real-world experience", width: 85 },
              { label: "Comprehensive support for students", width: 90 },
              { label: "Interactive learning approach", width: 75 },
              { label: "Proven track record of success", width: 95 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start flex-col"
                variants={textVariants}
              >
                <span>{item.label}</span>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-600"
                    custom={item.width}
                    variants={progressVariants}
                    style={{ width: `${item.width}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Vision and Mission Statements */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          className="text-center md:text-left"
          variants={headingVariants}
        >
          <motion.h2 className="text-3xl font-bold mb-4">Our Vision</motion.h2>
          <motion.p className="text-gray-400 mb-4" variants={textVariants}>
            Our vision is to be the leading provider of special education camps
            for programming, empowering students to achieve their full
            potential.
          </motion.p>
          <Link href="/aboutus">
            <motion.button
              className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-xl shadow-lg font-bold"
              variants={textVariants}
            >
              Learn more
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          variants={containerVariants}
        >
          {[
            {
              src: "/line-chart.png",
              alt: "Line Chart",
              text: "Empower students with skills for success in the digital economy.",
            },
            {
              src: "/pie-chart.png",
              alt: "Pie Chart",
              text: "Deliver the best learning experience for success in the digital world.",
            },
            {
              src: "/flag.png",
              alt: "Flag",
              text: "Foster innovation and creativity by encouraging students to think creatively.",
            },
            {
              src: "/monitor.png",
              alt: "Monitor",
              text: "Be a catalyst for positive change, transforming the world one student at a time.",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={textVariants}>
              <div className="flex justify-center items-center">
                <motion.div
                  className="bg-gray-400 p-4 rounded-sm mb-2 w-16 flex justify-center items-center"
                  variants={imageVariants}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionVisionSection;
