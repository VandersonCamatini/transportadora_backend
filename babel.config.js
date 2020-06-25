module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@interfaces': './src/interfaces',
        '@controllers': './src/controllers',
        '@routes': './src/routes',
        '@tests': './src/tests'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
