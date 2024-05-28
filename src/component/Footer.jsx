import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <h2>
          Jez <span>Tech</span>
        </h2>
        <div className='socials'>
          <a href='' className='icon'>
            <FaInstagramSquare />
          </a>
          <a href='' className='icon'>
            <FaGithub />
          </a>
          <a href='' className='icon'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
