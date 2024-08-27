import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; // You can use any UI library or custom modal component
import { Button } from '@/components/ui/button';

const CourseRegistrationDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="text-center text-2xl font-bold">Register for This Course</DialogTitle>
      <DialogContent>
        <p className="text-lg mb-4">Please fill out the form below to register for this course.</p>
        <form>
          {/* Add your form fields here */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          {/* Add more fields as necessary */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="bg-gray-300 text-gray-800 hover:bg-gray-400">
          Cancel
        </Button>
        <Button type="submit" className="bg-green-500 text-white hover:bg-green-600">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourseRegistrationDialog;
