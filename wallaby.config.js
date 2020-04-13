// Babel needs this
process.env.NODE_ENV = 'development'

module.exports = (_wallaby) => {
  return {
    autoDetect: true,
    tests: [
      'src/**/__tests__/*.js',
      'src/**/__tests__/*.jsx',
      'src/**/__tests__/*.ts',
      'src/**/__tests__/*.tsx',
      '!src/__tests__/storyshots.js',
    ],
  }
}
