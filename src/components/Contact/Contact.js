"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

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
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [refContactHeader, inViewContactHeader] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refContactInfo, inViewContactInfo] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refFAQ, inViewFAQ] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [reffirstName, inViewfirstName] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [reflastName, inViewlastName] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refEmail, inViewEmail] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refphoneNumber, inViewphoneNumber] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refMessage, inViewMessage] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-14">
        <motion.h2
          ref={refContactHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewContactHeader ? 1 : 0, y: inViewContactHeader ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl font-bold mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          ref={refContactHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewContactHeader ? 1 : 0, y: inViewContactHeader ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          We’re here to help! If you have any questions about our courses, need support, or want to provide feedback, please reach out to us. <br />
          Our team is ready to assist you and ensure you have the best experience possible. You can contact us via email, phone, or by filling out the form below. We look forward to hearing from you!
        </motion.p>
      </section>

      <div className="lg:grid lg:grid-cols-2 gap-8 xl:min-h-[700px]">
        {/* Form Section */}
        <motion.div
          ref={refForm}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inViewForm ? 1 : 0, x: inViewForm ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-gray-50 p-8 rounded-lg shadow-md lg:flex lg:flex-col lg:justify-between lg:py-12"
        >
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
                  <motion.div
                    ref={reffirstName}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inViewfirstName ? 1 : 0, x: inViewfirstName ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
                    <Label htmlFor="firstName" className="text-lg">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Eg: John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </motion.div>
                  <motion.div
                    ref={reflastName}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inViewlastName ? 1 : 0, x: inViewlastName ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
                    <Label htmlFor="lastName" className="text-lg">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Eg: Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    ref={refEmail}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inViewEmail ? 1 : 0, x: inViewEmail ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
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
                  </motion.div>
                  <motion.div
                    ref={refphoneNumber}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inViewphoneNumber ? 1 : 0, x: inViewphoneNumber ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
                    <Label htmlFor="phoneNumber" className="text-lg">Phone No</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Eg: +1234567890"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </motion.div>
                </div>
                <motion.div
                  ref={refMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inViewMessage ? 1 : 0, y: inViewMessage ? 0 : 20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </motion.div>
                <Button type="submit" disabled={loading} className="w-full mt-4">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          ref={refContactInfo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inViewContactInfo ? 1 : 0, x: inViewContactInfo ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-gray-100 p-8 rounded-lg shadow-md lg:flex lg:flex-col lg:justify-between lg:py-12"
        >
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold">Contact Information</h3>
            </div>
            <p className="mt-6">
              <strong>Address:</strong> 282, 8th Main Rd, BEML Layout 6th Stage, BEML Layout, Brookefield, Bengaluru, Karnataka - 560066.
            </p>
            <p className="mt-4">
              <strong>Phone:</strong> +91 6366 548 237
            </p>
            <p className="mt-4">
              <strong>Email:</strong> support@ferilionlabs.com
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold">Find Us on the Map:</h4>
              <div className="mt-4 flex flex-col lg:flex-row gap-6">
                {/* Map */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1969709255304!2d77.71525387507621!3d12.959244387354989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1337d1b0fcc7%3A0x214b72c7cd4d7359!2sFerilion%20Labs!5e0!3m2!1sen!2sin!4v1724503825871!5m2!1sen!2sin"
                  width="300"
                  height="250"
                  allowFullScreen
                  loading="lazy"
                  className="border-0 flex-shrink-0 w-full lg:w-1/2"
                ></iframe>

                {/* Image beside the map */}
                <img  
                  src="address.png" 
                  alt="Company Building or Office" 
                  className="w-full lg:w-1/2 h-64 object-cover rounded-lg" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Frequently Asked Questions Section */}
      <section className="mt-14">
        <motion.h2
          ref={refFAQ}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewFAQ ? 1 : 0, y: inViewFAQ ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl font-bold text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewFAQ ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="bg-gray-200 p-4 rounded-lg"
          >
            <h4 className="font-semibold">1. What courses do you offer?</h4>
            <p>We offer a variety of courses in software development, data science, and digital marketing. You can find the complete list on our website.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewFAQ ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="bg-gray-200 p-4 rounded-lg"
          >
            <h4 className="font-semibold">2. How can I enroll in a course?</h4>
            <p>You can enroll in a course directly through our website by selecting the course and clicking the 'Enroll Now' button.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewFAQ ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            className="bg-gray-200 p-4 rounded-lg"
          >
            <h4 className="font-semibold">3. What is the duration of the courses?</h4>
            <p>The duration of our courses varies, typically ranging from 4 to 12 weeks, depending on the content and intensity of the course.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inViewFAQ ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className="bg-gray-200 p-4 rounded-lg"
          >
            <h4 className="font-semibold">4. Do you offer any certifications?</h4>
            <p>Yes, all our courses come with a certificate upon successful completion, which you can share on your LinkedIn profile.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
