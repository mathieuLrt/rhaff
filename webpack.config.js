const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve : {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            /*{
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            /*{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  // `vue-loader` options
                }
            },*/ {
              test: /\.html$/,
              use: 'raw-loader'
          }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })/*,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
  })*/]
};
