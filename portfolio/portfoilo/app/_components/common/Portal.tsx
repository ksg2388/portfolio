'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      return setMounted(false);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return mounted
    ? createPortal(children, document.getElementById('portal') as HTMLElement)
    : null;
};

export default Portal;
