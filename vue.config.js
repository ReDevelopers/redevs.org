const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("json-loader")
      .loader("json-loader")
      .end()
      .use("yaml-loader")
      .loader("yaml-loader");
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#EF494D',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    disableHostCheck: true,
  }
};
