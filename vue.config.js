const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
         $: 'jquery',
         jquery: 'jquery',
         'window.jQuery': 'jquery',
         jQuery: 'jquery'
       })
    ]
  }
})

