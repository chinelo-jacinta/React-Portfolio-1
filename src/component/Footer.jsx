import React from 'react';
import { FaInstagramSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <h2>
          Jez <span>Tech</span>
        </h2>
        <div className='socials'>
          <a href='https://instagram.com' className='icon'>
            <FaInstagramSquare />
          </a>
          <a href='https://github.com' className='icon'>
            <FaGithub />
          </a>
          <a href='https://linkedin.com' className='icon'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
