module.exports = {
  baseUrl: './',
  pages: {
    index: {
      entry: 'src/main.ts'
    }
  },
  // 以下是pwa配置
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
};