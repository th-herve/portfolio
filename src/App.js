import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
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
        <section id="home" className="flex justify-center">
          <About fullName={fullName} jobTitle={jobTitle} description={introText} />
        </section>
        <section id="projects" className="mb-10 w-screen bg-gray lg:h-[calc(100vh-2rem)]">
          <Projects />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="contact">
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
