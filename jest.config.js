export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|scss|png)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
