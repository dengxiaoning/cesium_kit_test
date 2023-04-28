'use strict'
const path = require('path')
const webpack = require('webpack')
const cesiumSource = 'node_modules/cesium/Build/Cesium';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()  ,
            //copy-webpack-plugin 5.x 的写法
            new CopyWebpackPlugin([{
              from: path.join(cesiumSource, 'Workers'),
              to: 'cesium/Workers'
          }]),
            new CopyWebpackPlugin([{
                from: path.join(cesiumSource, 'Assets'),
                to: 'cesium/Assets'
            }]),
            new CopyWebpackPlugin([{
                from: path.join(cesiumSource, 'Widgets'),
                to: 'cesium/Widgets'
            }]),
            new CopyWebpackPlugin([{
                from:path.join(cesiumSource, 'ThirdParty'),
                to: 'cesium/ThirdParty'
            }]),
            new CopyWebpackPlugin([{
              from:path.join(cesiumSource, 'Cesium.js'),
              to: 'cesium/index.js'
          }]),
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify("./cesium")
            })
        ],
        module: {
            unknownContextCritical: false,
            unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
        }
    },
}