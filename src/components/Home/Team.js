"use client"; // This must be the first line in the file

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TeamMember = ({ name, role, image, description, socials, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
      }}
      transition={{ duration: 0.5, delay }} // Apply the delay here
      className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-t from-red-300 to-red-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
        className="flex items-center justify-center mb-4"
      >
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="text-lg font-bold mb-2"
      >
        {name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-gray-600 mb-4"
      >
        {role}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        className="text-gray-700 mb-4"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
        className="flex space-x-4"
      >
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500"
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Robert Johnson",
      role: "Head Instructor",
      image: "/PayLater.jpeg",
      description:
        "Robert is a seasoned software engineer with 10+ years of experience. He has a passion for teaching and mentoring students to help them succeed in their careers.",
      socials: [
        {
          url: "https://www.facebook.com/",
          icon: <FaFacebookF />,
        },
        {
          url: "https://www.twitter.com/",
          icon: <FaTwitter />,
        },
        {
          url: "https://www.linkedin.com/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "John Doe",
      role: "Student Success Coach",
      image: "/PayLater.jpeg",
      description:
        "John is a student success coach who provides support to our students throughout their time at Ferilion Labs. He's always available to answer questions and provide guidance to help students achieve their goals.",
      socials: [
        {
          url: "https://www.facebook.com/",
          icon: <FaFacebookF />,
        },
        {
          url: "https://www.twitter.com/",
          icon: <FaTwitter />,
        },
        {
          url: "https://www.linkedin.com/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Karen Smith",
      role: "Career Counselor",
      image: "/PayLater.jpeg",
      description:
        "Karen is a career counselor who helps students find the right job after completing our courses. She has a wealth of knowledge and experience in the tech industry, and she's dedicated to helping our students succeed.",
      socials: [
        {
          url: "https://www.facebook.com/",
          icon: <FaFacebookF />,
        },
        {
          url: "https://www.twitter.com/",
          icon: <FaTwitter />,
        },
        {
          url: "https://www.linkedin.com/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
    {
      name: "Hannah Lee",
      role: "Admissions Coordinator",
      image: "/PayLater.jpeg",
      description:
        "Hannah is our admissions coordinator who helps students enroll in our programs. She's dedicated to providing excellent customer service and ensuring a smooth enrollment process for our students.",
      socials: [
        {
          url: "https://www.facebook.com/",
          icon: <FaFacebookF />,
        },
        {
          url: "https://www.twitter.com/",
          icon: <FaTwitter />,
        },
        {
          url: "https://www.linkedin.com/",
          icon: <FaLinkedinIn />,
        },
      ],
    },
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="absolute top-0 left-0 w-full h-2/3 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-4 text-center relative z-10"
          variants={fadeInUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          | Our Team
        </motion.h2>
        <motion.h1
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: headerInView ? 1 : 0,
            y: headerInView ? 0 : -20,
          }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-white relative z-10"
        >
          Our team is dedicated to your success
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
