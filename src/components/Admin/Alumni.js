"use client";
import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Badge } from 'lucide-react';

const Alumni = ({ courses, onEdit, onDelete }) => (
  <div className="bg-white sm:p-6 lg:pl-8 rounded-lg shadow-lg">
    {Array.isArray(courses) && courses.length > 0 ? (
      <Table>
        <TableHead>
          <TableRow className='bg-red-950 text-white '>
            <TableCell className='text-white'>Cover Image</TableCell>
            <TableCell className='text-white'>Course Name</TableCell>
            <TableCell className='text-white'>Course Description</TableCell>
            <TableCell className='text-white'>Status</TableCell>
            <TableCell className='text-white'>Date</TableCell>
            <TableCell className="text-right text-white">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(course => (
            <TableRow key={course.id}>
              <TableCell>
                {course.coverImage ? (
                  <img
                    src={course.coverImage}
                    alt={course.courseName}
                    className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-lg border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </TableCell>
              <TableCell>{course.courseName}</TableCell>
              <TableCell>
                <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                {course.description || 'No description'}
                </div>
              </TableCell>
              <TableCell>
                <Badge>{course.status}</Badge>
              </TableCell>
              <TableCell>{course.date}</TableCell>
              <TableCell className="text-right">
                <button onClick={() => onEdit(course)} className="p-2 rounded-lg text-blue-500 hover:bg-blue-100">
                  <PencilIcon className="w-6 h-6" />
                </button>
                <button onClick={() => onDelete(course.id)} className="p-2 rounded-lg text-red-500 hover:bg-red-100">
                  <TrashIcon className="w-6 h-6" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <p className="text-gray-500">No courses available</p>
    )}
  </div>
);

export default Alumni;
