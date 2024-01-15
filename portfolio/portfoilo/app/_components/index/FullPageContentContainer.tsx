'use client';

import { useEffect, useRef, useState } from 'react';
import IntroduceContainer from './IntroduceContainer';
import AboutMe from './AboutMe';
import TechnologyStack from './TechnologyStack';
import HonerAndAward from './HonerAndAward';
import ProjectDescription from './ProjectDescription';
import DotList from './DotList';

const DIVIDER_HEIGHT = 5;

const FullPageContentContainer = () => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current as HTMLDivElement; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같다
      console.log(timeoutRef.current);

      if (timeoutRef.current) return;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          console.log('현재 1페이지, down');

          outerRef.current?.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          console.log('현재 2페이지, down');
          outerRef.current?.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log('현재 3페이지, down');
          outerRef.current?.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(4);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          console.log('현재 4페이지, down');
          outerRef.current?.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(5);
        } else {
          // 현재 5페이지
          console.log('현재 5페이지, down');
          outerRef.current?.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(5);
        }
      } else if (deltaY < 0) {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          console.log('현재 1페이지, up');
          outerRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          console.log('현재 2페이지, up');
          outerRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log('현재 3페이지, up');
          outerRef.current?.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          console.log('현재 4페이지, up');
          outerRef.current?.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(3);
        } else {
          // 현재 5페이지
          console.log('현재 5페이지, up');
          outerRef.current?.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setCurrentPage(4);
        }
      }
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, 1500);
    };
    const outerDivRefCurrent = outerRef.current;

    outerDivRefCurrent?.addEventListener('wheel', wheelHandler);

    return () => {
      outerDivRefCurrent?.removeEventListener('wheel', wheelHandler);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="w-full overflow-y-auto h-screen scrollbar-hide"
      ref={outerRef}
    >
      <DotList currentPage={currentPage} />
      <IntroduceContainer />
      <div className="w-full h-[5px]" />
      <AboutMe />
      <div className="w-full h-[5px]" />
      <TechnologyStack />
      <div className="w-full h-[5px]" />
      <ProjectDescription />
      <div className="w-full h-[5px]" />
      <HonerAndAward />
    </div>
  );
};

export default FullPageContentContainer;
