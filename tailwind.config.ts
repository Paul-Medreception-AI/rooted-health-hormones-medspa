import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D9E75',
        accent: '#F7F4EE',
        ink: '#1E1D1A',
        cream: '#F7F4EE',
      },
    },
  },
  plugins: [],
};

export default config;