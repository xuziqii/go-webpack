const path = require("path")
module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
}