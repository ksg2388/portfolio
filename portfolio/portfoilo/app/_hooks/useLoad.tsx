import { useEffect, useState } from 'react';

const useLoad = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return isLoad;
};

export default useLoad;
