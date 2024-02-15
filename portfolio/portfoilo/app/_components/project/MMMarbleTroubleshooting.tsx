import Image from 'next/image';

const MMMarbleTroubleshooting = () => {
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
            Vite로 세팅한 프로젝트가 webscoket 통신이 안되는 문제가
            발생했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">🌟 해결 과정</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            {`우선 문제 파악을 하기위해서 websocket과 Vite 키워드를 검색하여 자료를 찾아보았습니다.
같은 문제를 겪은 블로그를 참고하여 CRA로 만든 프로젝트는 정상적으로 작동한다는 정보를 얻었습니다.
직접 CRA로 프로젝트를 만들어 테스트를 해본 결과 정상적으로 작동하는것을 확인했습니다.`}
          </div>
          <div className="flex items-center my-[12px] ml-[12px] w-full justify-center">
            <div className="h-[240px] overflow-hidden mr-[60px] flex-col justify-center">
              <Image
                className="mt-[20px]"
                src="/images/project/mmmarble/troubleshooting-1.png"
                alt=""
                width={380}
                height={220}
              />
              <div className="font-[400] text-[16px] mt-[20px] text-center">{`< CRA로 만든것 >`}</div>
            </div>
            <div className="h-[240px] overflow-hidden">
              <Image
                className=""
                src="/images/project/mmmarble/troubleshooting-2.png"
                alt=""
                width={380}
                height={220}
              />
              <div className="font-[400] text-[16px] mt-auto text-center">{`< Vite로 만든것 >`}</div>
            </div>
          </div>
          <div className="font-[400] text-[16px] ml-[12px]">
            기존에 사용해왔던 방식은 SockJS를 이용하는 방식으로 백엔드에 연결
            요청을 할때 http나 https로 요청을 보내면 자동으로 서버에서 그 요청을
            ws나 wss, 즉 웹 소켓 프로토콜로 변경하여 작업을 처리해주는
            방식이었습니다. 하지만 Vite로 생성한 프로젝트에서는 http로 웹소켓
            통신이 보내지지 않았고 그래서 SockJs를 사용하지 않고 그냥
            websocket만 이용하는 방식으로 바꾸어서 문제를 해결했습니다.
          </div>
        </div>
        <div className="flex-col mt-[32px]">
          <div className="text-[20px] font-[600] mb-[8px]">✏️ 알게된 점</div>
          <div className="font-[400] text-[16px] ml-[12px]">
            새로운 기술을 도입할때는 기존에 사용하고 있던 기술과의 호환성 문제에
            대해서 미리 확인을 할 필요가 있다는 것을 배울 수 있었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MMMarbleTroubleshooting;
