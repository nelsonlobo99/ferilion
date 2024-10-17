'use client'

import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import CoursesSection from '@/components/Home/CoursesSection';
import PlacementSection from '@/components/Home/PlacementSection';
import TestimonialSection from '@/components/Home/TestimonialSection';
import CTASection from '@/components/Home/CTASection';
import MissionVision from '@/components/Home/MissionVisionSection';
import SpecializationSection from '@/components/Home/SpecializationSection';
import Procedure from '@/components/Home/Procedure';
import FAQSection from '@/components/Home/FAQSection';
import TeamMember from '@/components/Home/Team';
import ScrollToTopButton from '@/components/Home/MoveTop';
import RegistrationForm from '@/components/Home/RegistrationFrom';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    // Set a timeout to show the registration form after 3 seconds
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 7000); // Change 3000 to the desired time in milliseconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div ref={homeRef} 
    style={{
      overflowY: "auto",    // Enable vertical scrolling
      scrollbarWidth: "thin", // For Firefox, make scrollbar thinner
      WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS
      '&::-webkit-scrollbar': {
        display: "none", // Hide scrollbar for webkit browsers
      },
    }}>
      <HeroSection />
      <AboutSection />
      <MissionVision />
      <SpecializationSection />
      <CoursesSection />
      <PlacementSection />
      <Procedure />
      <TestimonialSection />
      <TeamMember />
      <FAQSection />
      <CTASection />
      <ScrollToTopButton />
      <RegistrationForm isVisible={showForm} onClose={closeForm} />
    </div>
  );
};

export default Home;
