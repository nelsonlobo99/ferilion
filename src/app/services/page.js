import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import servicesList from '../../../utilies/servicesList';


const Services = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Explore our range of services designed to help you achieve your career and educational goals. Each service is tailored to provide you with the best experience and outcomes.
          </p>
        </section>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesList.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={`/${service.image}`}
                  alt={`${service.title} Image`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="mt-12 text-center bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions or need more information about our services, feel free to reach out to us.
          </p>
          <Button asChild>
            <a href="mailto:info@example.com">Contact Us</a>
          </Button>
        </section>
      </div>
    );
  };
  
  export default Services;