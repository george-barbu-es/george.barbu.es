const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver.extraNodeModules = {
    ...(config.resolver.extraNodeModules || {}),
    tty: require.resolve('tty-browserify'),
    stream: require.resolve('readable-stream'),
    os: require.resolve('os-browserify/browser'),
    crypto: require.resolve('crypto-browserify'),
    util: require.resolve('util/'),
    'text-encoding-polyfill': require.resolve('text-encoding-polyfill'),
};

module.exports = withNativeWind(config, { input: './src/styles/styles.css' });
