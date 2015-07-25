module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extension: ['', '.js', '.jsx'],
    path: __dirname
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel-loader" }
    ]
  }
};
