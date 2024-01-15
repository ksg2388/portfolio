'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const RecoilContainer = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContainer;
