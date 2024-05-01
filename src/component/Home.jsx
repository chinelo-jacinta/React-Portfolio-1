import React from 'react';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
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
              <FaGithub className='git' />
              <FaInstagramSquare className='ig' />
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