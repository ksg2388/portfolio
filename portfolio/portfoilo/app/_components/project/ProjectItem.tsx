import { themeState } from '@/app/_atom/indexAtom';
import projects from '@/app/_constants/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import HeulgitTroubleshooting from './HeulgitTroubleshooting';
import MMGameLandTroubleshooting from './MMGameLandTroubleshooting';
import MMMarbleTroubleshooting from './MMMarbleTroubleshooting';

type Props = {
  selectedId: number;
  removeSelectedItem: () => void;
};

const ProjectItem = ({ selectedId, removeSelectedItem }: Props) => {
  const project = projects[selectedId - 1];
  const theme = useRecoilValue(themeState);

  return (
    <motion.div
      className="flex-col absolute z-[10] top-0 left-0 w-full h-fit bg-grey-0 dark:bg-grey-800 px-[120px] py-[40px]"
      layoutId={`container-${selectedId}`}
      onClick={removeSelectedItem}
    >
      <div className="max-w-[1280px] h-full mx-auto overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <motion.div
          className="text-[56px] font-extrabold mt-[60px]"
          layoutId={`project-title-${selectedId}`}
        >
          {project.title}
        </motion.div>
        <motion.div
          layoutId={`project-image-${selectedId}`}
          className="mt-[100px] mx-auto max-w-full w-[60%] h-auto"
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
        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[28px] flex items-center">
            서비스 내용
          </div>
          <div className="font-[400] text-[20px] mt-[8px]">
            {project.service}
          </div>
        </div>

        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[24px] flex items-center">
            <span className="material-symbols-outlined mr-[8px]">
              calendar_month
            </span>
            Link
          </div>
          <div className="flex-col font-[400] text-[18px] mt-[8px]">
            {project.link.map((item) => {
              return (
                <div key={item.url} className="flex">
                  <Image
                    src={theme === 'LIGHT_MODE' ? item.src : item.darkSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="mr-[8px]"
                  />
                  <div>{item.url}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[24px] flex items-center">
            <span className="material-symbols-outlined mr-[8px]">
              calendar_month
            </span>
            작업 기간
          </div>
          <div className="font-[400] text-[18px] mt-[8px]">
            {`${project.startDate} ~ ${project.endDate}`}
          </div>
        </div>

        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[24px] flex items-center">
            <span className="material-symbols-outlined mr-[8px]">list_alt</span>
            기술 스텍
          </div>
          <div className="flex font-[400] text-[18px] mt-[12px] gap-[16px]">
            {project.skillStack.map((skill) => {
              return (
                <div className="flex" key={skill.name}>
                  <Image
                    className="mr-[6px]"
                    src={skill.src}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div>{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[24px] flex items-center">
            <span className="material-symbols-outlined mr-[8px]">groups</span>
            구성원
          </div>
          <div className="flex-col font-[400] text-[18px] mt-[8px]">
            {project.members}
          </div>
        </div>

        <div className="flex-col mt-[72px]">
          <div className="font-[700] text-[24px] flex items-center mb-[20px]">
            <span className="material-symbols-outlined mr-[8px]">
              emoji_objects
            </span>
            내가 기여한 부분
          </div>
          <div className="flex-col mt-[40px] ml-[8px]">
            {project.contribution.map((content) => {
              return (
                <div className="flex-col mt-[32px]" key={content.mainContent}>
                  <div className="text-[20px] font-[600] mb-[8px]">
                    {content.mainContent}
                  </div>
                  <div className="font-[400] text-[16px] ml-[12px]">
                    {content.subContents.map((sub) => {
                      return (
                        <div key={sub}>
                          <span className="text-[24px] font-[700] mr-[8px]">
                            ·
                          </span>
                          {sub}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedId === 1 && <HeulgitTroubleshooting />}
        {selectedId === 2 && <MMGameLandTroubleshooting />}
        {selectedId === 3 && <MMMarbleTroubleshooting />}
      </div>
    </motion.div>
  );
};

export default ProjectItem;
