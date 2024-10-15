'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import CategoriesSection from '@/components/Home/CategorySection';
import Star from '@/components/Home/StarSection';

// Array of dynamic parts of the heading to cycle through
const dynamicParts = [
  "a Successful Career in Tech",
  "Expert Programming Professional",
  "Industry-Focused Coding",
  "a Pathway to a Tech Career",
  "the Skills to Land Your Dream Job"
];

const getRandomPosition = () => {
  const top = `${Math.floor(Math.random() * 80)}%`;
  const left = `${Math.floor(Math.random() * 80)}%`;
  return { top, left };
};

const HeroSection = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let typingTimeout;

    // Function to handle the typing and erasing effect
    const handleTyping = () => {
      const currentText = dynamicParts[currentPartIndex];
      if (!isErasing) {
        // Typing effect
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          // Pause before starting to erase
          setIsErasing(true);
        }
      } else {
        // Erasing effect
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          // Move to the next dynamic part after erasing
          setIsErasing(false);
          setCurrentPartIndex((prevIndex) => (prevIndex + 1) % dynamicParts.length);
        }
      }
    };

    typingTimeout = setTimeout(handleTyping, 150); // Initial delay before typing starts

    return () => clearTimeout(typingTimeout); // Clear timeout on component unmount
  }, [displayedText, isErasing, currentPartIndex]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pb-80 pt-48 bg-black overflow-hidden md:px-20 md:pt-32 md:pb-64">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-black opacity-50"
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-0 flex flex-col md:flex-row items-center justify-between z-10">
          {/* Left Section */}
          <motion.div
            className="md:w-3/5 mb-8 md:mb-0 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-xl font-semibold text-red-500 mb-2">| Best Learning Institute</span>
            </div>
            {/* Typing and erasing text animation */}
            <h1 className="text-5xl md:text-4xl font-bold mb-6">
              Transform Your Passion into <span className="text-red-500">{displayedText}</span>
              <span className="blinking-cursor animate-blink-fast">|</span>
            </h1>
            <p className="text-gray-200 mb-6">
              At Ferilion Labs, we believe in transforming passion into profession. Our expertly designed programming courses equip you with the skills to excel in the digital world. Join us and start coding your future.
            </p>
            <section>
              <Link href="/courses">
                <Button className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-full shadow-lg">
                  Enroll Now
                </Button>
              </Link>
            </section>
          </motion.div>
          <div>
            <Image src="/cover-image.png" alt="User" width={600} height={600} className="mr-2 md:w-5/6 md:mx-auto" />
            {/* Star animations with random positions */}
            {/* <Star position={getRandomPosition()} />
            <Star position={getRandomPosition()} />
            <Star position={getRandomPosition()} /> */}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />
    </div>
  );
};

export default HeroSection;
