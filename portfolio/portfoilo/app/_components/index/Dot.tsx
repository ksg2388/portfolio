import { pageState } from '@/app/_atom/indexAtom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSetRecoilState } from 'recoil';

type Props = {
  num: number;
  currentPage: number;
};

const Dot = ({ num, currentPage }: Props) => {
  const setCurrentPage = useSetRecoilState(pageState);

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className={`w-[10px] h-[10px] rounded-[50%] ${
        currentPage === num ? 'bg-primary-300' : 'bg-grey-200'
      } transition-[background-color 0.5s] duration-[1s]`}
      onClick={() => {
        return setCurrentPage(num);
      }}
      type="button"
    />
  );
};

export default Dot;
