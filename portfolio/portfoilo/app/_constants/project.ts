import { ProjectType } from '../_types/common.types';

const projects: ProjectType[] = [
  {
    id: 1,
    title: '흘깃',
    description: 'GitHub를 통한 유용한 서비스 공유 SNS, 😽 흘깃',
    imageUrl: '/images/project/thumbnail-hulgit.png',
    skillStack: [
      { name: 'React', src: '/images/logo/logo-react.png' },
      { name: 'TypeScript', src: '/images/logo/logo-typescript.png' },
      { name: 'React-query', src: '/images/logo/logo-react-query.png' },
      { name: 'Redux', src: '/images/logo/logo-redux.png' },
      {
        name: 'styled-components',
        src: '/images/logo/logo-styled-components.png',
      },
    ],
    service:
      'GitHub Rest API를 이용한 추천 Repo를 피드로 보여주는 개발자들의 SNS',
    startDate: '2023.07.04',
    endDate: '2023.08.18',
    link: [
      {
        url: 'https://github.com/Jungu12/Heulgit',
        src: '/images/logo/logo-github.png',
        darkSrc: '/images/logo/logo-github-white.png',
      },
    ],
    members: 'FE 3, BE 3',
    contribution: [
      {
        mainContent: '메인 화면 구성',
        subContents: [
          '다양한 카테고리(날짜, 언어, 스타 많은 순 등) 선택별로 관련 피드 불러오기 기능 구현',
          'react-query를 이용해 Infinity Scroll 구현',
          'react-query의 캐싱 기능을 통해 사용자 경험 개선',
          'react-markdown 라이브러리를 이용해 api를 이용해 불러온 README 파일을 요약 알고리즘을 통해 미리보기 형태로 제공',
          'BottomSheet를 통해 상세페이지에 가지 않고 편리하게 댓글 보기 및 작성이 가능하도록 구현',
        ],
      },
      {
        mainContent: '피드 상세보기 화면 구성',
        subContents: [
          'react-markdown 라이브러리를 이용하여 인코딩되어있는 README 파일을 받아 디코딩 후 태그별로 css를 이용하여 사용자가 보기 편하도록 제공',
          '멘션 기능을 통해 댓글 및 게시글에서 언급이 가능하도록 구현',
        ],
      },
      {
        mainContent: 'GM(1:1 채팅) 구현',
        subContents: [
          'websocket을 이용하여 실시간 1:1 채팅 구현',
          '채팅 목록에서 마지막 메시지를 기준으로 최신 대화 순으로 내림차순 정렬하여 보여주도록 구현',
        ],
      },
      {
        mainContent: '통합 검색 화면 구현',
        subContents: ['캐싱을 이용해 중복된 검색 결과에 대한 빠른 정보 제공'],
      },
      {
        mainContent: '재사용 가능한 공통 컴포넌트 개발',
        subContents: [
          'react-spring-bottom-sheet 라이브러리를 사용해 Bottom Sheet 구현',
          'Header 구현',
          'Loading 구현',
          '반응형 UI 제공을 위해서 react-responsive 라이브러리를 사용하여 MediaQuery 구현',
          'SideBar 구현',
        ],
      },
      {
        mainContent: '생상성 향상 작업',
        subContents: [
          'axios 인스턴스화 및 모듈화를 통해 반복되는 코드량 최소화',
          'axios intersepter를 이용하여 Header에 반복적으로 담아야하는 token 작업 로직 개선',
        ],
      },
      {
        mainContent: '로그인 화면 구현',
        subContents: [
          'OAuth (깃허브 로그인)를 이용하여 사용자가 편하게 서비스를 이용할 수 있도록 함',
        ],
      },
      {
        mainContent: '코드리뷰 문화 도입',
        subContents: [
          '매일 30분씩 코드 리뷰를 통해 오늘 한 일에 대해 서로 코드 리뷰를 통해 코드 품질 향상',
        ],
      },
    ],
  },
  {
    id: 2,
    title: '맹맹게임랜드',
    description: '모두 함께 즐겨요, 🎢 맹맹게임랜드',
    imageUrl: '/images/project/thumbnail-mm-gameland.png',
    skillStack: [
      { name: 'Next.js', src: '/images/logo/logo-nextjs.png' },
      { name: 'TypeScript', src: '/images/logo/logo-typescript.png' },
      { name: 'Recoil', src: '/images/logo/logo-recoil.png' },
      {
        name: 'styled-components',
        src: '/images/logo/logo-styled-components.png',
      },
    ],
    service: '어디서든 즐길 수 있는 두뇌 심리 멀티플레이 게임 서비스',
    startDate: '2023.10.10',
    endDate: '2023.11.17',
    link: [
      {
        src: '/images/logo/logo-github.png',
        darkSrc: '/images/logo/logo-github-white.png',
        url: 'https://github.com/LEEILHO/MaengMaengGameLand',
      },
    ],
    members: 'FE 2, BE 4',
    contribution: [
      {
        mainContent: '무제한 보석 경매 게임 구현',
        subContents: [
          'Javascript 비동기 함수(setTimeout)를 이용해 라운드마다 디스플레이에 라운드 별 경매 보석과 낙찰자 정보 제공',
          'lottie를 이용해 보석 회전 애니메이션 제공',
          '컴포넌트별 prop-drilling을 피하기 위해 Recoil을 사용해 게임 정보 데이터 관리',
        ],
      },
      {
        mainContent: '홈 화면 구현',
        subContents: [
          '설정 기능을 통해 효과음, 배경음악을 on/off 할 수 있도록 구현 및 재접속 시에도 유지 되도록 localStorage에서 관리',
          'react-youtube 라이브러리를 이용하여 게임 소개 영상을 Dialog를 통해 볼 수 있도록 구현',
        ],
      },
      {
        mainContent: '로비 구현',
        subContents: [
          '게임 종류 및 티어 카테고리 별로 방 목록을 보여줄 수 있는 재사용 가능한 로비 컴포넌트 구현',
          '방 생성 모달창 구현',
        ],
      },
      {
        mainContent: '프로젝트 초기 세팅',
        subContents: [
          'Next.js 13을 이용한 프로젝트 초기 세팅',
          '편리한 버전 업데이트 및 아이폰, 안드로이드 환경에서 모두 사용가능하도록 하기 위해서 PWA 환경 설정',
        ],
      },
      {
        mainContent: '생산성 향상 적업',
        subContents: [
          '재사용 가능한 공통 컴포넌트 구현(Timer, Modal, Custom Button 구현)',
          '반복되는 로직 Custom Hook으로 분리를 통한 코드량 감소 (로직 분리 전 대비 코드량 20% 감소)',
        ],
      },
    ],
  },
  {
    id: 3,
    title: '맹맹마블',
    description: '게임으로 금융 문맹 탈출! 🌍 맹맹마블',
    imageUrl: '/images/project/thumbnail-mm-marble.png',
    skillStack: [
      { name: 'React', src: '/images/logo/logo-react.png' },
      { name: 'TypeScript', src: '/images/logo/logo-typescript.png' },
      { name: 'Recoil', src: '/images/logo/logo-recoil.png' },
      { name: 'TailwindCss', src: '/images/logo/logo-tailwindcss.png' },
    ],
    service:
      '금융취약층 교육을 위한 땅과 화폐의 가치가 실시간으로 변동하는 부루마블 게임 웹 서비스',
    startDate: '2023.08.31',
    endDate: '2023.10.06',
    link: [
      {
        src: '/images/logo/logo-github.png',
        darkSrc: '/images/logo/logo-github-white.png',
        url: 'https://github.com/Jungu12/MaengMaengMarble',
      },
    ],
    members: 'FE 3, BE 3',
    contribution: [
      {
        mainContent: '게임 대기실 구현',
        subContents: [
          'WebSocket을 이용해 대기실 실시간 채팅 구현',
          '유저 입장 애니메이션 구현',
        ],
      },
      {
        mainContent: '프로필(기본정보, 캐릭터 선택, 닉네임 변경) 구현',
        subContents: ['캐릭터 보유, 구매, 선택 여부에 따른 렌더링 구현'],
      },
      {
        mainContent: '부루마블 게임 화면 구현',
        subContents: [
          'JavaScript 비동기 처리를 통한 캐릭터 이동 로직 구현 및 캐릭터 이동 애니메이션 구현',
          '빌딩 건설 애니메이션 구현',
        ],
      },
      {
        mainContent: '앱 다운로드 페이지 구현',
        subContents: [
          'ios, android 기종을 탐자하여 기종에 맞는 웹앱 다운로드 가이드 페이지 가이드 화면 구현',
          '웹앱 다운로드(A2HS) 버튼 구현',
        ],
      },
      {
        mainContent: '크로스 브라우징 대응',
        subContents: [
          '사파리 ios, android 등의 환경에 모두 대응하기위해 크로스 브라우징 작업',
          'Android 가상 키보드 높이 조절 이슈 해결',
          'PWA ios 가로모드 설정이 안먹는 이슈 해결',
          'ios 브라우저 환경에서 A2HS(홈 화면에 추가) 버튼이 활성화 되지 않는 이슈 해결',
        ],
      },
    ],
  },
];

export default projects;
