module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins : [
      [ require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@routes": "./src/routes",
            "@views": "./src/views",
          }
        }
      ],
      ['module:react-native-dotenv', 
        {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
        }
      ]
    ]
  };
};