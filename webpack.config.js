const path = require("path"); // sirve para saber en dónde está nuestro proyecto
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // objeto para añadir la configuración
  entry: "./src/index.js", // punto de entrada del proyecto
  output: {
    // dónde va a vivir nuestro proyecto
    path: path.resolve(__dirname, "dist"), // crear la carpeta en donde va a vivir nuestro proyecto
    filename: "bundle.js", // nombre del empaquetado
    publicPath: "/",
  },
  resolve: {
    // extensiones con las que va a trabajar el proyecto
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
      "@pages": path.resolve(__dirname, "src/pages/")
    },
  },
  mode: "development",
  module: {
    // reglas y plugins
    rules: [
      {
        test: /\.(js|jsx)$/, // regex para probar los elementos con los que vamos a estar trabajando
        exclude: /node_modules/, // excluye lo que no queremos que lea el proyecto
        use: "babel-loader",
      },
      {
        test: /\.html$/, // regex para que trabaje con HTML
        use: "html-loader",
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // instanciando el plugin
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
