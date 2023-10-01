import { skills } from '../data';

export default function Skill() {
  return (
    <div className="mb-12 flex w-screen flex-col items-center bg-dark text-cyan">
      <div className="mb-12 w-[85%] rounded-md bg-black p-3">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-4xl font-bold">Skill</h2>
            {Object.keys(skills).map((category) => (
              <div key={category}>
                <h3>{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills[category].map((skill) => (
                    <div key={'icon' + skill}>
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

// <div className="mb-12 grid w-[85%] grid-cols-5 place-items-center gap-6 rounded-md bg-black p-3">
// {iconComponents.map((IconC, index) => (
//   <div className="flex" key={'icon' + index}>
//     <div className="rounded-md bg-gray p-2">
//       <IconC size="4rem" />
//     </div>
//   </div>
// ))}
