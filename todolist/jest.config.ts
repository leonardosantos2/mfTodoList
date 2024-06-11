module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/config/browserMocks.ts'],
};
