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
  // The categories values are used as key in the translation.json file, if updating a value, it must be reflected in the translation file.
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
      level: '60%',
    },
    {
      name: 'C',
      category: categories.language,
      icon: SiC,
      show: true,
      level: '20%',
    },
    {
      name: 'Bootstrap',
      category: categories.framework,
      icon: SiBootstrap,
      show: true,
      level: '40%',
    },
    {
      name: 'Tailwind',
      category: categories.framework,
      icon: SiTailwindcss,
      show: true,
      level: '60%',
    },
    {
      name: 'Flask',
      category: categories.framework,
      icon: SiFlask,
      show: true,
      level: '40%',
    },
    {
      name: 'React',
      category: categories.framework,
      icon: FaReact,
      show: true,
      level: '50%',
    },
    {
      name: 'CSS3',
      category: categories.language,
      icon: FaCss3Alt,
      show: true,
      level: '60%',
    },
    {
      name: 'Java',
      category: categories.language,
      icon: FaJava,
      show: true,
      level: '40%',
    },
    {
      name: 'PHP',
      category: categories.language,
      icon: FaPhp,
      show: true,
      level: '30%',
    },
    {
      name: 'Javascript',
      category: categories.language,
      icon: FaSquareJs,
      show: true,
      level: '60%',
    },
    {
      name: 'Python',
      category: categories.language,
      icon: FaPython,
      show: true,
      level: '60%',
    },
    {
      name: 'Git',
      category: categories.other,
      icon: FaGitAlt,
      show: true,
      level: '70%',
    },
    {
      name: 'Linux',
      category: categories.other,
      icon: FaLinux,
      show: true,
      level: '70%',
    },
    {
      name: 'Bash',
      category: categories.other,
      icon: SiGnubash,
      show: true,
      level: '60%',
    },
    {
      name: 'Webpack',
      category: categories.other,
      icon: SiWebpack,
      show: false,
      level: '20%',
    },
    {
      name: 'Jest',
      category: categories.other,
      icon: SiJest,
      show: false,
      level: '20%',
    },
    {
      name: 'Photoshop',
      category: categories.other,
      icon: SiAdobephotoshop,
      show: true,
      level: '70%',
    },
    {
      name: 'InDesign',
      category: categories.other,
      icon: SiAdobeindesign,
      show: true,
      level: '70%',
    },
    {
      name: 'SQL',
      category: categories.language,
      icon: PiFileSqlDuotone,
      show: true,
      level: '80%',
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
