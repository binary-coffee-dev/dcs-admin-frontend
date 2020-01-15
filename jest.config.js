module.exports = {
  testMatch: ["**/+(*.)+(spec).+(ts|js)?(x)"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'html', 'js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/{index,polyfills,test-setup,main}.ts',
    '!**/environment.*.ts',
    '!**/environment.ts',
    '!**/models/*.ts',
    '!**/*{module,actions,notification,model}.ts',
    '!**/*.html'
  ],
  coverageReporters: [
    'lcov', 'html', 'json'
  ],
  globals: {
    "ts-jest": {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ]
    },
  },
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts']
};
