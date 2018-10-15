module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    React: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["html", "react", "vue", "prettier", "class-property"],
  rules: {
    //indent: [2, 2],
    "no-undef": "off",
    "max-len": "off",
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow console during development
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "react/prop-types": [
      "off",
      { ignore: "ignore", customValidators: "customValidator" }
    ],
    "react/display-name": [0, { ignoreTranspilerName: false }],
    "import/no-dynamic-require": 0
  },
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      rules: {
        indent: "off"
      }
    }
  ]
};
