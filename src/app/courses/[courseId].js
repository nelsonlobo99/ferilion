import React from 'react';
import { useRouter } from 'next/router';
import courseList from '../../app/courses/courses.json'; 
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {Image} from '@/components/ui'

const CourseDetailsPage = () => {
  const router = useRouter();
  const { courseId } = router.query;

  if (!courseId) {
    return <p>Loading...</p>;
  }

  const course = courseList.courses.find(c => c.id === parseInt(courseId, 10));

  if (!course) {
    return <p className="text-center text-xl mt-4">Course not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <Card className="max-w-4xl shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col bg-white border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-6 px-8 text-center rounded-t-lg">
            <h1 className="text-4xl font-extrabold">{course.name}</h1>
          </CardHeader>

          <div className="relative h-80 w-full bg-gray-200">
            <Image
              src={`/${course.icon}`} 
              alt={course.name}
              className="object-cover h-full w-full border-t border-gray-300 rounded-t-lg"
            />
          </div>

          <CardContent className="p-8">
            <p className="text-lg leading-7 mb-6 text-gray-700">{course.description}</p>
            <div className="flex flex-col space-y-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Register for Demo
              </Button>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Send Enquiry
              </Button>
              {course.syllabus && (
                <a href={course.syllabus} download className="text-blue-600 hover:underline">
                  Download Syllabus
                </a>
              )}
              {course.brochure && (
                <a href={course.brochure} download className="text-blue-600 hover:underline">
                  Download Brochure
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
