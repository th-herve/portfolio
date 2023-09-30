import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import React, { useEffect } from 'react';

const fullName = 'Thibault Hervé';
const jobTitle = 'Développeur Junior';
const introText =
  "Je suis un développeur junior en quête d'un stage, animé par une passion pour le développement informatique. Je maîtrise déjà plusieurs technologies, et je suis prêt à mettre en pratique mes compétences pour enrichir votre équipe.";

export default function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <main>
      <Navbar />
      <section className="about overflow-hidden">
        <About fullName={fullName} jobTitle={jobTitle} description={introText} />
      </section>
      <section className="technologies ">
        <Skill />
      </section>
    </main>
  );
}

// <Navbar />
// <About />
// <Technologie />
// <Project />
// <Contact />
