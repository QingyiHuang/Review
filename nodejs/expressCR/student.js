/**
 * 只处理数据，不关心业务
 * 数据操纵文件模块 设计操作数据的api
 */
var fs=require('fs')
var dbPath = './da.json'
 /**
  * 获取学生列表,如果想获取一个函数中异步操作的结果，则必须通过回调函数来获取
  * 回调函数：就是获取异步操作结果
  * callback 第一个参数err   第二个参数结果
  * 成功是null 错误则err       成功是数组 错误是undefined
  */
exports.find=function(callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
         return callback(err)
        }else{
          callback(null,JSON.parse(data))
        }
    })
}

/**
 * single find
 * 根据id获取学生对象
 * number,callback
 */
exports.findById=function(sid,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            console.log(err)
        }else{
            var fileData=JSON.parse(data)
            var stu=fileData.students.find(function(item){
                return item.id===sid
            })
            callback(null,stu)
        }
    })
}

  /**
   * 添加保存学生
   */
exports.save=function(student,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }else{
            var file = JSON.parse(data)
            //主键处理
            student.id=parseInt(file.students[file.students.length-1].id)+1
            file.students.push(student)
            var ret=JSON.stringify({
                fruits:file.fruits,
                students:file.students
            },undefined,2)
            fs.writeFile(dbPath,ret,function(err){
                if(err){
                    return callback(err)
                }//成功就是没错
                callback(null)
            })
        }
    })
}
/**
 * 更新学生
 */
exports.update=function(student,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }else{
            var file = JSON.parse(data)
            student.id = parseInt(student.id)
            //方法1遍历  方法2find 接收一个函数坐参数
            //es6数组方法 find 
            //当便理想符合条件的时候 终止遍历，返回遍历项目
            var stu=file.students.find(function(item){
                return item.id===student.id
            })
            //保证键值相同情况下赋值
            for(var key in stu){
                stu[key] = student[key]
            }
            var ret=JSON.stringify(
                {fruits:file.fruits,
                students:file.students},undefined,2
            )
            fs.writeFile(dbPath,ret,function(err){
                if(err){
                    callback(err)
                }else{
                    callback(null)
                }
            })
        }
    })
}
   /**
    * 删除学生
    */
exports.delete=function(id,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }else{
            var file = JSON.parse(data) 
            //获取 数据中 数据所在数组的下标！
            //然后 用 数组.splice(下标，1)方法删除数据
            //es6语法 findIndex专门返回根据条件查询元素的下标
            var delId = file.students.findIndex(function(item){
                return item.id === parseInt(id)
            })
            
            file.students.splice(delId,1)
            var ret=JSON.stringify(
                {fruits:file.fruits,
                students:file.students},undefined,2
            )
            fs.writeFile(dbPath,ret,function(err){
                if(err){
                    callback(err)
                }else{
                    callback(null)
                }
            })
        }
    })
}