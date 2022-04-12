module.exports = {
  globals: {
    baseURL: 'http://localhost:3000',
  },
  testMatch: ['**/specs/*.spec.js'],
  transform: {
    '\\.js$': 'react-scripts/config/jest/babelTransform',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/utils/setupTests.js'],
  maxWorkers: '50%',
};
