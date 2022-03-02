const path = require('path'); // sirve para saber en dónde está nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { // objeto para añadir la configuración
  entry: './src/index.js', // punto de entrada del proyecto
  output: { // dónde va a vivir nuestro proyecto
    path: path.resolve(__dirname, 'dist'), // crear la carpeta en donde va a vivir nuestro proyecto
    filename: 'bundle.js', // nombre del empaquetado
    publicPath: "/"
  },
  resolve: { // extensiones con las que va a trabajar el proyecto
    extensions: ['.js', '.jsx']
  },
  mode: "development",
  module: { // reglas y plugins
    rules: [
      {
        test: /\.(js|jsx)$/, // regex para probar los elementos con los que vamos a estar trabajando
        exclude: /node_modules/, // excluye lo que no queremos que lea el proyecto
        use: 'babel-loader'
      },
      {
        test: /\.html$/, // regex para que trabaje con HTML
        use: 'html-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // instanciando el plugin
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
}