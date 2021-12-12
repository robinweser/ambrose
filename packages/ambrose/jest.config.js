module.exports = {
  verbose: true,
  testRegex: 'test\\.js$',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/', '/es/'],
  setupFiles: ['./src/testing/setup.js'],
  watchPathIgnorePatterns: ['node_modules'],
}
