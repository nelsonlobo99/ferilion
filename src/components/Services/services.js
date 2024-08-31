"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import servicesList from '../../../utilies/servicesList';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container mx-auto px-4">
      <section ref={servicesRef} className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Explore our range of services designed to help you achieve your career and educational goals. Each service is tailored to provide you with the best experience and outcomes.
        </motion.p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden transition-transform"
          >
            <Card className="h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={`/${service.image}`}
                  alt={`${service.title} Image`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section ref={contactRef} className="mt-12 text-center bg-secondary p-8 rounded-lg">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          Get in Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-6"
        >
          If you have any questions or need more information about our services, feel free to reach out to us.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contactInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild>
            <a href="mailto:info@example.com">Contact Us</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
