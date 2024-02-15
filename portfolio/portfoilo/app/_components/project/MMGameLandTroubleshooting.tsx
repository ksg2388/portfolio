import Image from 'next/image';

const MMGameLandTroubleshooting = () => {
  return (
    <div className="flex-col mt-[72px]">
      <div className="font-[700] text-[24px] flex items-center mb-[20px]">
        <span className="material-symbols-outlined mr-[8px]">error</span>
        트러블 슈팅
      </div>
      <div className="flex-col mt-[40px] ml-[8px]">
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🚨 문제 배경</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            android에서는 가로모드 고정이 정상적으로 작동하는데 ios 환경에서
            가로모드 고정이 되지 않는 문제를 발견했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🌟 해결 과정</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            {`우선 문제 파악을 하기위해서 "orientation": "landscape", ios 라는
          키워드로 자료를 찾아보았습니다. PWA의 경우 ios에서 지원한지 오랜
          시간이 되지 않았기 때문에 몇몇 설정들이 제대로 작동하지 않는다는
          것을 알게되었습니다. Javascript를 통해 문제를 해결하기위해`}
          </div>
          <Image
            className="my-[12px] ml-[12px]"
            src="/images/project/mmgameland/troubleshooting-1.png"
            alt=""
            width={400}
            height={100}
          />
          <div className="font-[400] text-[16px] ml-[12px]">
            위 코드를 사용하려고 했으나 MDN 공식 문서를 보니 사파리 브라우저는
            orientation.lock 메서드를 지원하지 않았습니다. 기술적으로 문제
            해결이 어려워보여 ios 기종을 이용하고 있는 경우, 세로모드가 되면
            ‘저희 앱은 가로모드에서 최적화 되어있습니다.’ 라는 문구를 화면에
            오버레이 시키는 방법으로 문제를 해결했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">✏️ 알게된 점</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            브라우저 별로 지원하는 메서드들이 달라 공식문서를 우선적으로 꼼꼼히
            확인하는 습관을 들여야겠다는 것을 배웠습니다.
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-grey-800 dark:bg-grey-100 mt-[40px]" />
      <div className="flex-col mt-[40px] ml-[8px]">
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🚨 문제 배경</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            방 제목 입력 시 android환경에서 가상 키보드가 올라오면서 화면이
            깨지게 되는 문제를 발견했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🌟 해결 과정</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            우선 문제 파악을 하기위해서 android 가상 키보드 레이아웃이라는
            키워드로 자료를 찾아보았습니다. 찾아보니 브라우저에서 자동으로
            가상키보드 생성시 뷰포트의 크기를 자동 조절하면서 발생하는
            문제였다는 것을 알게 되었습니다. 이 문제를 해결하기위해 MDN 문서를
            찾아보고 가상 키보드API를 이용하여 기종이 android인 경우에만 css
            환경 변수를 이용해 modal 위치를 수정하는 방식으로 코드 변경하여
            문제를 해결하였습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">✏️ 알게된 점</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            브라우저별로 가상 키보드의 레이아웃 방식에 대한 기본 설정이 다르다는
            것을 알게 되었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MMGameLandTroubleshooting;
