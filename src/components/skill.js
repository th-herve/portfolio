import { skills } from '../data/data_skills';
import Title from './utils/title';

export default function Skill() {
  return (
    <div className="mb-12 flex min-h-screen w-screen flex-col items-center bg-dark text-cyan">
      <div className="mb-12 w-[85%] rounded-md bg-black p-3 lg:w-[70%]">
        <div className="flex flex-col items-center">
          <div>
            <Title titleText="Skills" />
            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-10">
                <h3 className="text-2xl">{category}</h3>
                <div className="flex flex-wrap gap-3 lg:gap-10">
                  {skills[category].map((skill, index) => (
                    <div key={'icon' + index}>
                      <div className="rounded-md bg-gray p-2">
                        <skill.icon size="4rem" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
