/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths for React Native and Web apps
    "../react-native-app/**/*.{js,jsx,ts,tsx}",
    "../gatsby-web-app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Custom theme extensions
      colors: {
        'brand-primary': '#007bff',
        'brand-secondary': '#6c757d',
      },
      fontSize: {
        'xs-mobile': '10px',
        'sm-mobile': '12px',
      }
    }
  },
  plugins: [],
};