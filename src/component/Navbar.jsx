import { useState, useRef, useEffect } from 'react';
import { links } from '../data';
import { CiMenuBurger } from 'react-icons/ci';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const getHeight = linksRef.current.getBoundingClientRect().height;
    console.log(getHeight);
    if (show) {
      linksContainerRef.current.style.height = `${getHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [show]);
  {
    window.addEventListener('scroll', function () {
      console.log(window.pageXOffset);
    });
  }
  return (
    <>
      <nav>
        <div className='section nav-center '>
          <div className='nav-header'>
            <section>
              <h2>
                Jez <span>Tech</span>
              </h2>
            </section>
            <section>
              <button className='toggle-btn' onClick={() => setShow(!show)}>
                <CiMenuBurger />
              </button>
            </section>
          </div>
          {/* links container */}
          <div ref={linksContainerRef} className='nav-links'>
            <ul ref={linksRef}>
              {links.map((link) => {
                const { id, name, url } = link;
                return (
                  <li className='links' key={id}>
                    <a href={url}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
