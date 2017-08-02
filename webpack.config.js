var path = require('path');

module.exports = {
  devServer: {
    inline: true,
    port: 3000,
  },
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        enforce: "pre",
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
        {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ],
    // loaders: [
    //   { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
    //   { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
    //   {
    //     test: /\.css$/,
    //     use: [
    //       { loader: "style-loader" },
    //       { loader: "css-loader" }
    //     ]
    //   }
    // ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}