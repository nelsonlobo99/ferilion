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
    fname: '',
    lname: '',
    email: '',
    phno: '',
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

  // Define animations for different sections
  const [refContactHeader, inViewContactHeader] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refContactInfo, inViewContactInfo] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refFAQ, inViewFAQ] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Field-level animations
  const [refFname, inViewFname] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refLname, inViewLname] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refEmail, inViewEmail] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refPhno, inViewPhno] = useInView({ triggerOnce: true, threshold: 0.1 });
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
                    ref={refFname}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inViewFname ? 1 : 0, x: inViewFname ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
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
                  </motion.div>
                  <motion.div
                    ref={refLname}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inViewLname ? 1 : 0, x: inViewLname ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
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
                    ref={refPhno}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inViewPhno ? 1 : 0, x: inViewPhno ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex-1"
                  >
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
                <Button className="mt-6 w-full" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {success && <p className="mt-4 text-green-500">Message sent successfully!</p>}
                {error && <p className="mt-4 text-red-500">Error: {error}</p>}
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
              <strong>Address:</strong> 123 Main Street, Suite 400, City, State, ZIP
            </p>
            <p className="mt-4">
              <strong>Phone:</strong> +91 6366 548 237
            </p>
            <p className="mt-4">
              <strong>Email:</strong> support@ferilionlabs.com
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Find Us on the Map:</h4>
              <div className="mt-4">
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
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.section
        ref={refFAQ}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inViewFAQ ? 1 : 0, y: inViewFAQ ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-12 bg-gray-100 py-12 px-6 rounded-lg shadow-md"
      >
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
      </motion.section>
    </div>
  );
}

export default Contact;