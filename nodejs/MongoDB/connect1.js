var mongoose = require("mongoose")

var Schema =mongoose.Schema

mongoose.connect('mongodb://localhost/hqy')

/**
 * 设计文档结构，表结构
 * 字段名称就是表结构中的属性名称
 * 约束的目的是为了保证数据的完整性，不要有脏数据
 */
var userSchema = new Schema({
    username:{
        type:String,
        require:true //必须有。约束
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})
/**
 * 将文档结构发布为模型
 * mongoose.model 将一个架构发布为model
 * 第一个参 传入一个大写名次 表示数据库名称
 *          mongoose 会自动将大写名次的字符串生成小写复数
 *          例如User  会变为users集合名称
 * 第二个参数 架构Schema
 * 返回值 模型构造函数
 */
var User = mongoose.model('User',userSchema)
/**
 * 当有了模型构造函数
 * 就可以使用这个构造函数 对users集合 进行增删改差
 */


 /**
  * 新增数据
  */
 /*var admin = new User ({
     username:"张三",
     password:'123456',
     email:'5666666@qq.com'
 })
 admin.save(function(err,ret){
     if(err){
         console.log(err)
     }else{
         console.log(ret)
     }
 })*/


 /**
  * 查询数据  所有 和单个查询
  */
 /*User.find(function(err,ret){
     if(err){
         console.log(err)
     }else{
         console.log(ret)
     }
 })*/



/**
 * 找到所有符合条件 返回一个数组
 */
 /*User.find({username:"admin"},function(err,ret){
    if(err){
        console.log(err)
    }else{
        console.log(ret)
    }
 })*/



 /**
  * 查询一个 返回一个对象
  */
 /*User.findOne({username:"admin"},function(err,ret){
    if(err){
        console.log(err)
    }else{
        console.log(ret)
    }
 })*/

 /**
  * 删除
  */
 /*User.remove({username:"admin"},function(err,ret){
    if(err){
        console.log(err)
    }else{

        console.log("删除成功"+ret)
    }
 })*/

 /**
  * 更新数据
  */
 User.findByIdAndUpdate('5b70ec56c7a2ce44ac65acf3',{
     password:'qq123456'
 },function(err,ret){
     if(err){
         console.log(err)
     }else{
         console.log(ret)
     }
 })