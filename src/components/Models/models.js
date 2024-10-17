"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGraduationCap, FaStar, FaBriefcase } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { AiOutlineClose } from "react-icons/ai";

const packagesData = [
  {
    title: "Bootcamp",
    color: "bg-blue-500",
    gradientColor: "from-blue-500 to-blue-700",
    icon: <FaGraduationCap size={28} />,
    popular: false,
    details: [
      "Intensive, comprehensive upskilling program for career switchers",
      "Offline training (Mon-Sat, 9 AM - 6 PM)",
      "Program duration of 3 to 6 months duration",
      "Targeted for individuals with 3+ years of experience",
    ],
    completeData: [
      {
        label: "Description",
        value:
          "Intensive, comprehensive upskilling program for career switchers.",
      },
      { label: "Training Format", value: "Offline (Mon-Sat, 9 AM - 6 PM)" },
      {
        label: "Key Features",
        value:
          "3 to 6 months, offline, core technical and project-oriented training, placement-specific training.",
      },
      {
        label: "Target Audience",
        value:
          "Individuals with 3+ years of experience, switching from non-IT fields or re-entering workforce.",
      },
      {
        label: "Courses Offered",
        value:
          "Python Full-stack, Data Engineering (Cloud), Java/J2EE, Windows & VMWare Admin.",
      },
      {
        label: "Phases Applicable",
        value:
          "Phase 1: Core Technical Training\nPhase 2: Advanced Training\nPhase 3: Interview Training",
      },
      {
        label: "Payment Timings",
        value: "Phase 1 & 2: Paid at the end of Phase 3 (Post Job Offer).",
      },
      {
        label: "Payment Details",
        value:
          "No cost EMI available through NBFC (Kuhoo/Wizir). Non-refundable/non-transferable fees.",
      },
      {
        label: "Eligibility Criteria",
        value:
          "3+ years of experience in non-IT or IT, low compensation, or career re-entry after a gap of 3+ years.",
      },
    ],
  },
  {
    title: "Premium Bootcamp",
    color: "bg-purple-500",
    gradientColor: "from-purple-500 to-purple-700", // Gradient color
    icon: <FaStar size={28} />,
    popular: true,
    details: [
      "Upskilling with additional benefits (online/offline)",
      "Training (Mon-Sat, 9 AM - 6 PM)",
      "Personalized, flexible payment models, placement workshops",
      "For IT professionals with < 8 LPA or career re-entry",
    ],
    completeData: [
      {
        label: "Description",
        value:
          "Upskilling with additional benefits, offering both online and offline options.",
      },
      {
        label: "Training Format",
        value: "Online/Offline (Mon-Sat, 9 AM - 6 PM)",
      },
      {
        label: "Key Features",
        value:
          "More personalized training, flexible payment models, includes placement assistance, workshops.",
      },
      {
        label: "Target Audience",
        value:
          "IT professionals with low compensation (< 8 Lakhs) or individuals re-entering the workforce.",
      },
      {
        label: "Courses Offered",
        value:
          "Python Full-stack, Data Engineering (Cloud), Java/J2EE, Business Analyst, Azure Admin, Manual/Automation Testing.",
      },
      {
        label: "Phases Applicable",
        value:
          "Phase 1: Core Technical Training\nPhase 2: Advanced Training\nPhase 3: Interview Training",
      },
      {
        label: "Payment Timings",
        value:
          "Phase 1: Paid at the beginning, Phase 2: Paid at end, if seeking placement assistance.",
      },
      {
        label: "Payment Details",
        value:
          "No cost EMI available through NBFC (Kuhoo/Wizir). Non-refundable/non-transferable fees.",
      },
      {
        label: "Eligibility Criteria",
        value:
          "IT professionals with 3+ years of experience earning less than 8 Lakhs, or re-entering after a gap.",
      },
    ],
  },
  {
    title: "Placement Plus (DD)",
    color: "bg-green-500",
    gradientColor: "from-green-500 to-green-700", // Gradient color
    icon: <FaBriefcase size={28} />,
    popular: false,
    details: [
      "Job placement-focused training, career development",
      "Offline training (Mon-Fri, 9 AM - 6 PM)",
      "Shorter, interview-specific training",
      "For IT professionals with 3+ years or career transition",
    ],
    completeData: [
      {
        label: "Description",
        value:
          "Focused on job placement with career development, suitable for professionals with prior experience.",
      },
      { label: "Training Format", value: "Offline (Mon-Fri, 9 AM - 6 PM)" },
      {
        label: "Key Features",
        value:
          "Job placement-focused, shorter duration, interview-specific training, tailored for same-tech stack professionals.",
      },
      {
        label: "Target Audience",
        value:
          "Individuals in IT fields seeking career transition or re-entry after a gap, with 3+ years of experience or training.",
      },
      {
        label: "Courses Offered",
        value:
          "Python Full-stack, Data Engineering (Cloud), Java/J2EE, Salesforce, Frontend Development with React.js.",
      },
      {
        label: "Phases Applicable",
        value: "Phase 3: Interview-Specific Training",
      },
      {
        label: "Payment Timings",
        value:
          "Phase 3: Paid post-placement (After Job Offer, within 5 working days).",
      },
      {
        label: "Payment Details",
        value:
          "No cost EMI available through NBFC (Kuhoo/Wizir). Non-refundable/non-transferable fees.",
      },
      {
        label: "Eligibility Criteria",
        value:
          "3+ years of IT experience, recently unemployed or low compensation, or transitioning into higher-paying IT fields.",
      },
    ],
  },
];

const Models = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State for modal
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="container mx-auto px-4">
      <section ref={servicesRef} className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: servicesInView ? 1 : 0,
            y: servicesInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Compare Our Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: servicesInView ? 1 : 0,
            y: servicesInView ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Choose the package that best suits your career goals and start your
          journey with us.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {packagesData.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden transition-transform ${pkg.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl`}
            >
              {/* Badge for Most Popular */}
              {pkg.popular && (
                <span className="absolute top-4 right-4 bg-yellow-300 text-black px-2 py-1 rounded-lg text-sm font-bold">
                  Most Popular
                </span>
              )}

              <Card className="h-full flex flex-col p-4">
                {/* Package Icon */}
                <div className="flex items-center justify-center mt-4">
                  {pkg.icon}
                </div>

                <CardHeader className="flex-1 text-center">
                  <CardTitle className="text-xl font-semibold">
                    {pkg.title}
                    <hr className="border-t border-gray-300 my-2" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {pkg.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span>✔️</span>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* CTA Button */}
                <div className="text-center mt-4">
                  <Button
                    className="w-full bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 font-semibold py-2 rounded-lg"
                    onClick={() => openModal(pkg)} // Open modal with package details
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for displaying complete data */}

      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div
            className={`bg-gradient-to-r ${selectedPackage.color} text-white rounded-lg shadow-2xl p-8 w-11/12 max-w-5xl transform transition-transform duration-300 ease-in-out scale-95 relative`}
          >
            {/* Close Button (Cross Mark) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition duration-200"
              aria-label="Close"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedPackage.title} Details
            </h2>
            <hr className="border-t border-gray-300 my-2" />
            <table className="min-w-full border-collapse">
              <tbody className="text-left">
                {selectedPackage.completeData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-700">
                    <td className="px-4 py-2 font-semibold">{item.label}:</td>
                    <td className="px-4 py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="mt-12 text-center bg-secondary p-8 rounded-lg"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contactInView ? 1 : 0,
            y: contactInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          Get in Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contactInView ? 1 : 0,
            y: contactInView ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-6"
        >
          If you have any questions or need more information about our services,
          feel free to reach out to us.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contactInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild>
            <a href="mailto:info@example.com">Contact Us</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Models;
