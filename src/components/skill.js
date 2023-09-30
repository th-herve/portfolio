import { FaReact, FaHtml5 } from 'react-icons/fa6';

const iconComponent = [FaReact, FaHtml5];

export default function Skill() {
  const iconSize = 50;
  return (
    <div
      className="
                    bg-dark
                    p-8 text-cyan"
    >
      <div className="flex rounded-md bg-black p-3">
        {iconComponent.map((IconC, index) => (
          <div className="rounded-md bg-gray p-2" key={'icon' + index}>
            <IconC size={iconSize} />
          </div>
        ))}
      </div>
    </div>
  );
}
