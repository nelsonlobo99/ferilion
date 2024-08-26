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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground">
          We’re here to help! If you have any questions about our courses, need support, or want to provide feedback, please reach out to us. <br />
          Our team is ready to assist you and ensure you have the best experience possible. You can contact us via email, phone, or by filling out the form below. We look forward to hearing from you!
        </p>
      </section>

      <div className="lg:grid lg:grid-cols-2 gap-8 xl:min-h-[700px]">
        {/* Form Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md lg:flex lg:flex-col lg:justify-between lg:py-12">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Get in Touch</h1>
              <p className="text-muted-foreground mt-4">
                Any questions or remarks? Write us a message!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="fname" className="text-lg">First Name</Label>
                    <Input
                      id="fname"
                      type="text"
                      placeholder="Eg: John"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="lname" className="text-lg">Last Name</Label>
                    <Input
                      id="lname"
                      type="text"
                      placeholder="Eg: Doe"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="phno" className="text-lg">Phone No</Label>
                    <Input
                      id="phno"
                      type="tel"
                      placeholder="Eg: +1234567890"
                      value={formData.phno}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <Button className="mt-6 w-full" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Submit'}
                </Button>
                {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md lg:flex lg:flex-col lg:justify-between lg:py-12">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Information</h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">Address:</h2>
                <p className="text-muted-foreground mt-2">
                  282, 8th Main Rd, BEML Layout 6th Stage, BEML Layout, Brookefield, Bengaluru, Karnataka 560066
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">Phone:</h2>
                <p className="text-muted-foreground mt-2">+91 6366 548 237</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">Email:</h2>
                <p className="text-muted-foreground mt-2">info@ferilionlabs.com</p>
              </div>
              <div>
                <div className="relative mt-4">
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

      {/* FAQ Section */}
      <section className="mt-12 bg-gray-100 py-12 px-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">What types of courses do you offer?</h3>
              <p className="text-muted-foreground mt-2">
                We offer a wide range of courses in technology, business, design, and more. Our courses are designed to cater to beginners as well as advanced learners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">How can I contact support?</h3>
              <p className="text-muted-foreground mt-2">
                You can contact our support team by filling out the form above, emailing us at support@ferilionlabs.com, or calling our support hotline at +91 6366 548 237.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
