import React from 'react';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
const Home = () => {
  return (
    <>
      <section id='home'>
        <section className='home-section section'>
          <button>
            <a href='' className='back-home'>
              <FaArrowUp />
            </a>
          </button>
          <div className='home-info section'>
            <h1>i'm chinelo</h1>
            <p className='title'>front-End Developer</p>
            <p className='home-text'>turning ideas into interactive reality</p>
            <div className='socials'>
              <a
                href='https://www.instagram.com/chinelo_jessy/'
                className='icon'
              >
                <FaInstagramSquare />
              </a>
              <a href='https://github.com/chinelo-jacinta' className='icon'>
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/chinelo-jacinta-82782323b/'
                className='icon'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className='home-img'>
            <img
              src='https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg'
              alt=''
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
