'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Brian Davis',
    position: 'CMO, Trendsetter Styles',
    testimonial: 'Ferilion Labs provided me with the skills and support I needed to land my dream job. I couldn’t be happier with my experience.',
    image: '/History-Img.jpeg',
  },
  {
    name: 'Michael Lee',
    position: 'Director, The Online Emporium',
    testimonial: 'The expert faculty and interactive learning approach at Ferilion Labs helped me develop the skills I needed to succeed in the digital economy.',
    image: '/History-Img.jpeg',
  },
  {
    name: 'Mark Johnson',
    position: 'Marketing Director, Acme Solutions',
    testimonial: 'Thanks to Ferilion Labs, I was able to secure a placement in a top company after completing their programming course. I would highly recommend them to anyone looking to jumpstart their career.',
    image: '/History-Img.jpeg',
  },
  {
    name: 'Sarah Wilson',
    position: 'Founder, Greenly Technologies',
    testimonial: 'The comprehensive support and mentorship I received at Ferilion Labs helped me overcome challenges and achieve my goals. I would definitely recommend them to anyone looking to learn programming.',
    image: '/History-Img.jpeg',
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-black text-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          | Testimonials
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our students' success is our top priority
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black p-4 rounded-lg"
              variants={staggerChild}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <p className="mb-4 text-lg italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-right">
          <motion.button
            className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            All testimonials
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
