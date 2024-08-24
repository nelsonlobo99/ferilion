import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    // CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components//ui/card"

  import { Button } from '@/components/ui/button'

const CourseCard = ({course}) => {
  return (
    <div className="hover:scale-105">
        <Card
          className="max-w-xs" x-chunk="charts-01-chunk-7"
        >
          <CardHeader className="space-y-0 pb-0">
            <div className="flex justify-center w-full h-48">
                <img src={course.icon} className="h-48"/>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="py-4 text-xl font-bold h-24">{course.name}</h3>
            <p className="text-ellipsis h-48 overflow-hidden">{course.description}</p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-auto justify-center items-center w-auto">
              <div className="flex-auto">
              <Button className="mt-4 min-w-full">Learn More</Button>
              </div>
            </div>

          </CardFooter>
        </Card>
    </div>
  )
}

export default CourseCard