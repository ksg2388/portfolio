'use client';

import { themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import skills from '@/app/_constants/skills';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const TechnologyStack = () => {
  const [scope, animate] = useAnimate();
  const theme = useRecoilValue(themeState);
  const [isAction, setIsAction] = useState(false); // 애니메이션이 동작하는 중에는 true
  const [selectedSkill, setSelectedSkill] = useState<null | 'FE' | 'BE'>(null);
  const [focusSkill, setFocusSkill] = useState<null | {
    name: string;
    description: string;
  }>(null);

  const handleFrontend = () => {
    if (isAction) return;

    setIsAction(true);
    if (selectedSkill !== 'FE') {
      setSelectedSkill('FE');

      animate(
        [
          [
            scope.current,
            {
              x: ['0%', '42%'],
              y: ['0%', '3%'],
              opacity: [0, 1],
            },
            {
              type: 'spring',
              duration: 0.75,
            },
          ],
          [
            '.JavaScript',
            { x: ['0%', '-320%'], y: ['0%', '0%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.React',
            { x: ['0%', '-260%'], y: ['0%', '-130%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.TypeScript',
            { x: ['0%', '-140%'], y: ['0%', '-210%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.NextJs',
            { x: ['0%', '0%'], y: ['0%', '-250%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.styledComponents',
            { x: ['0%', '140%'], y: ['0%', '-210%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.Recoil',
            { x: ['0%', '260%'], y: ['0%', '-130%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.Emotion',
            { x: ['0%', '320%'], y: ['0%', '0%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.TailwindCss',
            { x: ['0%', '260%'], y: ['0%', '130%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.ReactQuery',
            { x: ['0%', '140%'], y: ['0%', '210%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.Redux',
            { x: ['0%', '0%'], y: ['0%', '250%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.Sass',
            { x: ['0%', '-140%'], y: ['0%', '210%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
          [
            '.VueJs',
            { x: ['0%', '-260%'], y: ['0%', '130%'] },
            {
              type: 'spring',
              duration: 0.3,
            },
          ],
        ],
        {
          onComplete: () => {
            setIsAction(false);
          },
        }
      );
    } else {
      setSelectedSkill(null);

      animate(
        [
          [
            '.VueJs',
            { x: ['-260%', '0%'], y: ['130%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.Sass',
            { x: ['-140%', '0%'], y: ['210%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.Redux',
            { x: ['0%', '0%'], y: ['250%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.ReactQuery',
            { x: ['140%', '0%'], y: ['210%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.TailwindCss',
            { x: ['260%', '0%'], y: ['130%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.Emotion',
            { x: ['320%', '0%'], y: ['0%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.Recoil',
            { x: ['260%', '0%'], y: ['-130%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.styledComponents',
            { x: ['140%', '0%'], y: ['-210%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.NextJs',
            { x: ['0%', '0%'], y: ['-250%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.TypeScript',
            { x: ['-140%', '0%'], y: ['-210%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.React',
            { x: ['-260%', '0%'], y: ['-130%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            '.JavaScript',
            { x: ['-320%', '0%'], y: ['0%', '0%'] },
            {
              type: 'spring',
              duration: 0.25,
            },
          ],
          [
            scope.current,
            { x: ['42%', '0%'], y: ['3%', '0%'], opacity: [1, 0] },
            {
              type: 'spring',
              duration: 0.5,
            },
          ],
        ],
        {
          onComplete: () => {
            setIsAction(false);
          },
        }
      );
    }
  };

  const handleMouseOver = (name: string) => {
    if (isAction) return;

    if (name === 'Vue.js') {
      setFocusSkill({
        name,
        description: `간단한 웹페이지를 만들고 유지보수 할 수 있습니다.\nVue의 생명주기를 이해하고 있습니다.`,
      });
      return;
    }
    if (name === 'Sass') {
      setFocusSkill({
        name,
        description: `Sass를 사용하여 반응형 디자인을 해봤습니다.`,
      });
      return;
    }
    if (name === 'Redux') {
      setFocusSkill({
        name,
        description: `Redux Toolkit을 사용하여 전역 상태관리를 해봤습니다.\nRedux를 사용하여 전역 상태관리를 해봤습니다.`,
      });
      return;
    }
    if (name === 'react-query') {
      setFocusSkill({
        name,
        description: `React-query를 사용하여 infinity-scroll을 구현해봤어요.\nreact-query의 캐싱을 이용해 성능을 개선해봤어요.`,
      });
      return;
    }
    if (name === 'Tailwind Css') {
      setFocusSkill({
        name,
        description: `Tailwind Css를 사용하여 원하는 인터페이스를 빠르게 구축하고 유지보수 할 수 있습니다.`,
      });
      return;
    }
    if (name === 'Emotion') {
      setFocusSkill({
        name,
        description: `Emotion 사용하여 재사용 가능한 컴포넌트를 만들어봤어요.`,
      });
      return;
    }
    if (name === 'Recoil') {
      setFocusSkill({
        name,
        description: `Recoil을 사용하여 전역으로 상태관리를 해봤습니다.`,
      });
      return;
    }
    if (name === 'styled-components') {
      setFocusSkill({
        name,
        description: `styled-components를 사용하여 재사용 가능한 컴포넌트를 만들어봤어요.\nS-dot naming 방식을 사용해서 스타일 컴포넌트와 일반 컴포넌트를 구분하여 사용해봤습니다.`,
      });
      return;
    }
    if (name === 'Next.js') {
      setFocusSkill({
        name,
        description: `포트폴리오 사이트와 PWA를 이용한 웹앱을 만들었습니다.\nNext.js를 사용해 검색 최적화 경험이 있습니다.`,
      });
      return;
    }
    if (name === 'TypeScript') {
      setFocusSkill({
        name,
        description: `TypeScript를 이용하여 서비스의 안정성을 향상시켰습니다.`,
      });
      return;
    }
    if (name === 'React') {
      setFocusSkill({
        name,
        description: `presentational & container 디자인 패턴, Atomic 디자인 패턴을 적용하여 프로젝트를 진행해봤습니다.\nWebSocket을 이용한 실시간 통신을 이용한 프로젝트를 경험해봤습니다.`,
      });
      return;
    }
    if (name === 'JavaScript') {
      setFocusSkill({
        name,
        description: `JavaScript를 이용하여 알고리즘 문제를 해결할 수 있습니다.\n이벤트 루프, 비동기 처리 등 자바스크립트의 동작 원리에 대해 이해하고 있습니다.`,
      });
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="w-full text-center mt-[80px] font-bold text-[48px]">
        Skills
      </h2>
      <div className="flex flex-1 relative">
        <button
          className="absolute flex items-center top-[40%] left-[5%] translate-y-[-40%] justify-center rounded-[50%] w-[100px] h-[100px] cursor-pointer text-[16px] z-[3] shadow-lg"
          onClick={handleFrontend}
          type="button"
          style={{
            border: '4px solid transparent',
            backgroundImage: `${
              theme === 'LIGHT_MODE'
                ? 'linear-gradient(#fff, #fff)'
                : 'linear-gradient(#1B1D25, #1B1D25)'
            }, linear-gradient(45deg, #b6b7ff 0%,  #191765 100%)`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
          }}
        >
          front-end
        </button>
        <ul className="absolute flex w-full h-full z-[1]" ref={scope}>
          {skills.map((skill) => {
            return (
              <li
                className={`${skill.type} absolute flex flex-col items-center justify-center top-[40%] left-[5%] translate-y-[-40%] rounded-[50%] 
                w-[100px] h-[100px] cursor-pointer font-medium text-[12px]`}
                key={skill.type}
                style={{
                  border: '4px solid transparent',
                  borderRadius: '50%',
                  backgroundImage: `${
                    theme === 'LIGHT_MODE'
                      ? 'linear-gradient(#fff, #fff)'
                      : 'linear-gradient(#1B1D25, #1B1D25)'
                  }, linear-gradient(45deg, #b6b7ff 0%,  #191765 100%)`,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box',
                }}
                onMouseOver={() => {
                  return handleMouseOver(skill.name);
                }}
                onMouseLeave={() => {
                  setFocusSkill(null);
                }}
                onFocus={() => {}}
              >
                <Image
                  src={images.logo[skill.img]}
                  alt=""
                  width={32}
                  height={32}
                />
              </li>
            );
          })}
        </ul>
        {focusSkill && (
          <div className="absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[220px] w-[320px] p-[16px] rounded-[24px] bg-grey-0 dark:bg-grey-800 shadow-lg">
            <div className="text-[16px] font-[600] bg-grey-50 dark:bg-grey-700 rounded-[24px] px-[12px] py-[8px] w-fit">
              {focusSkill?.name}
            </div>
            <div className="p-[8px] my-[4px] text-[15px] font-medium whitespace-pre-wrap leading-6">
              {focusSkill?.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyStack;
