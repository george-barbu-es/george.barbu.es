module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./apps'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@george-barbu-es/shared': './apps/shared/src'
        }
      }
    ]
  ]
};