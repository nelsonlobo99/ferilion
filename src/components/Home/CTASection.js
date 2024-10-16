// 'use client';

// import React from 'react';
// import { Button } from "@/components/ui/button";

// const CTASection = () => (
//   <section className="bg-red-600 py-20">
//     <div className="container mx-auto px-4 text-center">
//       <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
//       <Button className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-full shadow-lg">
//         Enroll Now
//       </Button>
//     </div>
//   </section>
// );

// export default CTASection;


'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import RegistrationForm from '@/components/Home/RegistrationFrom'; 

const CTASection = () => {
  const [isFormVisible, setFormVisible] = useState(false); // State to manage form visibility

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <section className="bg-red-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
          <Button 
            onClick={handleOpenForm} // Set onClick to open the form
            className="bg-white text-red-600 hover:text-white hover:bg-red-700 transition duration-300 text-lg py-3 px-8 rounded-full shadow-lg"
          >
            Enroll Now
          </Button>
        </div>
      </section>
      
      {/* Render the RegistrationForm if isFormVisible is true */}
      <RegistrationForm isVisible={isFormVisible} onClose={handleCloseForm} />
    </>
  );
};

export default CTASection;
