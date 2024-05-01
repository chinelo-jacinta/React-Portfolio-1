import React from 'react';

const About = () => {
  return (
    <section id='about-section' className=' section'>
      <div className='about-img'>
        <img
          src='https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg'
          alt=''
        />
      </div>
      <div className='about-text'>
        <p className='about-title'>code and cofee</p>
        <hr />
        <p className='about'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores
          itaque doloribus asperiores dolorum quas voluptates distinctio, porro
          beatae quam provident libero animi totam, praesentium voluptatem
          corrupti dignissimos ipsum accusantium!
        </p>
      </div>
    </section>
  );
};

export default About;
