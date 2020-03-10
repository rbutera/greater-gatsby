module.exports = {
  settings: {
    version: "detect",
  },
  extends: ["xo/browser", "xo/esnext", "xo-typescript/space", "xo-react/space"],
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],
  },
}
