import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSquareJs, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa6';
import { SiGnubash, SiWebpack, SiJest, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si';
import { PiFileSqlDuotone } from 'react-icons/pi';

const iconComponents = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPhp,
  FaSquareJs,
  FaPython,
  FaGitAlt,
  FaLinux,
  SiGnubash,
  SiWebpack,
  SiJest,
  SiAdobephotoshop,
  SiAdobeindesign,
  PiFileSqlDuotone,
];

export default function Skill() {
  return (
    <div className="mb-12 flex w-screen justify-center bg-dark text-cyan">
      <div className="mb-12 grid w-[85%] grid-cols-5 place-items-center gap-6 rounded-md bg-black p-3">
        <h2 className="col-span-1 text-4xl font-bold">Skill</h2>
        <div className="col-span-4"></div>
        {iconComponents.map((IconC, index) => (
          <div className="flex" key={'icon' + index}>
            <div className="rounded-md bg-gray p-2">
              <IconC size="4rem" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
