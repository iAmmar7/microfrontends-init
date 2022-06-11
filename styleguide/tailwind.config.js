const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        home: "url('https://vendians.com/static/media/bg.69e9c60a.png')",
      },
      borderRadius: {
        'rounded-4xl': '2rem',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      danger: 'var(--color-danger)',
      warning: 'var(--color-warning)',
      info: 'var(--color-info)',
      background: 'var(--color-background)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      overlay: 'var(--color-overlay)',
      ...colors,
    },
  },
  variants: {},
  plugins: [],
};
