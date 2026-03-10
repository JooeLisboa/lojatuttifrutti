import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff4f9d',
          orange: '#ff9b6b',
          yellow: '#ffd966',
          blue: '#7fd5ff',
          deep: '#2d2046',
          soft: '#fff7fc',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(38, 26, 56, 0.12)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 0% 0%, rgba(255,79,157,0.20) 0, rgba(255,79,157,0) 50%), radial-gradient(circle at 100% 0%, rgba(127,213,255,0.24) 0, rgba(127,213,255,0) 42%), linear-gradient(160deg, #fff7fc 0%, #ffffff 52%, #f8fcff 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
