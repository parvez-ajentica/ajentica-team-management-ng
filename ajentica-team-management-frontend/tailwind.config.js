/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,css}'],
  theme: {
    extend: {
      keyframes: {
        rotationBack: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        rotationBack: 'rotationBack 1s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
};
