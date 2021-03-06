const path = require('path');

module.exports = {
  entry: { //main是默认入口，也可以是多入口
    main:'./src/main.js'
  },

  output: { //出口

    path: path.join(__dirname, './dist'),
    // 所有输出文件的绝对路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: 'bundle.js',
    // 「入口分块(entry chunk)」的文件名模板  出口分块
    publicPath: 'dist/'
    //解决bundle的sourcefile引入路径bug
  },
  module: {
    // 关于模块配置
   rules: [ //旧版本的loader
     // 模块规则（配置 loader、解析器等选项）
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },
     {
      test: /\.js$/,
      use: 'babel-loader',//允许使用es6——es7语法
      include: /src/, // 只转化src目录下的js
      exclude: /node_modules/ // 排除掉node_modules，优化打包速度
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use:{
         loader:'file-loader',
         query:{
           name:'images/[hash].[ext]'
         }
       }
     }
   ]
 } 


