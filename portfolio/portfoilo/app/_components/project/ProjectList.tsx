'use client';

import projects from '@/app/_constants/project';
import ProjectThumbnail from './ProjectThumbnail';

type Props = {
  handleItem: (id: number) => void;
};

const ProjectList = ({ handleItem }: Props) => {
  return (
    <div className="flex flex-wrap gap-[4px] justify-between px-[120px] mt-[80px] mb-[60px] h-full">
      {projects.map((project) => {
        return (
          <ProjectThumbnail
            key={project.id}
            project={project}
            handleItem={handleItem}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
