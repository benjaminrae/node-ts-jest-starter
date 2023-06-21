const config = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

module.exports = config;
