import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      </div>
    );
  };
  
  export default Services;