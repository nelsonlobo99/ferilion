"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AlumniCard from "./AlumniCard"; // Adjust the import path as necessary
import alumniData from "@/app/alumnis/alumnis.json"; // Adjust the path as necessary

const Alumnis = () => {
  const [alumni, setAlumni] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [alumniPerPage] = useState(30); // Now showing 30 alumni per page

  useEffect(() => {
    // Simulating data fetch; replace this with actual fetch if needed
    setAlumni(alumniData.alumnis);
  }, []);

  // Pagination Logic
  const indexOfLastAlumnus = currentPage * alumniPerPage;
  const indexOfFirstAlumnus = indexOfLastAlumnus - alumniPerPage;
  const currentAlumni = alumni.slice(indexOfFirstAlumnus, indexOfLastAlumnus);

  const totalPages = Math.ceil(alumni.length / alumniPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-4">Our Alumni</h2>
        <p className="text-muted-foreground">
        Meet the exceptional individuals who have been a part of our community. These alumni have gone on to achieve remarkable things in their respective fields, and we are proud to highlight their success stories and contributions.
        </p>
      </motion.section>

      {/* Alumni Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-8">
        {currentAlumni.map((alumnus, index) => (
          <AlumniCard key={alumnus.id} alumnus={alumnus} index={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-xl">{currentPage} of {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Alumnis;
