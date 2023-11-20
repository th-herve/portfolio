//
//  This page use two sources for its translation. The first is the data/translation.json file common to all others.
//  The second is the data/data_projects.js file which has entry for en and fr for each text. It allows to have all the projects text in the same file.

import { projects } from '../data/data_projects';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import Title from './utils/title';
import GithubLink from './utils/github_link';
import LiBig from './utils/liBig';

import { useRef, useEffect, useState } from 'react';

// Value of the first scrollable item that offset the calcul of the items height.
// Can be obtain with "document.getElementById('single-project-container-0').getBoundingClientRect().top;"
// But this value changes after the user start scrolling and messed up everything. So for now it's easier to hard code it.
const SCROLL_OFFSET = 160;

export default function Projects() {
  const [imageIndex, setImageIndex] = useState(0);
  const scrollableDivRef = useRef();
  const descriptionRef = useRef({});
  const titleRef = useRef({});
  const projectsLinksRef = useRef({});

  const { t } = useTranslation();

  // module with all the scroll related function
  const scroll = (() => {
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

    return {
      setIndexToImageClicked,
      updateImageIndexOnScroll,
    };
  })();

  // Update projects text on language change. Note: not 100% sure if the i18n.language should be included in the dependency array(it works without it).
  useEffect(() => {
    projects.map((project, i) => {
      const projectDescElem = descriptionRef.current[i];
      const projectTitleElem = titleRef.current[i];
      const projectsLinksElem = projectsLinksRef.current[i];

      projectTitleElem.innerHTML = project.title[i18n.language];
      projectDescElem.innerHTML = project.description[i18n.language];
      projectsLinksElem.innerHTML = project.title[i18n.language];
    });
  }, [i18n.language]);

  return (
    <div className="h-screen overflow-x-hidden py-5">
      <div className="px-20">
        <Title titleText={t('projects.title')} mb="0" />
      </div>
      <div id="flex-wraper-lg" className="lg:ml-[10%] lg:flex lg:h-screen lg:items-center lg:justify-items-start">
        <div className="lg:flex lg:max-h-[60%] lg:justify-center lg:gap-28 lg:overflow-y-hidden">
          {/* list of links to the differents projects, only visible on desktop */}
          <ul id="titlesList" className="hidden pt-0 text-2xl text-text dark:text-dark_text lg:flex lg:flex-col">
            {projects.map((project, projectIndex) => (
              <button key={'project-link-' + projectIndex} onClick={() => scroll.setIndexToImageClicked(projectIndex)}>
                <LiBig
                  ref={(elem) => (projectsLinksRef.current[projectIndex] = elem)}
                  key={'li' + projectIndex}
                  text={project.title[i18n.language]}
                  selected={projectIndex == imageIndex ? true : false}
                />
              </button>
            ))}
          </ul>

          <div
            id="all-projects-container"
            ref={scrollableDivRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth text-text dark:text-dark_text lg:snap-y"
            style={{ scrollbarWidth: 'none' }}
            onScroll={scroll.updateImageIndexOnScroll}
          >
            <div className="flex px-[20%] lg:block lg:px-8">
              {projects.map((project, projectIndex) => (
                <div
                  id={'single-project-container-' + projectIndex}
                  key={'div-' + projectIndex}
                  className="mx-10 my-5 flex min-w-[300px] snap-center flex-col items-center sm:min-w-[400px] lg:my-40 lg:snap-start lg:last:mb-80" // gap between desktop images and on last
                >
                  <h1 ref={(elem) => (titleRef.current[projectIndex] = elem)} className="text-2xl lg:hidden">
                    {project.title[i18n.language]}
                  </h1>
                  <div id="imageContainer" className="flex h-[200px] items-center sm:h-[300px] lg:h-[40vh]">
                    <img
                      className="dark:dark_bg2 max-h-[100%] max-w-xs rounded-md shadow-md shadow-bg2 dark:shadow-dark_bg2 sm:max-w-md lg:max-w-[100%]"
                      src={project.image}
                      alt={project.title[i18n.language]}
                    />
                  </div>
                  <div className="mt-2 flex max-w-[700px] gap-3">
                    <p ref={(elem) => (descriptionRef.current[projectIndex] = elem)} className="text-start">
                      {project.description[i18n.language]}
                    </p>
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
