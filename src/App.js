import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <div className="bg-dark">
      <Navbar />

      <main className="flex h-screen snap-y snap-mandatory flex-col items-center overflow-y-scroll">
        <section id="home" className="flex snap-start justify-center">
          <About />
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
