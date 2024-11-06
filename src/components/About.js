import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
// Import Image
import Image from '../assets/img/about.svg';

const About = () => {
  // Using Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* Image Section */}
          <img
            ref={ref}
            className={`object-cover about-img h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl ${
              inView ? 'animate__animated animate__fadeInLeft' : 'opacity-0'
            }`}
            src={Image}
            alt="about"
          />
          
          {/* Text Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className={`text-4xl lg:text-4xl font-medium lg:font-extrabold mb-2 relative before:content-about before:absolute before:opacity-40 before:-top[3rem] before:hidden before:lg:block ${
                  inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                }`}
              >
                Vicky Patel
              </h2>
              <p className="mb-2 text-accent">Freelancer Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className={`mb-8 ${inView ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis unde id fugiat, nam accusamus quo aut tenetur cumque maiores! Aliquid quam assumenda maxime accusamus magnam! <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, aliquam.
              </p>
            </div>
            <button className={`btn btn-md bg-accent hover:bg-accent-hover transition-all ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
