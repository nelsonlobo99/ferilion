'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="bg-red-600 py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
      <Button className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-full shadow-lg">
        Enroll Now
      </Button>
    </div>
  </section>
);

export default CTASection;
