const path = require("path");

module.exports = {
  pwa: {
    name: "sw-demo",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    // workboxOptions: {
    //   swSrc: "./service-worker.js",
    // },
  },

  // // Other webpack config...
  // plugins: [
  //   // Other plugins...
  //   new GenerateSW({
  //     // These are some common options, and not all are required.
  //     // Consult the docs for more info.
  //     exclude: [/.../, '...'],
  //     maximumFileSizeToCacheInBytes: ...,
  //     navigateFallback: '...',
  //     runtimeCaching: [{
  //       // Routing via a matchCallback function:
  //       urlPattern: ({request, url}) => ...,
  //       handler: '...',
  //       options: {
  //         cacheName: '...',
  //         expiration: {
  //           maxEntries: ...,
  //         },
  //       },
  //     }, {
  //       // Routing via a RegExp:
  //       urlPattern: new RegExp('...'),
  //       handler: '...',
  //       options: {
  //         cacheName: '...',
  //         plugins: [..., ...],
  //       },
  //     }],
  //     skipWaiting: ...,
  //   }),
  // ],

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, ",/src/style/variable.less")],
    },
  },
};
