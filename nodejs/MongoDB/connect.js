var mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://127.0.0.1/hqy');

mongoose.Promise = global.Promise;

/**
 * 创建一个模型
 * 就是设计数据库
 * MongoDB是动态的，非常灵活，只要在代码中设计数据库即可
 * mongoose 这个包就是可以让你的设计变简单
 */
var Cat = mongoose.model('Cat',{name:String});

var kitty = new Cat({name:'金刚狼'});
//c持久保存
kitty.save(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('meow')
    }
})