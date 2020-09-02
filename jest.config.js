module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
    'node_modules/(?!(react-native.*|@?react-navigation.*)/)',
    'node_modules/(?!(jest-)?react-native)',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
};
