const path = require('path');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    devServer: {
        publicPath: 'http://localhost:8080/build/',
        //publicPath: '/',
        port: 8080,
        proxy: {'/api/cuisines/': "http://localhost:3000"}
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      //publicPath: '/',
    },
    module: {
      rules: [ 
        {
          test: /\.jsx?/,
          exclude: '/(node_modules)/',
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
        {
          test: /\.scss$/,
          test: /\.(png|jpg)$/,
          use: ['style-loader', 'css-loader', 'sass-loader', 'url-loader']
        }
      ]
    }
}

