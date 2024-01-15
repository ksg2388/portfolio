import Dot from './Dot';

type Props = {
  currentPage: number;
};

const DotList = ({ currentPage }: Props) => {
  return (
    <div className="fixed top-[50%] right-[40px] translate-y-[-50%]">
      <div className="flex flex-col justify-between items-center w-[20px] h-[100px]">
        {[1, 2, 3, 4, 5].map((num) => {
          return <Dot num={num} key={num} currentPage={currentPage} />;
        })}
      </div>
    </div>
  );
};

export default DotList;
