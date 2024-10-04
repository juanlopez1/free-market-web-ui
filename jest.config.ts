import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@free-market-web-ui/(.*)$': '<rootDir>/src/$1',
        '^@free-market-web-ui/images/(.*)$': '<rootDir>/public/images/$1',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default createJestConfig(config);
