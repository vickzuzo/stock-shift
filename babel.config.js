module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          // root: ['.'],
          // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@interfaces": "./src/interfaces",
            "@router": "./src/router",
            "@assets": "./assets",
            "@utils": "./src/utils",
            "@constants": "./src/constants",
            "@network": "./src/network",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
            "@theme": "./src/theme",
            "@config": "./src/config",
          },
        },
      ],
      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
