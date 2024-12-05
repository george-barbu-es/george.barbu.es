module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
          ],
          alias: {
            "@src": "./src",
            "@data": "./data",
            "@assets": "./assets",
            "@fonts": "./assets/fonts",
            "@api": "./src/api",
            "@components": "./src/components",
            "@screens": "./src/Screens",
            "@partials": "./src/Screens/Partials",
            "@utility": "./src/utility",
            "@templates": "./src/templates",
            "@constants": "./src/utility/constants.js",
          },
        },
      ],
    ],
  };
};
