import { projects } from '../data/data_projects';
import Title from './utils/title';
import GithubLink from './utils/github_link';
import LiBig from './utils/liBig';

import { useRef, useEffect, useState } from 'react';

// Value of the first scrollable item that offset the calcul of the items height.
// Can be obtain with 'document.getElementById('single-project-container-0').getBoundingClientRect().top; '
// But this value changes after we start scrolling. So for now it's easier to hard code it.
const SCROLL_OFFSET = 160;

export default function Projects() {
  const [imageIndex, setImageIndex] = useState(0);
  const scrollableDivRef = useRef();

  function getScrollItemHeight() {
    const scrollItemHeight = document.getElementById('single-project-container-0').offsetHeight;
    return scrollItemHeight + SCROLL_OFFSET;
  }

  // callback for the project links. Scroll to the corresponding image for the given index.
  const setIndexToImageClicked = (imageIndex) => {
    const itemHeight = getScrollItemHeight();
    scrollableDivRef.current.scrollTop = imageIndex * itemHeight;
  };

  const updateImageIndexOnScroll = () => {
    const itemHeight = getScrollItemHeight();

    // Calculate the scroll position of the scrolable div
    const scrollPosition = scrollableDivRef.current.scrollTop;

    // Calculate the image index based on scroll position
    const newImageIndex = Math.floor(scrollPosition / itemHeight);

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
                  <div id="imageContainer" className="flex h-[200px] items-center sm:h-[300px] lg:h-[40vh]">
                    <img
                      className="max-h-[100%] max-w-xs rounded-md shadow-md shadow-dark sm:max-w-md lg:max-w-[100%]"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="mt-2 flex items-center">
                    <p className="text-start">{project.description}</p>
                    <GithubLink href={project.githubLink} />
                  </div>
                </div>
              ))}
              {/* empty div used to add a marge after the last picture, fix the last picture being pushed on chrome (the lg:last:mb-80 does not work on chrome for some reason) */}
              <div className="h-[100px]"></div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
