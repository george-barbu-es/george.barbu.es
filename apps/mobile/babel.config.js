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
            "@assets": "./src/assets",
            "@fonts": "./src/assets/fonts",
            "@api": "./src/api",
            "@styles": "./src/styles",
            "@components": "./src/components",
            "@screens": "./src/Screens",
            "@partials": "./src/Screens/Partials",
            "@utils": "./src/utils",
            "@templates": "./src/templates",
            "@constants": "./src/utils/constants.js",
            "@shared":  "../../shared",
            "@data": "../../../data",
          },
        },
      ],
    ],
  };
};
