module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: /react-native-css-interop/,
  });

  return config;
};
