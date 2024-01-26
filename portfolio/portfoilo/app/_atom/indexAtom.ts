// eslint-disable-next-line import/no-extraneous-dependencies
import { atom } from 'recoil';
// eslint-disable-next-line import/no-extraneous-dependencies
import { recoilPersist } from 'recoil-persist';
import { ThemeType } from '../_types/common.types';

const { persistAtom } = recoilPersist();

// eslint-disable-next-line import/prefer-default-export
export const pageState = atom<number>({
  key: 'page',
  default: 1,
});

export const themeState = atom<ThemeType>({
  key: 'theme',
  default: 'LIGHT_MODE',
  effects_UNSTABLE: [persistAtom],
});
