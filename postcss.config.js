module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 转化的基准值 这里使用的是 375/10
      rootValue: 37.5,
      // 哪些元素需要进行转换，*指的是所有
      propList: ['*']
    }
  }
}
