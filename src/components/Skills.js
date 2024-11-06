import React from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import 'animate.css';

const Skills = () => {
  // Using Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.8, // Trigger animation when 80% of the component is in view
  });

  return (
    <section className="bg-tertiary py-12" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row gap-4">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-center ${
                  inView ? 'animate__animated animate__fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each skill
              >
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
