'use client';

import { themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import useLoad from '@/app/_hooks/useLoad';
import Image from 'next/image';
import { useEffect, useLayoutEffect } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilState } from 'recoil';

const ThemeButton = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);
  const isLoad = useLoad();

  const handleTheme = () => {
    // html 태그를 가지고 옴
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;

    if (themeMode === 'DARK_MODE') {
      // 다크모드인 경우
      // className에서 dark를 제거
      htmlElement.classList.remove('dark');
      window.localStorage.setItem('ksg_theme', 'LIGHT_MODE');
      setThemeMode('LIGHT_MODE');
      return;
    }
    if (themeMode === 'LIGHT_MODE') {
      // 라이트모드인 경우, className에서 dark를 추가
      htmlElement.classList.add('dark');
      setThemeMode('DARK_MODE');
      window.localStorage.setItem('ksg_theme', 'DARK_MODE');
    }
  };

  useEffect(() => {
    console.log(themeMode);
  }, [themeMode]);

  useLayoutEffect(() => {
    const theme = themeMode;
    if (theme === 'DARK_MODE') {
      document.querySelector('html')?.classList.add('dark');
    }
  }, [themeMode]);

  return (
    isLoad && (
      <button
        className="absolute top-[24px] right-[24px] flex items-center justify-center"
        onClick={handleTheme}
        type="button"
      >
        <Image
          className=""
          src={
            themeMode === 'LIGHT_MODE'
              ? images.common.lightMode
              : images.common.darkMode
          }
          alt="theme"
          width={48}
          height={48}
        />
      </button>
    )
  );
};

export default ThemeButton;
