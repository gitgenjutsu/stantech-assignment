export default {
  testEnvironment: "jsdom", // Simulate browser environment
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel for transpiling
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup file
};
