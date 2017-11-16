const { AotPlugin } = require('@ngtools/webpack');
// const nodeExternals = require('webpack-node-externals');
// const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const path = require('path');
const webpack = require('webpack');
/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  // externals: [
  //   nodeExternals({
  //     whitelist: [/@angular/, /@ng/]
  //   })
  // ],
  externals: [/(node_modules|main\..*\.js)/],

  entry: {
    // This is our Express server for Dynamic universal
    server: './server.ts',
    // This is an example of Static prerendering (generative)
    prerender: './prerender.ts'
  },
  resolve: { extensions: [".js", ".ts"] },
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname),
    filename: '[name].js'
  },

  plugins: [
    // new NormalModuleReplacementPlugin(
    //   /prism.js/,
    //   path.resolve(__dirname, './src/server-mocks/empty.js')
    //   // or if you need to make some type of specific mock (copy/pasting) and editing
    //   // path.resolve(__dirname, 'src/server-mocks/primeng.js')
    // ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ],
  target: 'node',
  node: {
    __dirname: false
  },
};
