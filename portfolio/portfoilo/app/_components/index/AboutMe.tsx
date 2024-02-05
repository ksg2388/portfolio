'use client';

import { themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const AboutMe = () => {
  const themeMode = useRecoilValue(themeState);

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="w-full text-center mt-[120px] font-bold text-[48px]">
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
