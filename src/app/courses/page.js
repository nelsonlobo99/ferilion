'use client';

import CourseCard from '@/components/CourseCard/CourseCard';
import React, { useState, useEffect } from 'react';

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24">
      <section className="text-center ">
          <h2 className="text-4xl font-bold mb-4 animate-fadeInBottom">Our Courses</h2>
          <p className="text-muted-foreground animate-fadeInBottom">
          Discover our comprehensive range of courses designed to enhance your skills and knowledge across various fields. Whether you are looking to advance your career, explore new subjects, or gain a competitive edge, our courses provide flexible learning opportunities tailored to meet your goals.
          </p>
      </section>
    <div className="flex justify-center">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 my-8">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
    </div>
  );
}

export default Courses;
