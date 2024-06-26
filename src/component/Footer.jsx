import React from 'react';
import { FaInstagramSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer '>
      <hr />
      <div className='footer-center section'>
        <section>
          <h2>
            Jez <span>Tech</span>
          </h2>
          <div className='socials'>
            <a href='https://www.instagram.com/chinelo_jessy/' className='icon'>
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
        </section>
        <p>Copyright &copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
