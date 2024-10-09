import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Code Bear Portfolio</h1>
        <div ref={node}>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <nav className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute inset-x-0 top-full bg-gray-800 z-20 md:static md:flex md:flex-row md:items-center md:space-x-4`}>
            <Link to="about" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="projects" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
            {/* <Link to="experience" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link to="contact" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
