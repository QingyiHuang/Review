var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hqy')

var Schema = mongoose.Schema

var commentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],//约束 0 1 枚举
        default:0 //默认0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})

//导出模型构造函数
var Student=mongoose.model('Comment',commentSchema)
module.exports = Student
