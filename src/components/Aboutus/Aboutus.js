"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref: procedureRef, inView: procedureInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const { ref: step1Ref, inView: step1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: step2Ref, inView: step2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: step3Ref, inView: step3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: step4Ref, inView: step4InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: step5Ref, inView: step5InView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container mx-auto px-4">
      {/* Page Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Ferilion Labs, we bridge the skill gap in the IT world with innovative training programs designed to emulate real-world experiences. Our history of success and commitment to excellence define who we are today.
        </motion.p>
      </motion.section>

      {/* History Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-800 mb-4"
          >
            Our History
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            Ferilion Labs was earlier a part of a very successful training company, ‘VN2 Solutions’. We branched out to pursue our goal of providing training in high-demand programs in a simulated corporate environment. Having placed over 700 candidates in illustrious companies through VN2, we took a leaf from the old book in helping bridge the skill gap that is prevalent in the IT world.
          </motion.p>
          <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors duration-300">
            Know more
          </Button>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src='/History-Img.jpeg'
            alt="Our History"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Feature
            title="1:1 Expert Training"
            description="The training mode is one-on-one because we believe 3’s always a crowd."
            image="/One-on-One.jpg"
          />
        </motion.div>
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Feature
            title="In-person Classes"
            description="Why sweat alone when you can excel in company."
            image="/Classroom.jpeg"
          />
        </motion.div>
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Feature
            title="Industry-Relevant Curriculum"
            description="The curriculum is designed to cater to the dynamic corporate needs."
            image="/Curriculum.jpeg"
          />
        </motion.div>
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Feature
            title="Contemporary Projects"
            description="Real-time projects for enhanced industrial experience."
            image="/Projects.jpeg"
          />
        </motion.div>
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Feature
            title="Committed Recruitment Team"
            description="Dedicated recruitment team for on-demand placement guidance."
            image="/Recruitment.jpeg"
          />
        </motion.div>
        <motion.div
          className="animate-fadeInBottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Feature
            title="Pay-After Placement"
            description="Upskill first. Pay Later"
            image="/PayLater.jpeg"
          />
        </motion.div>
      </section>

      {/* Procedure Section */}
      <section
        ref={procedureRef}
        className="mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: procedureInView ? 1 : 0, y: procedureInView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800 mb-8 text-center"
        >
          Our Procedure
        </motion.h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-red-300 to-red-500 opacity-30 rounded-full"></div>
          <div className="relative z-10 flex flex-col space-y-8">
            <motion.div
              ref={step1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: step1InView ? 1 : 0, x: step1InView ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              <ProcedureStep step="01" title="Onboarding" description="Hassle-free Registration" />
            </motion.div>
            <motion.div
              ref={step2Ref}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: step2InView ? 1 : 0, x: step2InView ? 0 : 50 }}
              transition={{ duration: 0.6 }}
            >
              <ProcedureStep step="02" title="Core Training Program" description="Phase 1" />
            </motion.div>
            <motion.div
              ref={step3Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: step3InView ? 1 : 0, x: step3InView ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              <ProcedureStep step="03" title="Advanced Training Program" description="Phase 2" />
            </motion.div>
            <motion.div
              ref={step4Ref}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: step4InView ? 1 : 0, x: step4InView ? 0 : 50 }}
              transition={{ duration: 0.6 }}
            >
              <ProcedureStep step="04" title="Placement Assistance" description="Prepping you for success." />
            </motion.div>
            <motion.div
              ref={step5Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: step5InView ? 1 : 0, x: step5InView ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              <ProcedureStep step="05" title="Placement Guidance Program" description="Attractive Packages" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcedureStep = ({ step, title, description }) => (
  <div className="relative bg-white rounded-lg shadow-md p-6">
    <div className="absolute -left-6 -top-6 w-12 h-12 bg-red-500 text-white flex items-center justify-center text-lg font-bold rounded-full">
      {step}
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Feature = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <Image src={image} alt={title} width={100} height={100} className="rounded-full mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutUs;
