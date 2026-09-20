/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        blush: '#FFE3EC',
        lavender: '#E9E1FF',
        peach: '#FFE1C9',
        babyblue: '#DDEFFF',
        rose: '#E85D75',
        plum: '#5B3A5C',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(6deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
