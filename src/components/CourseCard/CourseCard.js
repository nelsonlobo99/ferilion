"use client";
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const CourseCard = ({ course }) => {
  const src = course.coverImage;

  const [showMore, setShowMore] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="m-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      // Remove whileTap for smoother interaction
    >
      <Card className="max-w-md shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col h-full bg-white">
        <motion.div
          className="relative h-64 w-full bg-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Consider using Framer Motion image component if needed */}
            <Image
              loader={() => src}
              layout='fill'
              src={course.coverImage}
              alt={course.name}
              objectFit="contain"
              className='w-full border-none	h-auto p-4 text-center'
              // Removed hover transform for consistency with Framer Motion
            />

        </motion.div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold mb-4"
          >
            {course.courseName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-muted-foreground text-base leading-6 ${
              showMore ? '' : 'line-clamp-3'
            }`}
          >
            {course.description}
          </motion.p>
        </CardContent>

        <CardFooter className="bg-gray-100 p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Debounce Link for smoother navigation */}
            {/* <Link href={`/courses/${course.id}`} passHref>
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Learn More
              </Button>
            </Link> */}
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
