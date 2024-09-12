"use client";
import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import Modal from './Model'; // Import the Modal component
import { Button, colors, Tooltip, Typography } from '@mui/material';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ArrowLeft, ArrowRight, PlusCircle } from 'lucide-react';

const CoursesPage = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3); // Number of courses per page

  // Fetch courses with pagination
  const fetchCourses = async () => {
    try {
      const response = await fetch(`/api/course/get-courses?page=${currentPage}&size=${pageSize}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result)
      setCourses(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching courses');
    }
  };

  useEffect(() => {
    fetchCourses(); // Fetch courses on component mount and page change
  }, [currentPage]);

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
      const response = await fetch(editingCourse ? '/api/course/edit' : '/api/course/add', {
        method: editingCourse ? 'PUT' : 'POST',
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
      setIsModalOpen(false); // Close the modal after submission
      setEditingCourse(null); // Reset editing state
    }
  };

  const handleEdit = (course, title) => {
    setEditingCourse(course, "Edit");
    setData({
      courseName: course.courseName,
      description: course.description,
      coverImage: null, // Reset coverImage or handle it separately
      title: "Edit"
    });
    setIsModalOpen(true); // Open the modal when editing
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

  // Pagination handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
  <div className="flex justify-between items-center mb-4">
    <Typography variant="h2" className="text-2xl font-bold text-white">
      Course List
    </Typography>
    <Tooltip title="Add Course" placement="right">
    <PlusCircle className=' w-8 h-8 rounded-lg text-white hover:bg-black transition-colors duration-300 cursor-pointer'
      onClick={() => {
        setEditingCourse(null); // Reset editing state for adding a new course
        setData({ courseName: '', description: '', coverImage: null }); // Reset form data
        setIsModalOpen(true); // Open the modal for adding a new course
      }}
      
    >
    
    </PlusCircle>
    </Tooltip>
  </div>
  
  <CourseList
    courses={courses}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

  <div className="flex justify-between mt-4">
    <ArrowLeft 
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="w-8 h-8 text-white"
    >
      Previous
    </ArrowLeft>
    <span className='text-white'>Page {currentPage}</span>
    <ArrowRight
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={courses.length < pageSize}
      className="w-8 h-8 text-white"
    >
      Next
    </ArrowRight>
  </div>

  <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <CourseForm
      onSubmit={handleSubmit}
      data={data}
      onChange={handleChange}
      loading={loading}
      success={success}
      error={error}
    />
  </Modal>
</div>
  );
};

export default CoursesPage;
