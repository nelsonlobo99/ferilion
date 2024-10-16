"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import alumniData from "@/app/alumnis/alumnis.json"; 
import Link from "next/link";

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-black text-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          | Testimonials
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our students&apos; success is our top priority
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {alumniData.alumnis.slice(0, 4).map((alumni, index) => (
            <motion.div
              key={index}
              className="bg-black p-4 rounded-lg"
              variants={staggerChild}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <p className="mb-4 text-lg italic">
                &quot;{alumni.description}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={`/${alumni.image}`} // Ensure the path is correct
                  alt={alumni.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{alumni.name}</h3>
                  <p className="text-gray-400">{alumni.salary}</p>{" "}
                  {/* Display salary instead of position */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-right">
          <Link href="/alumnis">
            <motion.button
              className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-xl shadow-lg font-bold"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              All testimonials
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
