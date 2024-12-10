const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');
const { assetExts, sourceExts } = require('metro-config/src/defaults/defaults');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    assetExts: [...new Set([...assetExts, 'svg', 'png', 'jpg', 'jpeg', 'gif'])],
    sourceExts: [...new Set([...sourceExts, 'svg'])],
    extraNodeModules: {
      'shared': path.resolve(__dirname, '../shared'),
      'tty': require.resolve('tty-browserify'),
      'stream': require.resolve('readable-stream'),
      'os': require.resolve('os-browserify/browser'),
      'crypto': require.resolve('crypto-browserify'),
      'util': require.resolve('util/'),
      'text-encoding-polyfill': require.resolve('text-encoding-polyfill'),
    },
    blacklistRE: exclusionList([
      /node_modules\/.*\/node_modules\/react-native\/.*/,
    ]),
  },
  watchFolders: [
    path.resolve(__dirname, '../shared'),
    path.resolve(__dirname, '../../node_modules'),
  ],
  transformer: {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
