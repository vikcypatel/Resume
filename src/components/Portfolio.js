import React from 'react';
import { useInView } from 'react-intersection-observer';
import Projects from './Projects';
import 'animate.css';

const Portfolio = () => {
  // Using Intersection Observer to trigger animation when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Trigger animation when 30% of the section is in view
  });

  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`flex flex-col items-center text-center ${
            inView ? 'animate__animated animate__jackInTheBox' : ''
          } ${inView ? 'visible' : 'invisible'}`}
        >
          <h2
            className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg-block"
          >
            My Latest Work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eos ea sapiente aliquam totam esse ipsa suscipit ab eaque voluptatem?
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
