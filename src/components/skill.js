import { skills } from '../data/data_skills';
import SkillBox from './utils/skillBox';
import Title from './utils/title';

export default function Skill() {
  return (
    <div
      id="main-section"
      className="flex min-h-screen w-screen flex-col items-center justify-center bg-dark text-cyan"
    >
      <div id="black-box" className="mb-12 w-[85%] rounded-md bg-black px-3 py-10 lg:w-[70%]">
        <div className="flex flex-col items-center">
          <div>
            <Title titleText="Skills" />
            {Object.keys(skills).map((category) => (
              <div id="category-container" key={category} className="mb-10">
                <h3 id="category-title" className="text-2xl">
                  {category}
                </h3>

                <div id="category-skills" className="flex flex-wrap gap-3 lg:gap-10">
                  {skills[category].map((skill, index) =>
                    skill.show ? (
                      <div key={'icon' + index}>
                        <SkillBox IconComponent={skill.icon} />
                      </div>
                    ) : (
                      ''
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
