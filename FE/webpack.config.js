const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./src/signup.js", signin: "./src/signin.js", home: "./src/home.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dist/[name].bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].css", chunkFilename: "css/[id].css" }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: "./src/signup.html",
    }),
    new HtmlWebpackPlugin({
      filename: "signin.html",
      chunks: ["signin"],
      template: "./src/signin.html",
    }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      chunks: ["home"],
      template: "./src/home.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
