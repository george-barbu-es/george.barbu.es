module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          "@shared": './shared', // Point to the shared directory
          "@data": "./data",
        },
      },
    ],
  ],
  babelrcRoots: [
    './apps/*',
    './shared', // Include shared in root Babel config
  ],
};