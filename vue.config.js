// module.exports = {
//   publicPath: '/dist/'
// }
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/myvueprj/dist/',
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        target: 'http://35.230.20.10/api/v0/report/latest/',
        pathRewrite: { '/api': '' },
        changeOrigin: true,
        ws: true,
      }
    }
  },
  // publicPath: "./", // 构建好的文件输出到哪里

  //   outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

  //   assetsDir: 'assets',

  //   transpileDependencies:['@vue/reactivity'],

  //   chainWebpack: config => {
  //     // ...
  //     config.module.rule('pdfjs-dist').test({
  //       test: /\.js$/,
  //       include: path.join(__dirname, 'node_modules/pdfjs-dist')
  //     }).use('babel-loader').loader('babel-loader').options({
  //       presets: ['@babel/preset-env'],
  //       plugins: ['@babel/plugin-proposal-optional-chaining']
  //     })

  //   // -------------------------- 配置pdf文件----------------------------------------
  //   config.module
  //   .rule('pdf')
  //   .test(/\.(pdf)$/)
  //   .use('url-loader')
  //   .loader('url-loader')
  //   .options({
  //     limit: 10000
  //   })
  //   .end()
  // },
}
