import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import React, { useEffect } from 'react';

const fullName = 'Thibault Hervé';
const jobTitle = 'Développeur Junior';
const introText =
  'I am a junior developer on the lookout for an internship, driven by my genuine passion for computer programming. I have gained proficiency in several technologies and am eager to apply my skills to collaborate with and contribute to your team.';

export default function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <div className="bg-dark">
      <Navbar />
      <main className="flex h-screen snap-y snap-mandatory flex-col items-center overflow-y-scroll">
        <section id="home" className="flex snap-start justify-center">
          <About fullName={fullName} jobTitle={jobTitle} description={introText} />
        </section>

        <section id="projects" className="mb-10 w-screen snap-start bg-gray lg:h-[calc(100vh-2rem)]">
          <Projects />
        </section>

        <section id="skills" className="snap-start">
          <Skill />
        </section>

        <section id="contact" className="snap-start">
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
