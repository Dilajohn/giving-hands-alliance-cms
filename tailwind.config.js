module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gha-dark': '#0a1f2c',
        'gha-orange': '#ef6c19',
        'gha-white': '#ffffff',
        'gha-gray': '#bbbbbb',
      },
    },
  },
  plugins: [],
};
