import { ProjectThumbnailType } from '@/app/_types/common.types';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  project: ProjectThumbnailType;
  handleItem: (id: number) => void;
};

const ProjectThumbnail = ({ project, handleItem }: Props) => {
  return (
    <motion.div
      className="flex flex-col w-[30%] h-full rounded-[16px] overflow-hidden shadow-lg dark:bg-grey-800"
      onClick={() => {
        return handleItem(project.id);
      }}
      role="presentation"
      layoutId={`container-${project.id}`}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="w-full h-[50%] overflow-hidden"
        layoutId={`project-image-${project.id}`}
      >
        <Image
          className="w-full h-full object-cover"
          src={project.imageUrl}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        className="mt-[24px] text-[24px] px-[12px]"
        layoutId={`project-title-${project.id}`}
      >
        {project.title}
      </motion.div>
      <div className="mt-[12px] text-[18px] px-[12px] font-medium">
        {project.description}
      </div>
      <div className="flex-col px-[12px] mt-auto mb-[20px]">
        <div className="mb-[8px] text-[16px]">사용 기술</div>
        <div className="flex flex-wrap gap-[8px]">
          {project.skillStack.map((skill) => {
            return (
              <div
                key={skill.name}
                className="bg-grey-100 dark:bg-grey-700 py-[4px] px-[8px] rounded-[24px] text-[14px] font-medium"
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectThumbnail;
