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
    <div className="flex w-screen justify-center bg-dark p-8 text-cyan">
      <div className="grid w-[80%] grid-cols-5 place-items-center gap-9 rounded-md bg-black p-20">
        {iconComponents.map((IconC, index) => (
          <div className="flex" key={'icon' + index}>
            <div className="rounded-md bg-gray p-2">
              <IconC size="5em" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
