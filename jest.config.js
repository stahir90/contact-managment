module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],
  
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
      '^.+\\.tsx?$': 'ts-jest','.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
  
    // Runs special logic, adding special
    // extended assertions to Jest
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect'
    ],
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: "jsdom",
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
      },
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'css'],
  }