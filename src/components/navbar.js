import Link from './utils/link.js';
import { FaCode, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = ['Home', 'Projects', 'Cv', 'Technologie', 'Contact'];

  return (
    <>
      {/* note: there is a margin right apply on the left div in mobile mode.
          It's because if using anything other than justify-center on the navbar, the blur break on the right.
          Setting a margin recreate justify-around without using it, and without breaking the blur*/}
      <nav className="sticky top-0 flex items-center justify-evenly bg-black  px-8 py-6 text-2xl text-white">
        <div className="mr-96 flex items-center gap-3 text-2xl font-bold md:mr-0">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan md:hidden">
            {isNavOpen ? <FaXmark size="2rem" /> : <GiHamburgerMenu size="2rem" />}
          </button>
          <FaCode size="2rem" className="text-cyan" />
        </div>
        <h1 className="ml-3  hidden lg:block">Portfolio</h1>

        <ul
          className={`${!isNavOpen ? 'hidden' : ''}
            absolute top-16 w-screen text-center text-2xl text-white backdrop-blur-xl md:static md:flex md:justify-center lg:p-8`}
        >
          {links.map((link, index) => (
            <li key={link + index} className="mb-12 md:mb-0">
              <Link text={link} />
            </li>
          ))}
        </ul>
        <div className="">Fr</div>
      </nav>
    </>
  );
}
