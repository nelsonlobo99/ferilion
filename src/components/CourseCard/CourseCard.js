"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  const [showMore, setShowMore] = useState(false);
  const [rating, setRating] = useState(course.rating || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log(`Updated rating for course ${course.id} to ${newRating}`);
  };

  return (
    <div className="m-4 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <Card className="max-w-md shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col h-full">
        
        <div className="relative h-64 w-full bg-gray-200">
          <Image
            src={`/${course.icon}`}
            alt={course.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
          <p
            className={`text-muted-foreground text-base leading-6 ${
              showMore ? '' : 'line-clamp-3'
            }`}
          >
            {course.description}
          </p>
        </CardContent>

        <CardFooter className="bg-gray-100 p-6">
          <div className="w-full">
            <Link href={`/courses/${course.id}`} passHref>
              <Button className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CourseCard;
