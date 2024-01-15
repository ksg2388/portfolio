// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const pageState = atom<number>({
  key: 'page',
  default: 1,
});
