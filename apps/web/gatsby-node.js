exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [
            // Path to your shared components in the monorepo
            /packages\/shared-components/,
            /node_modules\/react-native/,
          ],
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  require.resolve('babel-preset-gatsby'),
                  // Add React Native compatibility if necessary
                  require.resolve('@babel/preset-react'),
                  require.resolve('@babel/preset-env'),
                ],
                plugins: [
                  // Optional: Add React Native-specific plugins
                  require.resolve('@babel/plugin-transform-runtime'),
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        // Resolve React Native to React Native Web for Gatsby compatibility
        'react-native$': 'react-native-web',
      },
    },
  });
};
