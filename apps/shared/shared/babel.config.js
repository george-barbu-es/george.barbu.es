module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './components',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};