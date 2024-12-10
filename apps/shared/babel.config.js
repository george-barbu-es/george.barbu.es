module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx'],
         alias: {
          '@components': './src/components',
          '@utils': './src/utils',
        },
      }
    ]
  ]
};
