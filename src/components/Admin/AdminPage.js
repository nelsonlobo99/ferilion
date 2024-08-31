"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';


const AdminPage = () => {
  const [data, setData] = useState({
    courseName: '',
    description: '',
    coverImage: null
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);

  // Fetch courses
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
    fetchCourses(); // Fetch courses on component mount
  }, []);

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setData({ ...data, [id]: files[0] });
    } else {
      setData({ ...data, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData();
    formData.append("courseName", data.courseName);
    formData.append("description", data.description);
    formData.append("file", data.coverImage);

    try {
      const response = await fetch('/api/course/add', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit course');
      }

      setSuccess(true);
      await fetchCourses(); // Refresh the list of courses
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setData({
      courseName: course.courseName,
      description: course.description,
      coverImage: null // Reset coverImage or handle it separately
    });
  };

  const handleDelete = async (courseId) => {
    if (confirm('Are you sure you want to delete this course?')) {
      try {

        const formData = new FormData();

        formData.append("courseId", courseId)
        const response = await fetch(`/api/course/delete-course`, {
          method: 'DELETE',
          // headers: {
          //   'Content-Type': 'applicati',
          // },
          body: formData
        });
  
        // Check if the response status is OK
        if (response.status === 200) {
          setSuccess(true);
          // Refresh the list of courses
          await fetchCourses();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to delete course');
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex-1">
          <div className="text-center lg:text-left mb-6">
            <h1 className="text-3xl font-bold">Admin Page</h1>
            <p className="text-gray-500 mt-2">
              Manage your courses by filling out the form below.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-6">
              <div className="mb-4">
                <Label htmlFor="courseName" className="text-sm font-semibold mb-1 block">Course Name</Label>
                <Input
                  id="courseName"
                  type="text"
                  placeholder="Enter course name"
                  value={data.courseName}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="description" className="text-sm font-semibold mb-1 block">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter course description"
                  value={data.description}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="coverImage" className="text-sm font-semibold mb-1 block">Course Cover Image</Label>
                <Input
                  id="coverImage"
                  type="file"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
              {success && <p className="text-green-500 mt-4">Course details submitted successfully!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </form>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex-1">
          <h2 className="text-2xl font-bold mb-4">Courses List</h2>
          <ul className="space-y-4">
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map(course => (
                <li key={course.id} className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold mb-2">{course.courseName}</h3>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(course)} className="p-2 rounded-lg text-blue-500 hover:bg-blue-100">
                        <PencilIcon className="w-6 h-6" />
                      </button>
                      <button onClick={() => handleDelete(course.id)} className="p-2 rounded-lg text-red-500 hover:bg-red-100">
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No courses available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
