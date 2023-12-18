'use client';

import useInterval from '@/app/_hooks/useInterval';
import { useState } from 'react';

const IntroduceContent = () => {
  const [landingContent, setLandingContent] = useState('');
  const [count, setCount] = useState(0); // 문자열의 인덱스를 저장할 변수
  const completedContent = `사용자와 가장 가까이 닿아있는 프론트엔드를 좋아합니다.\n사용자의 적극적인 피드백을 환영합니다.`;
  // const completedContent = '테스트용';

  useInterval(() => {
    if (count >= completedContent.length) {
      return;
    }
    setLandingContent((prevContent) => {
      // 빈 문자열("")은 false이므로 completedTitle의 가장 앞 글자가 result에 할당된다.
      // 그 뒤로는 landingTitle이 빈 문자열이 아니므로
      // 이전에 존재하던 것과 count번 인덱스에 존재하는 문자열을 합쳐서
      // 다시 result에 할당한다.
      const result = prevContent
        ? prevContent + completedContent[count]
        : completedContent[0];

      // 연산된 result를 반환한다.
      return result;
    });
    // count를 증가시킨다.
    setCount((prev) => {
      return prev + 1;
    });
  }, 100);

  return (
    <section className="ml-[160px] flex flex-col">
      <h5 className="text-[72px] font-extrabold tracking-[4px] mb-[48px]">
        안녕하세요, 저는
      </h5>
      <div className="h-[60px]">
        <p className="text-[24px] font-medium mb-[12px] tracking-[2px] whitespace-pre inline leading-10 animate-typingCursor">
          {landingContent}
        </p>
      </div>
    </section>
  );
};

export default IntroduceContent;
