'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useAnimate } from 'framer-motion';
import { useState } from 'react';

const TechnologyStack = () => {
  const [scope, animate] = useAnimate();
  const [selectedSkill, setSelectedSkill] = useState<null | 'FE' | 'BE'>(null);

  const skills = ['NextJs', 'Typescript', 'React', 'Javascript'];

  const handleFrontend = () => {
    if (selectedSkill !== 'FE') {
      setSelectedSkill('FE');

      animate([
        [
          scope.current,
          {
            x: ['0%', '42%'],
            y: ['0%', '10%'],
            opacity: [0, 1],
          },
          {
            type: 'spring',
            duration: 0.75,
          },
        ],
        [
          '.Javascript',
          { x: ['0%', '-300%'], y: ['0%', '-250%'] },
          {
            type: 'spring',
            duration: 0.5,
          },
        ],
        [
          '.React',
          { x: ['0%', '300%'], y: ['0%', '-250%'] },
          {
            type: 'spring',
            duration: 0.5,
          },
        ],
        [
          '.Typescript',
          { x: ['0%', '-300%'], y: ['0%', '180%'] },
          {
            type: 'spring',
            duration: 0.5,
          },
        ],
        [
          '.NextJs',
          { x: ['0%', '300%'], y: ['0%', '180%'] },
          {
            type: 'spring',
            duration: 0.5,
          },
        ],
      ]);
    } else {
      setSelectedSkill(null);

      animate([
        [
          '.NextJs',
          { x: ['300%', '0%'], y: ['180%', '0%'] },
          {
            type: 'spring',
            duration: 0.25,
          },
        ],
        [
          '.Typescript',
          { x: ['-300%', '0%'], y: ['180%', '0%'] },
          {
            type: 'spring',
            duration: 0.25,
          },
        ],
        [
          '.React',
          { x: ['300%', '0%'], y: ['-250%', '0%'] },
          {
            type: 'spring',
            duration: 0.25,
          },
        ],
        [
          '.Javascript',
          { x: ['-300%', '0%'], y: ['-250%', '0%'] },
          {
            type: 'spring',
            duration: 0.25,
          },
        ],
        [
          scope.current,
          { x: ['42%', '0%'], y: ['10%', '-6%'], opacity: [1, 0] },
          {
            type: 'spring',
            duration: 0.4,
          },
        ],
      ]);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="w-full text-center mt-[80px] font-bold text-[48px]">
        Skills
      </h2>
      <div className="flex flex-1 relative">
        <button
          className="absolute flex items-center top-[40%] left-[5%] translate-y-[-40%] justify-center bg-[red] rounded-[50%] w-[100px] h-[100px] cursor-pointer"
          onClick={handleFrontend}
          type="button"
        >
          front-end
        </button>
        <ul className="absolute flex w-full h-full z-[-1]" ref={scope}>
          {skills.map((skill) => {
            return (
              <li
                className={`${skill} absolute flex items-center top-[40%] left-[5%] translate-y-[-40%] justify-center bg-[blue] rounded-[50%] w-[100px] h-[100px] cursor-pointer z-[-1]`}
                key={skill}
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechnologyStack;
