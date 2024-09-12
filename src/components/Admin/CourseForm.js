"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CourseForm = ({ onSubmit, data, onChange, loading, success, error }) => (
  <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 mb-6">
        <div className="mb-4">
          <Label htmlFor="courseName" className="text-sm font-semibold mb-1 block">Course Name</Label>
          <Input
            id="courseName"
            type="text"
            placeholder="Enter course name"
            value={data.courseName}
            onChange={onChange}
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
            onChange={onChange}
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="coverImage" className="text-sm font-semibold mb-1 block">Course Cover Image</Label>
          <Input
            id="coverImage"
            type="file"
            onChange={onChange}
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
);

export default CourseForm;
