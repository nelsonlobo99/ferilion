import CourseCard from '@/components/CourseCard/CourseCard'
import React from 'react'
import coursList from './courses'

const Courses = () => {
  return (
    <div className="flex justify-center">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 my-8">
            {
                coursList.courses.map(course => <CourseCard key={course.id} course={course}/>)
            }
        </div>
    </div>
  )
}

export default Courses