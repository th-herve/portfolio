import { FaReact, FaCss3Alt, FaJava, FaPhp, FaSquareJs, FaPython, FaGitAlt, FaLinux, FaGolang, FaLaravel } from 'react-icons/fa6';
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
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
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
      name: 'Typescript',
      category: categories.language,
      icon: SiTypescript,
      show: true,
      level: '60%',
    },
    {
      name: 'Javascript',
      category: categories.language,
      icon: FaSquareJs,
      show: false,
      level: '50%',
    },
    {
      name: 'C',
      category: categories.language,
      icon: SiC,
      show: false,
      level: '20%',
    },
    {
      name: 'Bootstrap',
      category: categories.framework,
      icon: SiBootstrap,
      show: false,
      level: '40%',
    },
    {
      name: 'Flask',
      category: categories.framework,
      icon: SiFlask,
      show: false,
      level: '40%',
    },
    {
      name: 'React',
      category: categories.framework,
      icon: FaReact,
      show: true,
      level: '60%',
    },
    {
      name: 'NextJs',
      category: categories.framework,
      icon: SiNextdotjs,
      show: true,
      level: '60%',
    },
    {
      name: 'Laravel',
      category: categories.framework,
      icon: FaLaravel,
      show: true,
      level: '60%',
    },
    {
      name: 'Spring boot',
      category: categories.framework,
      icon: SiSpringboot,
      show: true,
      level: '60%',
    },
    {
      name: 'Tailwind',
      category: categories.framework,
      icon: SiTailwindcss,
      show: false,
      level: '60%',
    },
    {
      name: 'CSS3',
      category: categories.language,
      icon: FaCss3Alt,
      show: false,
      level: '60%',
    },
    {
      name: 'Java',
      category: categories.language,
      icon: FaJava,
      show: true,
      level: '50%',
    },
    {
      name: 'PHP',
      category: categories.language,
      icon: FaPhp,
      show: true,
      level: '50%',
    },
    {
      name: 'Python',
      category: categories.language,
      icon: FaPython,
      show: true,
      level: '50%',
    },
    {
      name: 'Go',
      category: categories.language,
      icon: FaGolang,
      show: true,
      level: '50%',
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
      show: false,
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
