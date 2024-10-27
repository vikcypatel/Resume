import React, { useState, useEffect } from 'react';

// import links
import { animateScroll as scroll } from 'react-scroll';

// import icon
import { ChevronUpIcon } from '@heroicons/react/outline';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button 
        onClick={scrollToTop} 
        className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all'>
        <ChevronUpIcon className='w-6 h-6' />
      </button>
    )
  );
};

export default BackToTopBtn;
