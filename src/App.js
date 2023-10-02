import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
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
    <div className="bg-dark">
      <Navbar />
      <main className="flex flex-col items-center">
        <section id="home">
          <About fullName={fullName} jobTitle={jobTitle} description={introText} />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="contact" className="mb-96 bg-black">
          <Contact />
        </section>
      </main>
    </div>
  );
}

// <Navbar />
// <About />
// <Technologie />
// <Project />
// <Contact />
