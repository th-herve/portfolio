// Reactive navbar with hamburger menu on mobile and normal navbar on desktop
import Link from './utils/link.js';
import { FaCode, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useState } from 'react';
import GithubLink from './utils/github_link.js';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // list of navigations links
  const links = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="sticky top-0 flex items-center justify-between bg-black  px-8 py-3 text-2xl text-white">
      <div className="flex items-center gap-3 text-2xl font-bold ">
        {/* button that toggle the hamburger menu, display a X if open or the hamberger icon if closed, hidden on desktop */}
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan md:hidden">
          {isNavOpen ? <FaXmark size="2rem" /> : <GiHamburgerMenu size="2rem" />}
        </button>
        {/* </> icon */}
        <FaCode size="2rem" className="text-cyan" />
      </div>
      <h1 className="ml-3  hidden lg:block">Portfolio</h1>

      {/* hamburger menu implementation */}
      <ul
        className={`${!isNavOpen ? 'hidden' : ''}
            absolute right-0 top-14 h-screen w-screen text-center text-2xl text-white backdrop-blur-xl md:static md:flex md:h-auto md:justify-center`}
      >
        {links.map((link, index) => (
          <li key={link + index} className="mb-12 mt-12 md:my-0">
            <Link text={link} href={'#' + link.toLowerCase()} />
          </li>
        ))}
      </ul>

      <GithubLink href="https://github.com/th-herve/" size="40px" />
    </nav>
  );
}
