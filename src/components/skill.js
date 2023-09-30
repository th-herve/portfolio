import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSquareJs, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa6';
import { SiGnubash, SiWebpack, SiJest, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si';
import { PiFileSqlDuotone } from 'react-icons/pi';

const iconComponent = [
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
    <div className="flex w-screen bg-dark p-8 text-cyan">
      <div className="grid grid-cols-5 gap-3 rounded-md bg-black p-3">
        {iconComponent.map((IconC, index) => (
          <div className="flex" key={index}>
            <div className="rounded-md bg-gray p-2" key={'icon' + index}>
              <IconC size={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
