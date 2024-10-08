
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import CourseRegistrationDialog from "@/app/courses/registration-form/page";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CourseDetailsPage = ({ params }) => {
    const { courseId } = params;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/course/get-course/${courseId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setCourse(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching courses');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [courseId]);

  if (!course) {
    return <p className="text-center text-xl mt-4">Course not found</p>;
  }

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [learnRef, learnInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [reqRef, reqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if(loading) return (
    <div className="h-fit flex justify-center items-center">
        <p className="text-xl font-bold">Loading...</p>
    </div>
  )

  if(error){
    return (
        <div className="h-fit flex justify-center items-center">
            <p className="text-xl font-bold text-red-700">Something went wrong.</p>
        </div>
    )
  }

  const coverImage = course.coverImage

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* Course Title and Description */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: titleInView ? 1 : 0, scale: titleInView ? 1 : 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg shadow-md"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{course.name}</h1>
            <p className="text-base text-gray-700">{course.description}</p>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            ref={learnRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: learnInView ? 1 : 0, y: learnInView ? 0 : 30 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-400"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">What You’ll Learn</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.learningPoints?.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{point}</span>
                </li>
              )) || (
                <>
                  {/* Default points */}
                </>
              )}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            ref={reqRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: reqInView ? 1 : 0, x: reqInView ? 0 : -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-400"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Pre-quisites</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.requirements?.map((requirement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{requirement}</span>
                </li>
              )) || (
                <>
                  {/* Default requirements */}
                </>
              )}
            </ul>
          </motion.div>

          {/* Course Content Dropdown */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: contentInView ? 1 : 0, scale: contentInView ? 1 : 0.95 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            className="bg-white p-4 rounded-lg shadow-md border-t-4 border-yellow-400"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer" onClick={toggleContentVisibility}>
              <span className="flex justify-between items-center">What future hold?
              <svg className={`inline-block w-5 h-5 ml-2 transition-transform ${isContentVisible ? "rotate-180" : ""}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
              </span>
            </h2>

            {isContentVisible && (
              <div className="space-y-3">
                {course.modules?.map((module, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <h3 className="text-lg font-semibold text-gray-700">{module.title}</h3>
                    <p className="text-gray-600 text-sm">{module.description}</p>
                  </div>
                )) || (
                  <>
                    {/* Default modules */}
                  </>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: cardInView ? 1 : 0, scale: cardInView ? 1 : 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Card className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500">
            <div className="relative w-full h-48 md:h-80 bg-gray-200">
              <Image
                loader={() => coverImage}
                src={course.coverImage}
                alt={course.name}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg py-6"
              />
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Button onClick={handleOpenDialog} className="w-full bg-red-600 text-white hover:bg-red-700">
                  Enroll Now
                </Button>
                <div className="space-y-4"> 
                    <Link href="/contact" className="block">
                        <Button className="w-full bg-gray-300 text-gray-800 hover:bg-gray-400">
                            Contact Us
                        </Button>
                    </Link>
                </div>
                <Button className="w-full bg-gray-300 text-gray-800 hover:bg-gray-400">
                  View Syllabus
                </Button>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{course.duration || "20 hours"} Duration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{course.videos || "30"} Videos</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose This Course?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry experts with years of experience and deep knowledge in the field.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-4">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Our curriculum is designed to cover all the essential skills and knowledge you need to excel.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-4">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace with our flexible learning options, available online or in-person.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          This course has completely transformed my career. The instructors were fantastic, and the curriculum was spot on!
        </p>
        <Button className="px-8 py-3 bg-purple-600 text-white hover:bg-purple-700" onClick={handleOpenDialog}>
          Join Now
        </Button>
      </motion.div>

      {/* Course Registration Dialog */}
      {dialogOpen && <CourseRegistrationDialog isOpen={dialogOpen} onClose={handleCloseDialog} />}
    </div>
    </div>
  );
};

export default CourseDetailsPage;
