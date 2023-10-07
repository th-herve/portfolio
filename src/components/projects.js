import { projects } from '../data/data_projects';
import Title from './utils/title';
import GithubLink from './utils/github_link';

export default function Projects() {
  return (
    <>
      <div className="overflow-x-hidden bg-gray py-5">
        <div className="px-20">
          <Title titleText="My projects" mb="0" />
        </div>
        <div className="flex snap-x snap-mandatory overflow-x-auto text-white" style={{ scrollbarWidth: 'none' }}>
          <div className="flex px-[20%]">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="mx-10 my-5 flex min-w-[300px] snap-center flex-col items-center sm:min-w-[400px]"
              >
                <h1 className="text-2xl">{project.title}</h1>
                <div id="imageContainer" className="h-[200px] sm:h-[300px]">
                  <img
                    className="max-h-[100%] max-w-xs rounded-md shadow-md shadow-dark sm:max-w-md"
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
    </>
  );
}
