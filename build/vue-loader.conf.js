var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    // require('postcss-import')({
    //   addDependencyTo: webpack
    //   /* Is equivalent to
    //   onImport: function (files) {
    //   files.forEach(this.addDependency)
    //   }.bind(webpack)
    //   */
    // }),
    require('precss')({
      // addDependencyTo: webpack
    }),
    // require("postcss-cssnext")({
    //   features: {
    //     customProperties: false
    //   }
    // })
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}
