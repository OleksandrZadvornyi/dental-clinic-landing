const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/js/script.js", // Entry point for your JavaScript
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle images
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Output path for images
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use the index.html from src directory
    }),
    new MiniCssExtractPlugin({
      filename: "styles/main.css", // Output CSS file
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images"), // Source directory for images
          to: "images", // Destination directory in dist
        },
      ],
    }),
  ],
  mode: "production",
  devServer: {
    static: path.resolve(__dirname, "src"),
    open: true, // Automatically open the browser
  },
};
