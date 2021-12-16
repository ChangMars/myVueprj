// module.exports = {
//   publicPath: '/dist/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/myvueprj/dist/',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://35.230.20.10/api/v0/report/latest/',
          pathRewrite: { '/api': '' },
          changeOrigin: true,
          ws: true,
        }
      }
    }
}
