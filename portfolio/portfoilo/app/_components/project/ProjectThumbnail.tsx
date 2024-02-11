import { ProjectThumbnailType } from '@/app/_types/common.types';
import Image from 'next/image';

type Props = {
  project: ProjectThumbnailType;
};

const ProjectThumbnail = ({ project }: Props) => {
  return (
    <div className="flex flex-col w-[30%] h-full rounded-[16px] overflow-hidden transition-transform duration-300 hover:scale-[1.03] shadow-lg dark:bg-grey-800">
      <div className="w-full h-[50%] overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={project.imageUrl}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="mt-[24px] text-[24px] px-[12px]">{project.title}</div>
      <div className="mt-[12px] text-[18px] px-[12px] font-medium">
        {project.description}
      </div>
      <div className="flex-col px-[12px] mt-auto mb-[20px]">
        <div className="mb-[8px] text-[16px]">사용 기술</div>
        <div className="flex flex-wrap gap-[8px]">
          {project.skillStack.map((skill) => {
            return (
              <div
                key={skill}
                className="bg-grey-100 dark:bg-grey-700 py-[4px] px-[8px] rounded-[24px] text-[14px] font-medium"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
