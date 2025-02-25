export default {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    commonjs: true,
  },
  globals: {
    process: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
  },
};
