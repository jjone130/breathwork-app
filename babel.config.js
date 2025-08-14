/**
 * babel.config.js — Babel for Expo + Reanimated
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"], // keep LAST
  };
};


