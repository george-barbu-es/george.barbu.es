const { withExpo } = require('@expo/webpack-config');
const path = require('path');

module.exports = function (env, argv) {
  const config = withExpo(env, argv);

  // Enable CSS and TailwindCSS
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  return config;
};
