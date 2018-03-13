const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                "presets": [
                    "env"
                ]
            }
          }
        ]
    }
};

module.exports = config;
