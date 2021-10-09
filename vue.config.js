module.exports = {
    devServer: {
      proxy: {
        '/poi':{
          target: 'https://openapi.meituan.com/',
          ws: true,
          changeOrigin: true,
        },
        '/ajax': {
          target: 'https://m.maoyan.com/',
          ws: true,
          changeOrigin: true,
        //   pathRewrite: {
        //     '^/ajax': ''
        //   }
        }
      }
    }
  }