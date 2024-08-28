// "use client";

// import React, { useState, useEffect } from "react";
// import alumniData from "@/app/alumnis/alumnis.json"; // Adjust the path as necessary
// import { Badge } from "@/components/ui/badge";
// import { Avatar } from "@/components/ui/avatar";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const Alumnis = () => {
//   const [alumni, setAlumni] = useState([]);

//   useEffect(() => {
//     // Simulating data fetch; replace this with actual fetch if needed
//     setAlumni(alumniData.alumnis);
//   }, []);

//   if (alumni.length === 0) {
//     return <p className="text-center text-xl mt-4">No alumni data available</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="text-center mb-14">
//         <h2 className="text-4xl font-bold mb-4">Our Alumni</h2>
//         <p className="text-muted-foreground">
//           Meet the exceptional individuals who have been a part of our
//           community. These alumni have gone on to achieve remarkable things in
//           their respective fields, and we are proud to highlight their
//           accomplishments and contributions.
//         </p>
//       </section>
//       <div className="flex flex-wrap justify-center gap-6">
//         {alumni.map(alumnus =>
//           <div
//             key={alumnus.id}
//             className="relative max-w-xs bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
//           >
//             <div className="absolute inset-0">
//               <Image
//                 src={`/${alumnus.image}`} // Ensure images are in the public directory or adjust path
//                 alt={alumnus.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="opacity-40"
//               />
//             </div>
//             <div className="relative p-4 text-center z-10 flex flex-col justify-between h-full">
//               <Avatar
//                 src={`/${alumnus.image}`}
//                 alt={alumnus.name}
//                 className="w-20 h-20 mx-auto mb-4 border-4 border-white"
//               />
//               <h2 className="text-2xl font-semibold text-gray-900">
//                 {alumnus.name}
//               </h2>
//               <p className="text-gray-700 mt-2">
//                 {alumnus.description}
//               </p>
//               <p className="text-3xl font-bold mt-4 text-green-600">
//                 ${alumnus.salary}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Alumnis;



"use client";

import React, { useState, useEffect } from "react";
import alumniData from "@/app/alumnis/alumnis.json"; // Adjust the path as necessary
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Alumnis = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    // Simulating data fetch; replace this with actual fetch if needed
    setAlumni(alumniData.alumnis);
  }, []);

  if (alumni.length === 0) {
    return <p className="text-center text-xl mt-4">No alumni data available</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <section className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Our Alumni</h2>
        <p className="text-muted-foreground">
          Meet the exceptional individuals who have been a part of our
          community. These alumni have gone on to achieve remarkable things in
          their respective fields, and we are proud to highlight their
          accomplishments and contributions.
        </p>
      </section>
      <div className="flex flex-wrap justify-around gap-4">
        {alumni.map(alumnus => (
          <div
            key={alumnus.id}
            className="relative max-w-sm bg-gradient-to-r from-red-100 to-red-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between mb-10" // Added mb-10 for increased bottom margin
          >
            <div className="absolute inset-0">
              <Image
                src={`/${alumnus.image}`} // Ensure images are in the public directory or adjust path
                alt={alumnus.name}
                layout="fill"
                objectFit="cover"
                className="opacity-40"
              />
            </div>
            <div className="relative p-4 text-center z-10 flex flex-col justify-between h-full">
              <Avatar
                src={`/${alumnus.image}`}
                alt={alumnus.name}
                className="w-24 h-24 mx-auto mb-4 border-4 border-white"
              />
              <h2 className="text-2xl font-semibold text-gray-900">
                {alumnus.name}
              </h2>
              <p className="text-gray-700 mt-2">
                {alumnus.description}
              </p>
              <p className="text-3xl font-bold mt-4 text-grey-600">
               ₹{alumnus.salary} Annual CTC
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumnis;
