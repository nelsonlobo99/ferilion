"use client"; // This must be the first line in the file

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamMember = ({ name, role, image, description, socials }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 bg-gradient-to-t from-red-300 to-red-100"
      variants={fadeInUp}
    >
      <motion.div className="flex items-center justify-center mb-4">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
      <motion.div className="flex justify-center">
        <motion.h3 className="text-lg font-bold mb-2">{name}</motion.h3>
      </motion.div>
      <motion.div className="flex justify-center">
        <motion.p className="text-gray-600 mb-4">{role}</motion.p>
      </motion.div>
      <motion.div className="flex justify-center h-56">
        <motion.p className="text-gray-700 mb-4 text-center">{description}</motion.p>
      </motion.div>
      <motion.div className="flex justify-center">
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 px-2"
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
      description: "Robert is a seasoned software engineer with 10+ years of experience. He has a passion for teaching and mentoring students to help them succeed in their careers.",
      socials: [
        { url: "https://www.facebook.com/", icon: <FaFacebookF /> },
        { url: "https://www.twitter.com/", icon: <FaTwitter /> },
        { url: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
      ],
    },
    {
      name: "John Doe",
      role: "Student Success Coach",
      image: "/PayLater.jpeg",
      description: "John is a student success coach who provides support to our students throughout their time at Ferilion Labs. He's always available to answer questions and provide guidance to help students achieve their goals.",
      socials: [
        { url: "https://www.facebook.com/", icon: <FaFacebookF /> },
        { url: "https://www.twitter.com/", icon: <FaTwitter /> },
        { url: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
      ],
    },
    {
      name: "Karen Smith",
      role: "Career Counselor",
      image: "/PayLater.jpeg",
      description: "Karen is a career counselor who helps students find the right job after completing our courses. She has a wealth of knowledge and experience in the tech industry, and she's dedicated to helping our students succeed.",
      socials: [
        { url: "https://www.facebook.com/", icon: <FaFacebookF /> },
        { url: "https://www.twitter.com/", icon: <FaTwitter /> },
        { url: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
      ],
    },
    {
      name: "Hannah Lee",
      role: "Admissions Coordinator",
      image: "/PayLater.jpeg",
      description: "Hannah is our admissions coordinator who helps students enroll in our programs. She's dedicated to providing excellent customer service and ensuring a smooth enrollment process for our students.",
      socials: [
        { url: "https://www.facebook.com/", icon: <FaFacebookF /> },
        { url: "https://www.twitter.com/", icon: <FaTwitter /> },
        { url: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
      ],
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.section
      className="py-12 relative overflow-hidden bg-black"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-4 text-center"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
        >
          | Our Team
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-white"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
        >
          Our team is dedicated to your success
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
