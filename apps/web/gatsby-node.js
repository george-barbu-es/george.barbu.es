exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Alias react-native to react-native-web
        'react-native$': 'react-native-web'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: /node_modules\/react-native-.+/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    }
  });
};