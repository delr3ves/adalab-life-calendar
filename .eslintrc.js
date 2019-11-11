module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    "ecmaVersion": 6,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
