"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    coverImage: null
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Simulate a network request
    setTimeout(() => {
      // Handle form submission here
      // For example, you might upload the data to a server or save it to a database
      console.log('Form data:', formData);
      setSuccess(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        <div className="text-center lg:text-left mb-6">
          <h1 className="text-3xl font-bold">Admin Page</h1>
          <p className="text-balance text-muted-foreground mt-2">
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
                value={formData.courseName}
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
                value={formData.description}
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
                required
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
    </div>
  );
};

export default AdminPage;