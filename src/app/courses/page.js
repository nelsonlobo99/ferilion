import CourseCard from '@/components/CourseCard/CourseCard';
import React from 'react';
import courseList from './courses.json';

const Courses = () => {
  return (
    <div className="justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24">
      <section className="text-center ">
          <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-muted-foreground">
          Discover our comprehensive range of courses designed to enhance your skills and knowledge across various fields. Whether you are looking to advance your career, explore new subjects, or gain a competitive edge, our courses provide flexible learning opportunities tailored to meet your goals.
          </p>
      </section>
    <div className="flex justify-center">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 my-8">
        {courseList.courses.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
    </div>
  );
}

export default Courses;
