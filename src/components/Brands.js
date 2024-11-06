import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

// Import brands data
import { brands } from '../data';

const Brands = () => {
  // Using Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 1, // Trigger animation when 100% of the element is in view
  });

  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div
        ref={ref}
        className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly"
      >
        {brands.map((brand, index) => {
          return (
            <div
              key={index}
              className={`your-element ${
                inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each brand
            >
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
