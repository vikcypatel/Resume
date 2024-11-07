import React from 'react'
import { useInView } from 'react-intersection-observer';
// import service data
import { services } from '../data'
const Services = () => {

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.8,
    });

    
  
  return  (
        <section id='services' className='section bg-tertiary'>
            <div className='container mx-auto'>
                {/* Section title */}
                <div ref={ref}
          className={`flex flex-col items-center text-center ${
            inView ? 'animate__animated animate__jackInTheBox' : ''
          } ${inView ? 'visible' : 'invisible'}`}>
                    <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rm] before:-left-28 before:hidden before:lg:block'>
                        What I do for clients
                    </h2>
                    <p className='subtitle'> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam
                     </p>
                </div>
                {/* item grid */}
                <div className='grid lg:grid-cols-4 gap-8'>
                {services.map((service, index) => {
                    const { icon, name, description } = service;
                    return (
                    <div
                        key={index}
                        className={`service-card bg-secondary p-6 rounded-2xl animate__animated ${
                        inView ? 'animate__fadeInUp' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                        {icon}
                        </div>
                        <h4 className='text-xl font-medium mb-2'>{name}</h4>
                        <p>{description}</p>
                    </div>
                    );
                })}
                </div>

                </div>
           
        </section>
  )
}       
export default Services