'use client';

import { themeState } from '@/app/_atom/indexAtom';
import images from '@/app/_constants/images';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const HonerAndAward = () => {
  const themeMode = useRecoilValue(themeState);

  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="w-full text-center mt-[80px] font-bold text-[48px]">
        Career
      </h2>
      <div className="mt-[120px]">
        <div className="flex mt-[40px]">
          <Image
            className="bg-grey-0 dark:bg-grey-600 border-solid border-[1px] border-grey-100 dark:border-grey-800 rounded-[50%]"
            src={images.logo['ssafy']}
            alt=""
            width={140}
            height={140}
          />
          <div className="w-[1px] h-[140px] bg-grey-100 dark:bg-grey-600 mx-[60px]" />
          <div className="py-[8px]">
            <div className="font-[500] text-[24px]">
              삼성 청년 소프트웨어 아카데미
            </div>
            <div className="font-[400] text-[18px] text-grey-300 my-[6px]">
              2023.01.03 - 2023.12.31
            </div>
            <div className="font-[400] text-[18px]">
              {`삼성 청년 소프트웨어 아카데미(SSAFY) 교육 과정을 통해 기본적인 웹개발 지식을 배우고 3개의 프로젝트를 진행하며 협업 경험과 웹개발 능력을 키웠습니다.`}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <div className="flex mt-[40px]">
          <Image
            className="bg-grey-0 dark:bg-grey-600 border-solid border-[1px] border-grey-100 dark:border-grey-800 rounded-[50%]"
            src={images.logo['wim']}
            alt=""
            width={140}
            height={140}
          />
          <div className="w-[1px] h-[140px] bg-grey-100 dark:bg-grey-600 mx-[60px]" />
          <div className="py-[8px]">
            <div className="font-[500] text-[24px]">주식회사 윔</div>
            <div className="font-[400] text-[18px] text-grey-300 my-[6px]">
              2022.07.01 - 2022.08.30 (인턴))
            </div>
            <div className="font-[400] text-[18px]">
              {`프론트엔드 포지션을 맡아 2개월간 2개의 프로젝트를 진행했습니다. 그 과정에서 협업 능력과 실무 경험을 쌓았습니다.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HonerAndAward;
