"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import CourseRegistrationDialog from "@/app/courses/registration-form/page";

const CourseDetailsPage = ({ params }) => {
  const { courseId } = params;
  const [course, setCourse] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Fetch course data based on ID
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`/api/course/get-course/${courseId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCourse(data.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (!course) {
    return <p className="text-center text-xl mt-4">Loading course details...</p>;
  }

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* Course Title and Description */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{course.courseName}</h1>
            <p className="text-base text-gray-700">{course.description}</p>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">What You ll Learn</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.learningPoints?.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{point}</span>
                </li>
              )) || (
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Understand the basics of software development.</span>
                </li>
              )}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.requirements?.map((requirement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{requirement}</span>
                </li>
              )) || (
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Basic understanding of programming.</span>
                </li>
              )}
            </ul>
          </div>

          {/* Course Content Dropdown */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-yellow-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer" onClick={toggleContentVisibility}>
              <span className="flex justify-between items-center">Course Content
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
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <h3 className="text-lg font-semibold text-gray-700">Module 1: Introduction</h3>
                    <p className="text-gray-600 text-sm">Overview of the course and basics of the subject.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Card className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500">
            <div className="relative w-full h-48 md:h-80 bg-gray-200">
              <Image
                src={`/${course.icon}`}
                alt={course.courseName}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg py-6"
              />
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Button onClick={handleOpenDialog} className="w-full bg-blue-500 text-white hover:bg-blue-600">
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
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Includes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{course.duration || "10"} Hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{course.numberOfVideos || "20"} Videos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Certification upon completion</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose This Course?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry experts with years of experience and deep knowledge in the field.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Our curriculum is designed to cover all the essential skills and knowledge you need to excel.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace with our flexible learning options, available online or in-person.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          This course has completely transformed my career. The instructors were fantastic, and the curriculum was spot on!
        </p>
        <Button className="px-8 py-3 bg-purple-600 text-white hover:bg-purple-700">
          Join Now
        </Button>
      </div>

      <CourseRegistrationDialog open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default CourseDetailsPage;
