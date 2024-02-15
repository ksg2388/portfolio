import FullPageContentContainer from '../_components/index/FullPageContentContainer';

const Home = () => {
  return (
    <>
      <div id="portal" />
      <div className="flex w-full overflow-hidden max-w-[1280px] mx-auto">
        <FullPageContentContainer />
      </div>
    </>
  );
};

export default Home;
