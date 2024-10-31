import './Hero.css';
import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 400;
      const background1 = document.querySelector('.background1');
      const background2 = document.querySelector('.background2');
      const background3 = document.querySelector('.background3');
      const name = document.querySelector('.name');

      if (scrollPosition < threshold) {
        // Apply different scroll speeds for each background before the threshold
        background1.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Slowest
        background2.style.transform = `translateY(${scrollPosition * 0.45}px)`; // Medium speed
        background3.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Fastest
        name.style.transform = `translate(-50%, ${scrollPosition * 0.6}px)`;
      } else {
        // name.style.transform = `translate(-50%, ${scrollPosition * 0.6}px)`; // Name slower than background3
      }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    scroller.scrollTo('about-me', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
        <div className='background-container'>
            <img src={require('../assets/1.png')} alt="Background" className="background1"/>
            <h1 className="name">Simar Cheema</h1>
            <button className="discoverMoreButton" onClick={scrollToContent}>Discover More</button>
            <img src={require('../assets/2.png')} alt="Background" className="background2"/>
            <img src={require('../assets/3.png')} alt="Background" className="background3"/>
        </div>
    </div>
  );
};

export default Hero;
