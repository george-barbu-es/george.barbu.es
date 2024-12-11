module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: 'defaults' }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['react-native-web', { commonjs: true }], // Wrap the plugin and options in an array
      '@babel/plugin-proposal-class-properties',
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@src': './src',
            '@components': './src/components',
            '@utils': './src/utils',
            '@styles': './src/styles',
            '@shared': '../shared',
            '@data': '../../data',
          },
        },
      ],
    ],
  };
};