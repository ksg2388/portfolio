import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
  plugins: [],
};
export default config;
