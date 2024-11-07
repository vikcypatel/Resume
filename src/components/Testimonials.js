import React from 'react'
import { useInView } from 'react-intersection-observer';

// import Component
import TestimonialSlider from '../components/TestimonialSlider'
const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div ref={ref}
            className={`flex flex-col items-center text-center ${
              inView ? 'animate__animated animate__jackInTheBox' : ''
            } ${inView ? 'visible' : 'invisible'}`}
            >
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
                    What other people say
                </h2>
                <p className='subtitle'>lorem ipsum dolor sit amet, consectetur adipiscing elit, secondary consequat, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam 

                </p>
            </div>
        </div>
        <TestimonialSlider/>
    </section>
  );
};

export default Testimonials