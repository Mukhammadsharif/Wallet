module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: { src: './src/' }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['react-native-reanimated/plugin']
  ],
  env: {
    production: {
      plugins: []
    }
  }
}
