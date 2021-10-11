module.exports = {
  devServer: {
    //代理服务器 跨域请求
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,

}