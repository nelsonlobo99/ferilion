// AdminPage.js
"use client";

import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import { Button } from '@mui/material';

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
  const [view, setView] = useState('form'); // 'form' or 'list'

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
        formData.append("courseId", courseId);
        const response = await fetch(`/api/course/delete-course`, {
          method: 'DELETE',
          body: formData
        });

        if (response.status === 200) {
          setSuccess(true);
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
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <Button
            onClick={() => setView('form')}
            className={`flex-1 ${view === 'form' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Add Course
          </Button>
          <Button
            onClick={() => setView('list')}
            className={`flex-1 ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            View Courses
          </Button>
        </div>
        {view === 'form' && (
          <CourseForm
            onSubmit={handleSubmit}
            data={data}
            onChange={handleChange}
            loading={loading}
            success={success}
            error={error}
          />
        )}
        {view === 'list' && (
          <CourseList
            courses={courses}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
