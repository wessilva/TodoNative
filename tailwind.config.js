/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Cores principais (azuis)
        'primary': {
          100: '#51bdf9',
          200: '#48AADC',
          300: '#4E5CDC',
          400: '#6254FA',
          DEFAULT: '#48AADC',
        },
        // Cores neutras (pretos/cinzas)
        'neutral': {
          100: '#000000',
          200: '#1A1A1A',
          300: '#252525',
          400: '#333333',
          500: '#4D4D4D',
          DEFAULT: '#1A1A1A',
        },
        // Cores de destaque (cinzas claros)
        'muted': {
          100: '#DEDEDE',
          200: '#DFDFDF',
          DEFAULT: '#DEDEDE',
        },
        // Cores de feedback (vermelhos)
        'feedback': {
          100: '#FF5353',
          DEFAULT: '#FF5353',
        },
      },
      fontFamily: {
        'inter': ['Inter'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      lineHeight: {
        normal: '140%',
        relaxed: '160%',
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
