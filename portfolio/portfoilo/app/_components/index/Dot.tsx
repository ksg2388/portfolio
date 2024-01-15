type Props = {
  num: number;
  currentPage: number;
};

const Dot = ({ num, currentPage }: Props) => {
  return (
    <div
      className={`w-[10px] h-[10px] rounded-[50%] ${
        currentPage === num ? 'bg-primary-300' : 'bg-grey-200'
      } transition-[background-color 0.5s] duration-[1s]`}
    />
  );
};

export default Dot;
