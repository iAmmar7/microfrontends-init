module.exports = {
  content: [
    './src/**/*.{html,js,ejs}',
    '@venturedive/root-config/src/**/*.{html,js,ejs}',
    '@venturedive/navbar/src/**/*.{html,js,ejs}',
  ],
  theme: {
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
    },
  },
  variants: {},
  plugins: [],
};
