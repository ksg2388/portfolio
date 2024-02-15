import Image from 'next/image';

const HeulgitTroubleshooting = () => {
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
            모바일 환경에서 테스트 시 높이 100vh가 적용되지 않아 스크롤이 생기는
            이슈가 발생했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🌟 해결 과정</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            우선 문제 파악을 하기위해서 100vh, 모바일 키워드를 검색하여 자료를
            찾아보았습니다. 모바일 브라우저에서 100vh는 상단 url을 입력(Browser
            Top Bar)하는 영역과 하단 네비게이션(Browser Bottom Bar) 영역의
            사이즈를 포함하기 때문 에 문제가 발생하는 것을 확인했습니다. 같은
            문제를 겪은 블로그를 참고하여 Javascript를 이용하여 동적으로 높이를
            계산하여 설정해주는 방법을 시도해보았습니다.
          </div>
          <Image
            className="my-[12px] ml-[12px]"
            src="/images/project/huelgit/troubleshooting-1.png"
            alt=""
            width={500}
            height={360}
          />
          <div className="font-[400] text-[16px] ml-[12px]">
            위와 같이 루트 경로에 동적으로 Screen화면을 계산하는 로직을
            추가해주었습니다.
          </div>
          <Image
            className="my-[12px] ml-[12px]"
            src="/images/project/huelgit/troubleshooting-2.png"
            alt=""
            width={400}
            height={300}
          />
        </div>
        <div className="font-[400] text-[16px] ml-[12px]">
          이후 100vh가 필요한 곳의 코드를 작성하여 문제를 해결했습니다.
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">✏️ 알게된 점</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            모바일 브라우저에서는 웹 브라우저에서 작용하던 옵션들이 다르게
            작용할 수 있다는 사실을 알게 되었습니다. 모바일 환경에서 동작하는
            서비스를 만들때는 모바일 환경에서 테스트를 철저하게 할 필요가 있다는
            사실을 배우게 되었습니다. 추후 주소 표시줄이 스크롤을 통해 축소가
            되건 노출이 되고 있건 상관 없이 현재 보여지는 뷰포트 높이를 동적으로
            가져오는 옵션인 dvh가 있다는 것을 알게 되었습니다. 하지만 dvh는 하위
            버전의 브라우저는 지원을 하지 않기 때문에 작업 환경을 고려하여
            알맞은 기술을 사용해야겠다는 것을 알게 되었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeulgitTroubleshooting;
