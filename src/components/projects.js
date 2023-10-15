import { projects } from '../data/data_projects';
import Title from './utils/title';
import GithubLink from './utils/github_link';
import LiBig from './utils/liBig';

import { useRef, useEffect, useState } from 'react';

export default function Projects() {
  const SCROLLOFFSET = 608;
  const [imageIndex, setImageIndex] = useState(0);
  const scrollableDivRef = useRef();

  const setIndexToImageClicked = (imageIndex) => {
    scrollableDivRef.current.scrollTop = imageIndex * SCROLLOFFSET;
  };

  const updateImageIndexOnScroll = () => {
    // Calculate the scroll position of the scrolable div
    const scrollPosition = scrollableDivRef.current.scrollTop;
    console.log(scrollPosition);

    // Calculate the image index based on scroll position
    const newImageIndex = Math.floor(scrollPosition / SCROLLOFFSET);

    setImageIndex(newImageIndex);
  };
  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', updateImageIndexOnScroll);

    return () => {
      window.removeEventListener('scroll', updateImageIndexOnScroll);
    };
  }, []);

  return (
    <div className="h-screen overflow-x-hidden py-5">
      <div className="px-20">
        <Title titleText="My projects" mb="0" />
      </div>
      <div id="flex-wraper-lg" className="lg:ml-[10%] lg:flex lg:h-screen lg:items-center lg:justify-items-start">
        <div
          id="ul-projects-container"
          className="lg:flex lg:max-h-[60%] lg:justify-center lg:gap-28 lg:overflow-y-hidden"
        >
          <ul id="titlesList" className="hidden pt-0 text-2xl text-white lg:flex lg:flex-col">
            {projects.map((project, projectIndex) => (
              <button key={'project-link-' + projectIndex} onClick={() => setIndexToImageClicked(projectIndex)}>
                <LiBig
                  key={'li' + projectIndex}
                  text={project.title}
                  selected={projectIndex == imageIndex ? true : false}
                />
              </button>
            ))}
          </ul>

          <div
            id="all-projects-container"
            ref={scrollableDivRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth text-white lg:snap-y "
            style={{ scrollbarWidth: 'none' }}
            onScroll={updateImageIndexOnScroll}
          >
            <div className="flex px-[20%] lg:block lg:px-8">
              {projects.map((project, projectIndex) => (
                <div
                  id={'single-project-container-' + projectIndex}
                  key={'div-' + projectIndex}
                  className="mx-10 my-5 flex min-w-[300px] snap-center flex-col items-center sm:min-w-[400px] lg:my-40 lg:snap-start lg:last:mb-80" // gap between desktop images and on last
                >
                  <h1 className="text-2xl lg:hidden">{project.title}</h1>
                  <div id="imageContainer" className="h-[200px] sm:h-[300px] lg:h-[40vh]">
                    <img
                      className="max-h-[100%] max-w-xs rounded-md shadow-md shadow-dark sm:max-w-md lg:max-w-[100%]"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="mt-2 flex items-center">
                    <p className="text-start">{project.description}</p>
                    <GithubLink href="#" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
