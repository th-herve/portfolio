import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSquareJs, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa6';
import {
  SiGnubash,
  SiWebpack,
  SiJest,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiFlask,
  SiTailwindcss,
  SiBootstrap,
  SiC,
} from 'react-icons/si';
import { PiFileSqlDuotone } from 'react-icons/pi';

export const skills = (() => {
  const categories = {
    language: 'Programming Languages',
    framework: 'Frameworks',
    other: 'Others',
  };

  // The icon entry is a react component
  const skillsList = [
    {
      name: 'HTML5',
      category: categories.language,
      icon: FaHtml5,
      show: true,
    },
    {
      name: 'C',
      category: categories.language,
      icon: SiC,
      show: true,
    },
    {
      name: 'Bootstrap',
      category: categories.framework,
      icon: SiBootstrap,
      show: true,
    },
    {
      name: 'Tailwind',
      category: categories.framework,
      icon: SiTailwindcss,
      show: true,
    },
    {
      name: 'Flask',
      category: categories.framework,
      icon: SiFlask,
      show: true,
    },
    {
      name: 'React',
      category: categories.framework,
      icon: FaReact,
      show: true,
    },
    {
      name: 'CSS3',
      category: categories.language,
      icon: FaCss3Alt,
      show: true,
    },
    {
      name: 'Java',
      category: categories.language,
      icon: FaJava,
      show: true,
    },
    {
      name: 'PHP',
      category: categories.language,
      icon: FaPhp,
      show: true,
    },
    {
      name: 'Javascript',
      category: categories.language,
      icon: FaSquareJs,
      show: true,
    },
    {
      name: 'Python',
      category: categories.language,
      icon: FaPython,
      show: true,
    },
    {
      name: 'Git',
      category: categories.other,
      icon: FaGitAlt,
      show: true,
    },
    {
      name: 'Linux',
      category: categories.other,
      icon: FaLinux,
      show: true,
    },
    {
      name: 'Bash',
      category: categories.other,
      icon: SiGnubash,
      show: true,
    },
    {
      name: 'Webpack',
      category: categories.other,
      icon: SiWebpack,
      show: false,
    },
    {
      name: 'Jest',
      category: categories.other,
      icon: SiJest,
      show: false,
    },
    {
      name: 'Adobe Photoshop',
      category: categories.other,
      icon: SiAdobephotoshop,
      show: true,
    },
    {
      name: 'Adobe InDesign',
      category: categories.other,
      icon: SiAdobeindesign,
      show: true,
    },
    {
      name: 'SQL',
      category: categories.language,
      icon: PiFileSqlDuotone,
      show: true,
    },
  ];

  // groupe the skills by category before exporting to make it easier to work with
  const groupedSkills = skillsList.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return groupedSkills;
})();
