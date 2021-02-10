module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@api': './api',
          '@navigation': './utils/navigation',
          '@utils': './src/utils',
          '@dto': './src/dto',
        },
      },
    ],
  ],
};
