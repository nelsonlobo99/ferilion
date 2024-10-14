'use client';

import React, { useRef, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const controls = useAnimation();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);


  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/course/get-courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setCourses(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching courses');
    }
  };

  useEffect(() => {
    fetchCourses();
  },[])


  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );



  const titleVariants = {
    hidden: { opacity: 0, y: -90 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="courses"
      className="py-24 relative bg-black"
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="w-full mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-2 text-center"
          variants={titleVariants}
        >
          | Our Courses
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-white"
          variants={titleVariants}
        >
          Expert programming courses for students
        </motion.h1>

        {/* Carousel Container */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto p-6"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {courses.map((course, index) => (
         
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div variants={cardVariants}>
                  <Card className="min-w-[300px] flex-shrink-0 bg-white shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                  <motion.div
                    className="relative h-64 w-full bg-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Consider using Framer Motion image component if needed */}
                    <Image
                      loader={() => course.coverImage}
                      src={course.coverImage}
                      alt={course.name}
                      layout="fill"
                      objectFit="cover"
                      // Removed hover transform for consistency with Framer Motion
                    />
                  </motion.div>
                    <CardHeader>
                      <CardTitle className="text-lg h-12 mb-4 font-semibold text-gray-800">
                        {course.courseName}
                      </CardTitle>
                      <p className="text-sm text-gray-500">{"12 weeks"}</p>
                    </CardHeader>
                    <CardContent>
                      {/* <p className="text-gray-600 mb-4">{course.description}</p> */}
                      {/* <Link href={`courses/${course.id}`}>
                        <Button className="bg-red-600 text-white hover:bg-red-700 transition duration-300">
                          Course Details
                        </Button>
                      </Link> */}
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default CoursesSection;
