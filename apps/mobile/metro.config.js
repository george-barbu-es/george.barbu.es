const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);
const rootPath = path.resolve(__dirname, '../../');

// Extra Node Modules
const extraNodeModules = {
  shared: path.resolve(rootPath, 'shared'),
  tty: require.resolve('tty-browserify'),
  stream: require.resolve('readable-stream'),
  os: require.resolve('os-browserify/browser'),
  crypto: require.resolve('crypto-browserify'),
  util: require.resolve('util/'),
  'text-encoding-polyfill': require.resolve('text-encoding-polyfill'),
};

config.resolver = {
  ...config.resolver,
  extraNodeModules,
  blacklistRE: exclusionList([
    /node_modules\/.*\/node_modules\/react-native\/.*/, // Avoid duplicate React Native resolution
  ]),
};

config.watchFolders = [
  path.resolve(__dirname, '../../shared'),
  path.resolve(rootPath, 'node_modules'),
];

// SVG Transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// NativeWind
module.exports = withNativeWind(config, { input: './src/styles/styles.css' });
