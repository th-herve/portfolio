import Navbar from './components/navbar';
import About from './components/about';
import React, { useEffect } from 'react';

const fullName = 'Thibault Hervé';
const jobTitle = 'Développeur Junior';
const introText =
  "Je suis un développeur junior en quête d'un stage, animé par une passion pour le développement informatique. Je maîtrise déjà plusieurs technologies, et je suis prêt à mettre en pratique mes compétences pour enrichir votre équipe.";

const aboutPage = <About fullName={fullName} jobTitle={jobTitle} description={introText} />;

export default function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <main
      className="h-screen 
       bg-[url('https://images.unsplash.com/photo-1448067686092-1f4f2070baae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"
    >
      <Navbar />
      {aboutPage}
    </main>
  );
}

// <Navbar />
// <About />
// <Technologie />
// <Project />
// <Contact />
