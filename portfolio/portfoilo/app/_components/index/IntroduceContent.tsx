'use client';

import useInterval from '@/app/_hooks/useInterval';
import { useState } from 'react';

const IntroduceContent = () => {
  const [landingContent, setLandingContent] = useState('');
  const [count, setCount] = useState(0); // 문자열의 인덱스를 저장할 변수
  const [contentIndex, setContentIndex] = useState(0);
  const [mode, setMode] = useState<'TYPING' | 'DELETE'>('TYPING');
  const [time, setTime] = useState(100);
  const completedContent = [
    `사용자와 가장 가까이 닿아있는 프론트엔드를 좋아합니다.\n사용자의 적극적인 피드백을 환영합니다.`,
    `새로운 시도를 해보는 것을 좋아합니다.\n직접 사용해보고 겪어가며 배우는 것을 좋아합니다.`,
    `효율적인 설계에 관심이 많습니다.\n가독성 좋고 재사용 가능한 코드에 대해 늘 고민합니다.`,
  ];

  useInterval(() => {
    if (count >= completedContent[contentIndex].length && mode === 'TYPING') {
      setTime(2000);
      setMode('DELETE');
      return;
    }

    if (mode === 'TYPING') {
      if (time !== 100) {
        setTime(100);
      }
      // 글자 입력 애니메이션 시작
      setLandingContent((prevContent) => {
        // 빈 문자열("")은 false이므로 completedTitle의 가장 앞 글자가 result에 할당된다.
        // 그 뒤로는 landingTitle이 빈 문자열이 아니므로
        // 이전에 존재하던 것과 count번 인덱스에 존재하는 문자열을 합쳐서
        // 다시 result에 할당한다.
        const result = prevContent
          ? prevContent + completedContent[contentIndex][count]
          : completedContent[contentIndex][0];

        // 연산된 result를 반환한다.
        return result;
      });
      // count를 증가시킨다.
      setCount((prev) => {
        return prev + 1;
      });
    }
    if (mode === 'DELETE') {
      if (time !== 40) {
        setTime(40);
      }

      // 다 지운 경우
      if (count === 0) {
        setTime(500);
        setContentIndex((prev) => {
          if (prev + 1 === completedContent.length) {
            return 0;
          }
          return prev + 1;
        });
        setLandingContent('');
        setCount(0);
        setMode('TYPING');
        return;
      }

      setLandingContent((prevContent) => {
        const result = prevContent.substring(0, prevContent.length - 1);
        return result;
      });
      setCount((prev) => {
        return prev - 1;
      });
    }
  }, time);

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h5 className="text-[72px] font-extrabold tracking-[4px] mb-[48px]">
        안녕하세요, 저는
      </h5>
      <div className="h-[60px] text-center">
        <p className="text-[24px] font-medium mb-[12px] tracking-[2px] whitespace-pre inline leading-10 animate-typingCursor">
          {landingContent}
        </p>
      </div>
    </div>
  );
};

export default IntroduceContent;
