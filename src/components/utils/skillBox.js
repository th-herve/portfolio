import { useState } from 'react';

export default function SkillBox({ IconComponent, skillName, level, size = '4rem' }) {
  const [isShown, setIsShown] = useState(false);
  const levelMeterWidth = { width: level };

  return (
    <>
      <div
        id="icon"
        className="relative rounded-md bg-gray p-2"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <IconComponent size={size} />

        {isShown && (
          <div id="legend" className="absolute bottom-24 left-0 right-0 m-auto rounded-md bg-gray p-3 text-center">
            <p>{skillName}</p>
            <div className="h-2.5 w-full rounded-full border-dark bg-dark shadow-md shadow-cyan">
              <div className="h-2.5 rounded-full bg-cyan " style={levelMeterWidth}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
