import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectList from '../project/ProjectList';
import ProjectItem from '../project/ProjectItem';
import Portal from '../common/Portal';

const ProjectDescription = () => {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const handleSelectedItem = (id: number) => {
    setSelectedItem(id);
  };

  const removeSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <h2 className="w-full text-center mt-[80px] font-bold text-[48px]">
        Projects
      </h2>
      <ProjectList handleItem={handleSelectedItem} />
      <AnimatePresence>
        <Portal>
          {selectedItem && (
            <ProjectItem
              removeSelectedItem={removeSelectedItem}
              selectedId={selectedItem}
            />
          )}
        </Portal>
      </AnimatePresence>
    </div>
  );
};

export default ProjectDescription;
