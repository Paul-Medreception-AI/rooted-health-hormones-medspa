import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D9E75',
        dark: '#0F6E56',
        light: '#E1F5EE',
        ink: '#1E1D1A',
        cream: '#F7F4EE',
        muted: '#7A7870',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
