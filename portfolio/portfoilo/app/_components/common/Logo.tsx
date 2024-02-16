'use client';

import { pageState, themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import useLoad from '@/app/_hooks/useLoad';
import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Logo = () => {
  const theme = useRecoilValue(themeState);
  const setPage = useSetRecoilState(pageState);
  const isLoad = useLoad();

  return (
    <Link
      href="/"
      onClick={() => {
        setPage(0);
      }}
    >
      {isLoad && (
        <Image
          className="absolute z-10 mt-[66px] ml-[84px]"
          src={
            theme === 'DARK_MODE'
              ? images.common.logoWhite
              : images.common.logoBlack
          }
          alt="goHome"
          width={66}
          height={32}
        />
      )}
    </Link>
  );
};

export default Logo;
