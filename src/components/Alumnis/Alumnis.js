"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AlumniCard from "./AlumniCard"; // Adjust the import path as necessary
import alumniData from "@/app/alumnis/alumnis.json"; // Adjust the path as necessary


const Alumnis = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    // Simulating data fetch; replace this with actual fetch if needed
    setAlumni(alumniData.alumnis);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Page Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }} // Adjusted for smoother effect
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-4">Our Alumni</h2>
        <p className="text-muted-foreground">
          Meet the exceptional individuals who have been a part of our community. These alumni have gone on to achieve remarkable things in their respective fields, and we are proud to highlight their accomplishments and contributions.
        </p>
      </motion.section>

      {/* Alumni Cards */}
      <div className="flex flex-col gap-16">
        {alumni.map((alumnus, index) => (
          <AlumniCard key={alumnus.id} alumnus={alumnus} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Alumnis;
