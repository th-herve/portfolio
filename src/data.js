import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSquareJs, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa6';
import { SiGnubash, SiWebpack, SiJest, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si';
import { PiFileSqlDuotone } from 'react-icons/pi';

export const skills = (() => {
  const categories = {
    language: 'Programming Languages',
    framework: 'Frameworks',
    other: 'Others',
  };

  const skillsList = [
    {
      name: 'React',
      category: categories.framework,
      icon: FaReact,
    },
    {
      name: 'HTML5',
      category: categories.language,
      icon: FaHtml5,
    },
    {
      name: 'CSS3',
      category: categories.language,
      icon: FaCss3Alt,
    },
    {
      name: 'Java',
      category: categories.language,
      icon: FaJava,
    },
    {
      name: 'PHP',
      category: categories.language,
      icon: FaPhp,
    },
    {
      name: 'Javascript',
      category: categories.language,
      icon: FaSquareJs,
    },
    {
      name: 'Python',
      category: categories.language,
      icon: FaPython,
    },
    {
      name: 'Git',
      category: categories.other,
      icon: FaGitAlt,
    },
    {
      name: 'Linux',
      category: categories.other,
      icon: FaLinux,
    },
    {
      name: 'Bash',
      category: categories.other,
      icon: SiGnubash,
    },
    {
      name: 'Webpack',
      category: categories.other,
      icon: SiWebpack,
    },
    {
      name: 'Jest',
      category: categories.other,
      icon: SiJest,
    },
    {
      name: 'Adobe Photoshop',
      category: categories.other,
      icon: SiAdobephotoshop,
    },
    {
      name: 'Adobe InDesign',
      category: categories.other,
      icon: SiAdobeindesign,
    },
    {
      name: 'SQL',
      category: categories.language,
      icon: PiFileSqlDuotone,
    },
  ];

  const groupedSkills = skillsList.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return groupedSkills;
})();
