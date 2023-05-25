module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["no-relative-import-paths"],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: true },
    ],
  },
};
