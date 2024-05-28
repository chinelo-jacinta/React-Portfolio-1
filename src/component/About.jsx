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
        <p className='about-title'>About Me</p>
        <hr />
        <p className='about'>
          Hi!!, i'm Egbunine Chinelo and I'm a self-taught front-end developer
          who loves making websites that are both aesthetically pleasing and
          easy to use. My passion to create my own projects and my intense
          interest about the technology behind the web led me to pursue a career
          in web development. I have committed myself to studying and developing
          my talents through internet resources, side projects, and ongoing
          practice—despite not having a formal degree in this sector.
        </p>
      </div>
    </section>
  );
};

export default About;
