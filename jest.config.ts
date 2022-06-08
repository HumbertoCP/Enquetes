export default {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}
