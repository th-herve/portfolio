import portfolioImg from './projects_image/portfolio.png';
import cyclingImg from './projects_image/cycling.png';

export const projects = [
  {
    title: 'My portfolio',
    image: portfolioImg,
    description: {
      en: 'Personal portfolio built using tailwind css and react.',
      fr: 'Portfolio personnel construit avec Tailwind CSS et React.',
    },
    link: '',
    githubLink: 'https://github.com/th-herve/portfolio',
  },
  {
    title: 'Cycling calendar',
    image: cyclingImg,
    description: {
      en: 'My first programming project, a straightforward web application that presents professional cycling races scheduled in a calendar format. Built using Flask for the backend and Sport Radar API to retrieve the data.',
      fr: "Mon premier projet de programmation, une application web simple qui présente les courses cyclistes professionnelles prévues sous forme de calendrier. Construit avec Flask pour le backend et l'API Sport Radar pour récupérer les données.",
    },
    link: 'https://cycling.th-herve.fr',
    githubLink: 'https://github.com/th-herve/Cycling-calendar',
  },
  // {
  //   title: 'my project',
  //   image:
  //     'https://images.pexels.com/photos/1128121/pexels-photo-1128121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   description:
  //     'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  //   link: '',
  //   githubLink: '',
  // },
  // {
  //   title: 'my project',
  //   image:
  //     'https://images.pexels.com/photos/10600818/pexels-photo-10600818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   description:
  //     'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  //   link: '',
  //   githubLink: '',
  // },
];
