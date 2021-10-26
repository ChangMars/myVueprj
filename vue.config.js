// module.exports = {
//   publicPath: '/dist/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/myvueprj/dist/'
    : '/dist/'
}
