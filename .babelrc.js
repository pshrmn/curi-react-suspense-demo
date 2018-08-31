module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        browsers: [
          ">0.25%",
          "not ie 11",
          "not op_mini all"
        ]
      }
    }],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties"
  ]
};
