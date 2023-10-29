import Link from './utils/link.js';
import { FaCode, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between bg-black  px-8 py-3 text-2xl text-white">
        <div className="flex items-center gap-3 text-2xl font-bold ">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan md:hidden">
            {isNavOpen ? <FaXmark size="2rem" /> : <GiHamburgerMenu size="2rem" />}
          </button>
          <FaCode size="2rem" className="text-cyan" />
        </div>
        <h1 className="ml-3  hidden lg:block">Portfolio</h1>

        <ul
          className={`${!isNavOpen ? 'hidden' : ''}
            absolute right-0 top-14 w-screen text-center text-2xl text-white backdrop-blur-xl md:static md:flex md:justify-center`}
        >
          {links.map((link, index) => (
            <li key={link + index} className="mb-12 mt-12 md:my-0">
              <Link text={link} href={'#' + link.toLowerCase()} />
            </li>
          ))}
        </ul>
        <div className="">Fr</div>
      </nav>
    </>
  );
}
