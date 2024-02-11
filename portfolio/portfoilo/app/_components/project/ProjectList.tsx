'use client';

import { ProjectThumbnailType } from '@/app/_types/common.types';
import ProjectThumbnail from './ProjectThumbnail';

const ProjectList = () => {
  const projects: ProjectThumbnailType[] = [
    {
      title: '흘깃',
      description: 'GitHub를 통한 유용한 서비스 공유 SNS, 😽 흘깃',
      imageUrl: '/images/project/thumbnail-hulgit.png',
      skillStack: [
        'React',
        'TypeScript',
        'React-query',
        'Redux',
        'styled-components',
      ],
    },
    {
      title: '맹맹게임랜드',
      description: '모두 함께 즐겨요, 🎢 맹맹게임랜드',
      imageUrl: '/images/project/thumbnail-mm-gameland.png',
      skillStack: ['Next.js', 'TypeScript', 'Recoil', 'styled-components'],
    },
    {
      title: '맹맹마블',
      description: '게임으로 금융 문맹 탈출! 🌍 맹맹마블',
      imageUrl: '/images/project/thumbnail-mm-marble.png',
      skillStack: ['React', 'TypeScript', 'Recoil', 'TailwindCss'],
    },
  ];

  return (
    <div className="flex flex-wrap gap-[4px] justify-between px-[120px] mt-[160px] mb-[60px] h-full">
      {projects.map((project) => {
        return <ProjectThumbnail key={project.title} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
