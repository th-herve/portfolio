import Navbar from './components/navbar';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'th-herve';
  }, []);
  return (
    <div className="bg-bg2 dark:bg-dark_bg2">
      <Navbar />

      <main className="flex h-screen snap-y snap-mandatory flex-col items-center overflow-y-scroll">
        <section id="about" className="flex snap-start justify-center">
          <About />
        </section>

        <section id="projects" className="mb-10 w-screen snap-start bg-gray dark:bg-dark_gray">
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
