import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const steps = [
  "Personal Info",
  "Academic Info",
  "Course & Experience",
  "Additional Details",
  "Motivation",
];

const RegistrationForm = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    modeOfLearning: "",
    course: "",
    experience: "",
    startDate: "",
    resume: null,
    referralCode: "",
    howDidYouHear: "",
    address: "",
    motivation: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // New state to track submission

  const nextStep = () => {
    const validationErrors = validateStep(currentStep);
    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 0:
        if (!formData.fullName) newErrors.fullName = "Full Name is required";

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }

        // Phone number validation
        const phonePattern = /^\d{10}$/; // Adjust this pattern based on the expected phone number format
        if (!formData.phone) {
          newErrors.phone = "Phone Number is required";
        } else if (!phonePattern.test(formData.phone)) {
          newErrors.phone = "Please enter a valid 10-digit phone number";
        }
        break;
      case 1:
        if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.qualification)
          newErrors.qualification = "Qualification is required";
        if (!formData.modeOfLearning)
          newErrors.modeOfLearning = "Mode of Learning is required";
        break;
      case 2:
        if (!formData.course) newErrors.course = "Course selection is required";
        if (!formData.startDate)
          newErrors.startDate = "Preferred Start Date is required";
        break;
      case 3:
        if (!formData.howDidYouHear)
          newErrors.howDidYouHear = "Please select how you heard about us";
        if (!formData.address) newErrors.address = "Address is required";
        break;
      case 4:
        if (!formData.motivation)
          newErrors.motivation = "Motivation is required";
        break;
      default:
        break;
    }
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent page refresh
  //   const validationErrors = validateStep(currentStep);
  //   if (Object.keys(validationErrors).length === 0) {
  //     // Handle successful submission here
  //     try {
  //       const response = await fetch('/registered-users', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData), // Send form data as JSON
  //       });

  //       if (response.ok) {
  //         const result = await response.json(); // Assuming the server responds with JSON
  //         console.log("Form data submitted:", result);
  //         setSubmitted(true); // Set submitted state to true
  //       } else {
  //         throw new Error('Failed to submit the form. Please try again.');
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       // Optionally set an error state to display to the user
  //     }
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const validationErrors = validateStep(currentStep);
    if (Object.keys(validationErrors).length === 0) {
      // Handle successful submission here
      console.log('Form data submitted:', formData);
      setSubmitted(true); // Set submitted state to true
      // Optionally reset the form or change the visibility state if needed
    } else {
      setErrors(validationErrors);
    }
  };  

  if (!isVisible) return null; // Prevent opening the form if submitted

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative bg-white p-6 rounded-md shadow-lg w-full max-w-screen-md lg:w-[800px]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-6 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center ${
                currentStep >= index ? "text-red-500" : "text-gray-500"
              }`}
            >
              <div className="h-2 w-full bg-gray-200 rounded">
                <div
                  className={`h-2 bg-red-500 rounded transition-all duration-300 ${
                    currentStep >= index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Added onSubmit handler */}
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </motion.div>
            )}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Qualification
                  </label>
                  <select
                    name="qualification"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select your qualification
                    </option>
                    <option value="highschool">High School Diploma</option>
                    <option value="bachelors">Bachelor&apos;s Degree</option>
                    <option value="masters">Master&apos;s Degree</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.qualification && (
                    <p className="text-red-500 text-sm">
                      {errors.qualification}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Mode of Learning
                  </label>
                  <select
                    name="modeOfLearning"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.modeOfLearning}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select mode
                    </option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                  {errors.modeOfLearning && (
                    <p className="text-red-500 text-sm">
                      {errors.modeOfLearning}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-gray-700 mb-1">
                    Select a Course
                  </label>
                  <select
                    name="course"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    <option value="webdevelopment">Web Development</option>
                    <option value="datascience">Data Science</option>
                    <option value="machinelearning">Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloudcomputing">Cloud Computing</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-sm">{errors.course}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name="experience"
                    min="0"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter experience (if any)"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-sm">{errors.experience}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm">{errors.startDate}</p>
                  )}
                </div>
              </motion.div>
            )}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div>
                  <label className="block text-gray-700 mb-1">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter referral code (if any)"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    How Did You Hear About Us?
                  </label>
                  <select
                    name="howDidYouHear"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="socialMedia">Social Media</option>
                    <option value="searchEngine">Search Engine</option>
                    <option value="referral">Referral</option>
                    <option value="ads">Ads</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.howDidYouHear && (
                    <p className="text-red-500 text-sm">
                      {errors.howDidYouHear}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>
              </motion.div>
            )}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4"
              >
                <div>
                  <label className="block text-gray-700 mb-1">
                    Why do you want to take this course?
                  </label>
                  <textarea
                    name="motivation"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md"
                    placeholder="Tell us your motivation or goals"
                    rows="4"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm">{errors.motivation}</p>
                  )}
                </div>
              </motion.div>
            )}
            <div className="flex justify-between mt-6">
              {/* Navigation buttons */}
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md"
                >
                  Back
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-red-500 text-white rounded-md"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        ) : (
          /* Thank You Message */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6"
          >
            <p className="text-lg font-semibold">
              Thank you for your submission!
            </p>
            <div className="text-5xl animate-bounce">🎉</div>
            <p className="text-gray-500">
              Your application has been received, and we will review it shortly.
            </p>
            <p className="text-gray-500">
              If you have any questions, feel free to reach out!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
