import { useState } from 'react';

export default function SkillBox({ IconComponent, skillName, level, size = '4rem' }) {
  const [isShown, setIsShown] = useState(false);

  // set the mastery % of the skills when hovered
  const levelMeterWidth = { width: level };

  return (
    <>
      <div
        id="icon"
        className="relative rounded-md bg-gray p-2 dark:bg-dark_gray"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <IconComponent size={size} />

        {isShown && (
          <div
            id="legend"
            className="absolute bottom-24  left-0 right-0 m-auto rounded-md border-2 border-cyan bg-gray p-1 py-3 text-center dark:border-dark_cyan dark:bg-dark_gray"
            style={{ overflow: 'visible' }}
          >
            <p>{skillName}</p>
            <div className="h-2.5 w-full rounded-full border-bg2 bg-bg2 shadow-sm shadow-cyan dark:border-dark_bg2 dark:bg-dark_bg2 dark:shadow-dark_cyan">
              <div className="h-2.5 rounded-full bg-cyan dark:bg-dark_cyan " style={levelMeterWidth}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
