const typescriptEslintParser = require("@typescript-eslint/parser");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: ["dist/"]
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin
    },
    rules: {
      "quotes": ["warn", "single"],
      "indent": ["warn", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["warn", "unix"],
      "semi": ["warn", "always"],
      "comma-dangle": ["warn", "always-multiline"],
      "dot-notation": "off",
      "eqeqeq": "warn",
      "curly": ["warn", "all"],
      "brace-style": ["warn"],
      "prefer-arrow-callback": ["warn"],
      "max-len": ["warn", 140],
      "no-console": ["warn"],
      "no-non-null-assertion": ["off"],
      "comma-spacing": ["error"],
      "no-multi-spaces": ["warn", { "ignoreEOLComments": true }],
      "lines-between-class-members": ["warn", "always", { "exceptAfterSingleLine": true }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  }
];
