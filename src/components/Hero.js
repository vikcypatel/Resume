import React from 'react';

// import woman Image
import WomanImg from '../assets/img/banner.svg';

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
          <div className="flex items-center h-full pt-8">
            {/* left side  */}
            <div className="flex flex-1 flex-col  items-center lg:items-start">
              <p className='text-lg text-accent md-[22px]'>Hey, I'm Vicky </p>
              <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold  md:tracking-[-2px]'>
                I Build & Design <br/> web interface  
              </h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptates deserunt sunt corrupti enim nostrum placeat minus beatae atque ratione?</p>
              <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>work with me</button>
            </div>
            {/* right side  */} 
            <div className="hidden lg:flex flex-1 justify-end items-end h-full header-img">
              <img src={WomanImg} alt="" />
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Hero