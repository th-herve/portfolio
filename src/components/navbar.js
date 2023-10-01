import Link from './utils/link.js';
import { FaCode, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useState } from 'react';
const isMobile = window.innerWidth < 768;

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isMobile);

  const linksClassName = function returnLinksCassName() {
    let className = 'absolute md:static md:flex top-12 w-screen p-8 text-center text-2xl text-white backdrop-blur-xl';
    if (!isNavOpen && isMobile) {
      className += ' hidden';
    }

    return className;
  };
  const links = ['Home', 'Projects', 'Cv', 'Technologie', 'Contact'];

  // note: there is a margin right apply on the right div in mobile mode, because if using anything other than justify-center on the navbar, the blur break on the right
  return (
    <>
      <nav className="sticky top-0 flex items-center justify-around  bg-black p-3 text-2xl text-white">
        <div className="mr-96 flex items-center gap-3 text-2xl font-bold md:mr-0">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan">
            {isNavOpen ? <FaXmark size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
          <FaCode size={30} className="text-cyan" />
        </div>
        <h1 className="hidden md:block">Portfolio</h1>

        <ul className={linksClassName()}>
          {links.map((link, index) => (
            <li key={link + index} className="mb-12 ">
              <Link text={link} />
            </li>
          ))}
        </ul>
        <div className="">Language</div>
      </nav>
    </>
  );
}
