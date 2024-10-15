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
  const [hasScrolled, setHasScrolled] = useState(false);
  const homeRef = useRef(null);

  const handleScroll = () => {
    if (homeRef.current) {
      const scrollY = window.scrollY;
      const homeHeight = homeRef.current.offsetHeight;
      const scrollPosition = (scrollY / homeHeight) * 100;

      if (scrollPosition >= 50 && !hasScrolled) {
        setShowForm(true);
        setHasScrolled(true); // To ensure the form opens only once
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div ref={homeRef}>
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
