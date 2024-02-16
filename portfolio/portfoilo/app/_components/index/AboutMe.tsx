'use client';

import { themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const AboutMe = () => {
  const themeMode = useRecoilValue(themeState);

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="w-full text-center mt-[80px] font-bold text-[48px]">
        About Me
      </h2>
      <div className="flex items-center flex-1 mx-[auto]">
        <div className="ml-[160px] mr-[120px]">
          <Image
            className="rounded-[50%]"
            src={images.common.profile}
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center mx-auto gap-[32px] mr-[60px]">
          <div className="flex">
            <Image
              src={
                themeMode === 'LIGHT_MODE'
                  ? images.common.name
                  : images.common.nameWhite
              }
              alt="name"
              width={28}
              height={28}
            />
            <div className="text-[24px] font-medium text-center w-[140px]">
              이름
            </div>
            <div className="text-[22px] font-[400] ml-[24px]">김상근</div>
          </div>
          <div className="flex">
            <Image
              src={
                themeMode === 'LIGHT_MODE'
                  ? images.common.phone
                  : images.common.phoneWhite
              }
              alt="phone_number"
              width={28}
              height={28}
            />
            <div className="text-[24px] font-medium text-center w-[140px]">
              연락처
            </div>
            <div className="text-[22px] font-[400] ml-[24px]">
              010-7674-2388
            </div>
          </div>
          <div className="flex">
            <Image
              src={
                themeMode === 'LIGHT_MODE'
                  ? images.common.email
                  : images.common.emailWhite
              }
              alt="email"
              width={28}
              height={28}
            />
            <div className="text-[24px] font-medium text-center w-[140px]">
              이메일
            </div>
            <div className="text-[22px] font-[400] ml-[24px]">
              ksg2388@naver.com
            </div>
          </div>
          <div className="flex">
            <Image
              src={
                themeMode === 'LIGHT_MODE'
                  ? images.common.graduation
                  : images.common.graduationWhite
              }
              alt="graduation"
              width={28}
              height={28}
            />
            <div className="text-[24px] font-medium text-center w-[140px]">
              학력
            </div>
            <div className="text-[22px] font-[400] ml-[24px]">
              경북대학교 글로벌SW융합전공(졸업)
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined mr-[0px] text-[32px]">
              link
            </span>
            <div className="text-[24px] font-medium text-center w-[140px]">
              추가 정보
            </div>
            <Link
              className="ml-[12px] relative group"
              href="https://github.com/ksg2388"
              target="_blank"
            >
              <div className="absolute top-[-24px] right-[-24px] rounded-[8px] px-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[12px] font-[400] bg-grey-50 dark:bg-grey-700">
                깃허브
              </div>
              <Image
                className="rounded-[50%]"
                src={
                  themeMode === 'LIGHT_MODE'
                    ? '/images/logo/logo-github.png'
                    : '/images/logo/logo-github-white.png'
                }
                alt=""
                width={40}
                height={40}
              />
            </Link>
            <Link
              className="ml-[16px] relative group"
              href="https://velog.io/@ksg2388/posts"
              target="_blank"
            >
              <div className="absolute top-[-24px] right-[-24px] rounded-[8px] px-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[12px] font-[400] bg-grey-50 dark:bg-grey-700">
                블로그
              </div>
              <Image
                className="rounded-[50%]"
                src="/images/logo/logo-velog.png"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
