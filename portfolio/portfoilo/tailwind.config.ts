import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-300': '#191765',
      'grey-0': '#F5F7FF',
      'grey-50': '#E6E9F3',
      'grey-100': '#D8DBE7',
      'grey-200': '#BCC0CF',
      'grey-300': '#A1A5B6',
      'grey-400': '#878C92',
      'grey-500': '#6F7486',
      'grey-600': '#585D6E',
      'grey-700': '#424755',
      'grey-800': '#2E313D',
      'grey-900': '#1B1D25',
      'grey-950': '#121319',
      'grey-1000': '#090A0D',
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
