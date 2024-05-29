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
        </section>
        <p>
          Copyright &copy; <a href='http://www.devcrud.com'>DevCRUD</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
