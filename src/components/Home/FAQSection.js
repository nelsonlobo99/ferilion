'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'What programming languages do you teach?',
    answer:
      'Our courses cover a range of programming languages, including Java, Python, and JavaScript. We’ll work with you to find the best fit for your interests and goals.',
  },
  {
    question: 'Do you offer online courses?',
    answer: 'Yes, we offer a variety of online courses to accommodate different schedules and learning preferences.',
  },
  {
    question: 'What kind of job placement assistance do you offer?',
    answer:
      'We provide comprehensive job placement assistance, including resume reviews, mock interviews, and connections with our network of partner companies.',
  },
  {
    question: 'What kind of support do you offer to students after graduation?',
    answer:
      'Our support doesn’t end at graduation. We offer alumni services, including career counseling and access to advanced courses.',
  },
  {
    question: 'Do you offer any scholarships or financial aid?',
    answer: 'Yes, we have several scholarships and financial aid options available. Contact us for more details.',
  },
  {
    question: 'What’s the class size like?',
    answer: 'We maintain small class sizes to ensure personalized attention and support for each student.',
  },
  {
    question: 'Do you offer any extracurricular activities or events?',
    answer: 'Yes, we offer a variety of extracurricular activities and events, including hackathons, coding challenges, and networking events.',
  },
  {
    question: 'How can I get started with Ferilion Labs?',
    answer: 'You can get started by enrolling in one of our courses through our website. If you have any questions, our support team is here to help.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: false });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between items
      },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white text-black py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-xl font-semibold text-red-500 mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          | FAQ
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to commonly asked questions
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg"
              variants={staggerChild}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }} // Stagger each child
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <span className="text-gray-500">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {openIndex === index && (
                <motion.p
                  className="mt-4 text-gray-600"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.6 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
