const  path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        home: './src/index.js'
    },
    mode: 'development',
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] },
            },
        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        proxy:{
            '/api': {
              target:'http://localhost:4000/',
              secure:false,
              changeOrigin: true  
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./public/index.html" //source html
        })
    ],
};