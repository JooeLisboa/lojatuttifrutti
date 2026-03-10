import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1c2340',
        'brand-blue': '#2667ff',
        'brand-orange': '#ff7a2f',
        'brand-green': '#3fcf6b',
        'brand-pink': '#eb1b75',
      },
      boxShadow: {
        premium: '0 16px 44px rgba(28, 35, 64, 0.14)',
      },
      backgroundImage: {
        'page-gradient':
          'radial-gradient(circle at 5% 0%, rgba(235,27,117,0.14) 0, rgba(235,27,117,0) 38%), radial-gradient(circle at 95% 20%, rgba(38,103,255,0.16) 0, rgba(38,103,255,0) 40%), radial-gradient(circle at 50% 100%, rgba(255,122,47,0.12) 0, rgba(255,122,47,0) 35%), linear-gradient(160deg, #f7f9ff 0%, #ffffff 55%, #fff9f4 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
