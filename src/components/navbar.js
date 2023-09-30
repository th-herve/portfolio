import Link from './utils/link.js';
import { FaCode } from 'react-icons/fa6';

export default function Navbar() {
  const links = ['Home', 'Projects', 'Cv', 'Technologie', 'Contact'];
  return (
    <nav className="flex items-center justify-around bg-black p-3 text-white">
      <h1 className="flex items-center gap-3 font-bold">
        <FaCode size={30} className="text-cyan" /> Thibault Herve
      </h1>
      <div>
        {links.map((link, index) => (
          <Link text={link} key={index} />
        ))}
      </div>

      <div>Language</div>
    </nav>
  );
}
