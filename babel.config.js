const MODULE_RESOLVER = [
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
      '@env': '.env',
      "@src": "./src",
      "@data": "./data",
      "@assets": "./assets",
      "@api": "./src/api",
      "@context": "./src/context",
      "@components": "./src/components",
      "@navigation": "./src/navigation",
      "@screens": "./src/Screens",
      "@partials": "./src/Screens/Partials",
      "@redux": "./src/state-management",
      "@utility": "./src/utility",
      "@templates": "./src/templates",
      "@constants": "./src/utility/constants.js",
    },
  },
];



module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from",
      MODULE_RESOLVER,
    ],
  }
}