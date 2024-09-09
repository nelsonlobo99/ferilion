'use client';

import React, { useRef, useEffect } from 'react';
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

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const courses = [
    {
      title: 'Full Stack Web Development',
      duration: '12-week intensive program',
      description: 'Master both front-end and back-end technologies, including React, Node.js, and MongoDB.',
      image: '/AWS.png',
    },
    {
      title: 'Data Science & Machine Learning',
      duration: '16-week comprehensive course',
      description: 'Dive into data analysis, statistical modeling, and machine learning algorithms using Python.',
      image: '/PythonFullstackDevelopment.jpg',
    },
    {
      title: 'Data Science & Machine Learning',
      duration: '16-week comprehensive course',
      description: 'Dive into data analysis, statistical modeling, and machine learning algorithms using Python.',
      image: '/PythonFullstackDevelopment.jpg',
    },{
      title: 'Data Science & Machine Learning',
      duration: '16-week comprehensive course',
      description: 'Dive into data analysis, statistical modeling, and machine learning algorithms using Python.',
      image: '/PythonFullstackDevelopment.jpg',
    },{
      title: 'Data Science & Machine Learning',
      duration: '16-week comprehensive course',
      description: 'Dive into data analysis, statistical modeling, and machine learning algorithms using Python.',
      image: '/PythonFullstackDevelopment.jpg',
    },
  ];

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
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300} // Adjusted width
                      height={200} // Adjusted height
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-lg h-12 mb-4 font-semibold text-gray-800">
                        {course.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </CardHeader>
                    <CardContent>
                      {/* <p className="text-gray-600 mb-4">{course.description}</p> */}
                      <Button className="bg-red-600 text-white hover:bg-red-700 transition duration-300">
                        Course Details
                      </Button>
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
