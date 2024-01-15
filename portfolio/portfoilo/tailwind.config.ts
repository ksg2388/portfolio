import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-300': '#191765',
      'grey-200': '#D9D9D9',
    },
    extend: {
      keyframes: {
        typingCursor: {
          from: {
            borderRight: '2px solid white',
          },
          to: { borderRight: '2px solid black' },
        },
      },
      animation: {
        typingCursor: 'typingCursor 1s ease-in-out 0ms infinite',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
