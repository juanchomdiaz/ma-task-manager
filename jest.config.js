module.exports = {
    setupFiles: ['<rootDir>/src/test/setupTest.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    roots: ['src'],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@context(.*)$": "<rootDir>/src/context$1",
      "^@hooks(.*)$": "<rootDir>/src/hooks$1",
      "^@helpers(.*)$": "<rootDir>/src/helpers$1",
      "^@i18n(.*)$": "<rootDir>/src/i18n$1",
    },
  };
  