module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',

  ],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': 'src/utils',
        },
      },
    ],
  ],
};
