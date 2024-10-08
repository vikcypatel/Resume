import React from 'react'
import { IoMic } from 'react-icons/io5'

// import Image
import Image from '../assets/img/about.svg'
const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <img
                className='object-cover about-img h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                src={Image}
                alt='about'
                />
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl ld:text-4xl font-medium lg:font-extrabold mb-2 before:content-about relative before:absolute before:opacity-40 before:-top[3rem] before:hidden before:lg:block'> VIcky Patel</h2>
                        <p className='mb-2 text-accent'>Freelancer Web developer </p>
                        <hr className='mb-8 opacity-5'/>
                            <p className='mb-8'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis unde id fugiat, nam accusamus quo aut tenetur cumque maiores! Aliquid quam assumenda maxime accusamus magnam! <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, aliquam.
                            </p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact Me </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About