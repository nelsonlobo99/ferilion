"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phno: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSuccess(true);
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phno: '',
        message: ''
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="w-full max-w-5xl mx-auto lg:grid lg:grid-cols-2 xl:min-h-[700px]">
      {/* Form Section */}
      <div className="flex flex-col lg:items-center lg:py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto w-full max-w-lg mt-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-balance text-muted-foreground mt-6">
              Any Questions or remarks? Write us a message!
            </p>
          </div>
          <form onSubmit={handleSubmit} className='justify-center'>
            <div className="grid gap-4 mt-6">
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex-1">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    id="fname"
                    type="text"
                    placeholder="Eg: John"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    id="lname"
                    type="text"
                    placeholder="Eg: Doe"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="phno" className="text-lg">Phone No</Label>
                  <Input
                    id="phno"
                    type="number"
                    value={formData.phno}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-6">
              <Button className="mt-6" type="submit"disabled={loading} >
                {loading ? 'Sending...' : 'Submit'}
              </Button>
              </div>
              {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col lg:items-center lg:py-6 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="w-full max-w-lg mt-6">
          <h1 className="text-3xl font-bold">Contact Information</h1>
          <div className="space-y-6">
            <div className="text-left mt-6">
              <h2 className="text-lg">Address:</h2>
              <p className="text-balance text-muted-foreground">
                282, 8th Main Rd, BEML Layout 6th Stage, BEML Layout, Brookefield, Bengaluru, Karnataka 560066
              </p>
            </div>
            <div className="text-left mt-6">
              <h2 className="text-lg">Phone:</h2>
              <p className="text-balance text-muted-foreground">
                +91 6366 548 237
              </p>
            </div>
            <div className="text-left mt-6">
              <h2 className="text-lg">Email:</h2>
              <p className="text-balance text-muted-foreground">
                info@ferilionlabs.com
              </p>
            </div>
            <div className="text-left mt-6">
              <h2 className="text-lg">Map:</h2>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1969709255304!2d77.71525387507621!3d12.959244387354989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1337d1b0fcc7%3A0x214b72c7cd4d7359!2sFerilion%20Labs!5e0!3m2!1sen!2sin!4v1724503825871!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  allowFullScreen 
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
