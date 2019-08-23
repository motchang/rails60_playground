module.exports = {
  presets: [
    [
      '@babel/env',
      {
        corejs: 3,
        targets: { ie: '11' },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'ts-optchain',
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
  },
}
