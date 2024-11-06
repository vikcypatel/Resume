import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import WomanImg from '../assets/img/banner.svg';

const Hero = () => {
  // Set up Intersection Observer
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.8, // Trigger animation when 20% of the component is in view
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <section
      id="home"
      className="lg:h-[100vh] md:h-[100vh] pt-4 flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-16">
          {/* Left Side */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p
              ref={headingRef}
              className={`text-lg text-accent md-[22px] ${
                headingInView ? 'animate__animated animate__bounce' : ''
              }`}
            >
              Hey, I'm Vicky
            </p>
            <h1
              ref={textRef}
              className={`text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px] ${
                textInView ? 'animate__animated animate__fadeInLeft' : ''
              }`}
            >
              I Build & Design <br /> web interface
            </h1>
            <p
              ref={textRef}
              className={`pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left ${
                textInView ? 'animate__animated animate__fadeInLeft' : ''
              }`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptates deserunt sunt corrupti enim
              nostrum placeat minus beatae atque ratione?
            </p>
            <button
              ref={buttonRef}
              className={`btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all ${
                buttonInView ? 'animate__animated animate__fadeInLeft' : ''
              }`}
            >
              Work with me
            </button>
          </div>
          {/* Right Side */}
          <div
            ref={imageRef}
            className={`hidden lg:flex flex-1 justify-end items-end h-full header-img ${
              imageInView ? 'animate__animated animate__fadeInRight' : ''
            }`}
          >
            <img src={WomanImg} alt="Woman illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
