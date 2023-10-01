import Link from './utils/link.js';
import { FaCode, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = ['Home', 'Projects', 'Cv', 'Technologie', 'Contact'];
  return (
    <>
      <nav className="flex items-center justify-between  bg-black p-3 text-2xl text-white">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan">
            {isNavOpen ? <GiHamburgerMenu size={30} /> : <FaXmark size={30} />}
          </button>
          <FaCode size={30} className="text-cyan" />
          <h1 className="hidden md:block">Portfolio</h1>
        </div>
        <div className="">Language</div>
      </nav>

      <div className={isNavOpen ? 'hidden' : ''}>
        <ul className="absolute top-12 w-screen p-8 text-center text-2xl text-white backdrop-blur-xl">
          {links.map((link, index) => (
            <li key={link + index} className="mb-12">
              <Link text={link} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
